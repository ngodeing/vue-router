gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.GDBackgroundColoredGrassObjects1= [];
gdjs.Untitled_32sceneCode.GDBackgroundColoredGrassObjects2= [];
gdjs.Untitled_32sceneCode.GDGrassObjects1= [];
gdjs.Untitled_32sceneCode.GDGrassObjects2= [];
gdjs.Untitled_32sceneCode.GDRectangleWoodObjects1= [];
gdjs.Untitled_32sceneCode.GDRectangleWoodObjects2= [];
gdjs.Untitled_32sceneCode.GDRectangleWood2Objects1= [];
gdjs.Untitled_32sceneCode.GDRectangleWood2Objects2= [];
gdjs.Untitled_32sceneCode.GDDinoMortObjects1= [];
gdjs.Untitled_32sceneCode.GDDinoMortObjects2= [];
gdjs.Untitled_32sceneCode.GDBigBrownDoorObjects1= [];
gdjs.Untitled_32sceneCode.GDBigBrownDoorObjects2= [];
gdjs.Untitled_32sceneCode.GDBigBrownDoor2Objects1= [];
gdjs.Untitled_32sceneCode.GDBigBrownDoor2Objects2= [];
gdjs.Untitled_32sceneCode.GDSandObjects1= [];
gdjs.Untitled_32sceneCode.GDSandObjects2= [];


gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDBigBrownDoorObjects1Objects = Hashtable.newFrom({"BigBrownDoor": gdjs.Untitled_32sceneCode.GDBigBrownDoorObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDDinoMortObjects1Objects = Hashtable.newFrom({"DinoMort": gdjs.Untitled_32sceneCode.GDDinoMortObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDBigBrownDoor2Objects1Objects = Hashtable.newFrom({"BigBrownDoor2": gdjs.Untitled_32sceneCode.GDBigBrownDoor2Objects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDDinoMortObjects1Objects = Hashtable.newFrom({"DinoMort": gdjs.Untitled_32sceneCode.GDDinoMortObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDSandObjects1Objects = Hashtable.newFrom({"Sand": gdjs.Untitled_32sceneCode.GDSandObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDDinoMortObjects1Objects = Hashtable.newFrom({"DinoMort": gdjs.Untitled_32sceneCode.GDDinoMortObjects1});
gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.playerAuthentication.displayAuthenticationBanner(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("DinoMort"), gdjs.Untitled_32sceneCode.GDDinoMortObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDDinoMortObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDDinoMortObjects1[i].behaviorActivated("PlatformerObject") ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDDinoMortObjects1[k] = gdjs.Untitled_32sceneCode.GDDinoMortObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDDinoMortObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDDinoMortObjects1 */
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Untitled_32sceneCode.GDDinoMortObjects1.length !== 0 ? gdjs.Untitled_32sceneCode.GDDinoMortObjects1[0] : null), true, "", 0);
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 2, "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("DinoMort"), gdjs.Untitled_32sceneCode.GDDinoMortObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDDinoMortObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDDinoMortObjects1[i].getBehavior("PlatformerObject").isUsingControl("Left") ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDDinoMortObjects1[k] = gdjs.Untitled_32sceneCode.GDDinoMortObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDDinoMortObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDDinoMortObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDDinoMortObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDDinoMortObjects1[i].flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("DinoMort"), gdjs.Untitled_32sceneCode.GDDinoMortObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDDinoMortObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDDinoMortObjects1[i].getBehavior("PlatformerObject").isUsingControl("Right") ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDDinoMortObjects1[k] = gdjs.Untitled_32sceneCode.GDDinoMortObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDDinoMortObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDDinoMortObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDDinoMortObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDDinoMortObjects1[i].flipX(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BigBrownDoor"), gdjs.Untitled_32sceneCode.GDBigBrownDoorObjects1);
gdjs.copyArray(runtimeScene.getObjects("DinoMort"), gdjs.Untitled_32sceneCode.GDDinoMortObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDBigBrownDoorObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDDinoMortObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDDinoMortObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDDinoMortObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDDinoMortObjects1[i].setPosition(100,573);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BigBrownDoor2"), gdjs.Untitled_32sceneCode.GDBigBrownDoor2Objects1);
gdjs.copyArray(runtimeScene.getObjects("DinoMort"), gdjs.Untitled_32sceneCode.GDDinoMortObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDBigBrownDoor2Objects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDDinoMortObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDDinoMortObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDDinoMortObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDDinoMortObjects1[i].setPosition(2500,573);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("DinoMort"), gdjs.Untitled_32sceneCode.GDDinoMortObjects1);
gdjs.copyArray(runtimeScene.getObjects("Sand"), gdjs.Untitled_32sceneCode.GDSandObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDSandObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDDinoMortObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDDinoMortObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDDinoMortObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDDinoMortObjects1[i].setPosition(100,573);
}
}}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDBackgroundColoredGrassObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBackgroundColoredGrassObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGrassObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGrassObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDRectangleWoodObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDRectangleWoodObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDRectangleWood2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDRectangleWood2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDDinoMortObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDDinoMortObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBigBrownDoorObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBigBrownDoorObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBigBrownDoor2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDBigBrownDoor2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDSandObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDSandObjects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);

return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
