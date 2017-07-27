import sys
#sys.path.append('/home/cold/projects/node-procgen-editor/blender')
folder = '/Users/vincent/projects/node-procgen-editor/blender'
sys.path.append(folder)
from library.sceneManager import sceneManager
import math
import bpy
import mathutils

class Cube:
    width = None
    height = None
    location = None
    depth = None

    def __init__(self, width, height, depth, location):
        self.width = width
        self.height = height
        self.depth = depth
        self.location = location


def main():
    """ World Builder server """
    params = { 'name'               : 'test2',  # name of new scene
               'erasePreviousScene' : True,                  # erase existing scene
               'sceneWidthInPixels' : 1024,                  # 1024 pixels along the horizontal-dimension
               'sceneHeightInPixels': 768,                   # 768 pixels along the vertical-dimension
               'sceneUnitScale'     : 1.0/100.0,             # set unit scale to 1.0 cm
               'sceneGridSpacing'   : 10.0/100.0,            # set the spacing between grid lines to 10 cm
               'sceneGridLinesNum'  : 20,                    # display 20 grid lines
             };
    # Instantiate a sceneManager object with the above params
    scene = sceneManager(params);

    cube1 = Cube(10, 10, 10, mathutils.Vector((0,0,0)))
    cube2 = Cube(10, 10, 10, mathutils.Vector((500,500,500)))


    params = { 'name'              : 'roomMaterial',              # tag with which RenderToolbox3 can access this material
               'diffuse_shader'    : 'LAMBERT',
               'diffuse_intensity' : 0.5,
               'diffuse_color'     : mathutils.Vector((0.6, 0.6, 0.6)),
               'specular_shader'   : 'WARDISO',
               'specular_intensity': 0.0,
               'specular_color'    : mathutils.Vector((1.0, 1.0, 1.0)),
               'alpha'             : 1.0
             };
    roomMaterialType = scene.generateMaterialType(params);

    params = { 'name'       : 'MainCube',
               'scaling'    : mathutils.Vector((cube1.width, cube1.height, cube1.depth)),
               'rotation'   : mathutils.Vector((math.pi/2, 0, 0)),
               'location'   : mathutils.Vector((cube1.location.x, cube1.location.y, cube1.location.z + cube1.height / 2)),
               'material'   : roomMaterialType,
               'flipNormal' : False,
             };

    cub1ref = scene.addCube(params);

    params2 = { 'name'       : 'MainCube',
                'scaling'    : mathutils.Vector((cube2.width, cube2.height, cube2.depth)),
                'rotation'   : mathutils.Vector((math.pi/2, math.pi/4, math.pi/8)),
                'location'   : mathutils.Vector((cube2.location.x, cube2.location.y, cube2.location.z + cube2.height / 2)),
                'material'   : roomMaterialType,
                'flipNormal' : False,
              };

    cub2ref = scene.addCube(params2);


    boolMod = cub1ref.modifiers.new('Booh', 'BOOLEAN')
    boolMod.object = cub2ref
    boolMod.operation = 'DIFFERENCE'
    bpy.context.scene.objects.active = cub1ref
    bpy.ops.object.modifier_apply(apply_as='DATA', modifier="Booh")

    bpy.context.scene.objects.unlink(cub2ref)

    scene.exportToColladaFile(folder);


if __name__ == "__main__":
    main()


#sudo add-apt-repository ppa:irie/blender
