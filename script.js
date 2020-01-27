(function(){
    var script = {
 "start": "this.playAudioList([this.audio_F9519C28_E359_DB1F_41E8_ECD9E705759C, this.audio_F98AA82B_E366_3B11_41C6_1D645BB1CBD3, this.audio_F9E9C201_E366_2F11_41D3_CEAD915E74B8, this.audio_F9CD3A4B_E366_5F11_41E5_679F3541D93C, this.audio_FB97A389_E366_6D11_41E6_48CBEAB331C6]); this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist,this.mainPlayList]); this.playList_82E6FC91_EC9A_0BA8_41D6_2F68E5A43E06.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "rootPlayer",
 "children": [
  "this.MainViewer",
  "this.Container_32CC4EA6_16EF_8891_41B3_C36F5FCE49B7",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_0AEF1C12_16A3_8FB1_4188_D5C88CE581C3",
  "this.Container_386C68AA_17CC_0B05_4191_7DAFDF1C1A4B",
  "this.Container_381217E8_17DC_0505_41A2_85B8D0083AEA",
  "this.Container_2792A64E_17CC_071D_41B0_BEA23997C067",
  "this.Container_24580B6E_173C_0D1A_41B0_1B17CFD194C1",
  "this.Container_1831720E_17B1_6AC3_41B2_FDD66A00A2E5",
  "this.Container_004462E1_0DFB_B53A_4192_155A961E0B9D",
  "this.Container_8DFFEE18_ECEA_06D9_41DA_706F561877D5",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "class": "Player",
 "borderRadius": 0,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "paddingLeft": 0,
 "paddingRight": 0,
 "propagateClick": false,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "desktopMipmappingEnabled": false,
 "mobileMipmappingEnabled": false,
 "creationPolicy": "inAdvance",
 "vrPolyfillScale": 0.5,
 "verticalAlign": "top",
 "minWidth": 20,
 "layout": "absolute",
 "definitions": [{
 "initialPosition": {
  "yaw": 16.96,
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 6.03,
    "path": "shortest",
    "targetPitch": 2.56,
    "pitchSpeed": 6.94,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 12.94
   },
   {
    "targetYaw": -23.74,
    "path": "shortest",
    "targetPitch": -3.2,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -118.95,
    "path": "shortest",
    "targetPitch": -22.3,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -54.89,
    "path": "shortest",
    "targetPitch": -16.02,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 15.95,
    "path": "shortest",
    "targetPitch": -14.26,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 109.41,
    "path": "shortest",
    "targetPitch": 9.61,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_82B7FAFF_EC9A_0F57_41E3_ABDAB343A27D",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 140.7,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -139.18,
    "path": "shortest",
    "targetPitch": 27.63,
    "pitchSpeed": 108,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 216
   },
   {
    "targetYaw": -145.58,
    "path": "shortest",
    "targetPitch": -10.49,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -70.97,
    "path": "shortest",
    "targetPitch": -13.5,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -8.42,
    "path": "shortest",
    "targetPitch": -4.21,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 116.44,
    "path": "shortest",
    "targetPitch": -6.72,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 174.98,
    "path": "shortest",
    "targetPitch": -2.2,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_826B9D20_EC9A_0AE9_41BD_044DDECB2D90",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 113.25,
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 0,
    "path": "shortest",
    "targetPitch": 0,
    "pitchSpeed": 19.41,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 38
   },
   {
    "targetYaw": -98.6,
    "path": "shortest",
    "targetPitch": -4.46,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -52.88,
    "path": "shortest",
    "targetPitch": -2.95,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 80.27,
    "path": "shortest",
    "targetPitch": -0.94,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 127.49,
    "path": "shortest",
    "targetPitch": -3.2,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -167.94,
    "path": "shortest",
    "targetPitch": -2.95,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -107.65,
    "path": "shortest",
    "targetPitch": 24.93,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_83E49C80_EC9A_0BA9_41C7_FF85F64E74CA",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 64.41,
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 40.45,
    "path": "shortest",
    "targetPitch": 3.77,
    "pitchSpeed": 9.57,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 18.22
   },
   {
    "targetYaw": 85.29,
    "path": "shortest",
    "targetPitch": 11.12,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 138.3,
    "path": "shortest",
    "targetPitch": -1.44,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -173.72,
    "path": "shortest",
    "targetPitch": -0.19,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -122.72,
    "path": "shortest",
    "targetPitch": 0.31,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_8308FF30_EC9A_06E9_41E2_DDD866063A28",
 "class": "PanoramaCamera"
},
{
 "levels": [
  {
   "url": "media/popup_DEA413A8_E5BE_3DF9_41E8_D053101E9707_0_0.jpg",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  },
  {
   "url": "media/popup_DEA413A8_E5BE_3DF9_41E8_D053101E9707_0_1.jpg",
   "width": 682,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_DEA413A8_E5BE_3DF9_41E8_D053101E9707_0_2.jpg",
   "width": 341,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_B526D4C4_E5EA_1BB7_41E0_EE60088D36B8",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "yaw": -171.67,
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 0,
    "path": "shortest",
    "targetPitch": 0.91,
    "pitchSpeed": 52.61,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 104.7
   },
   {
    "targetYaw": 53.38,
    "path": "shortest",
    "targetPitch": 0.57,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 98.86,
    "path": "shortest",
    "targetPitch": -0.44,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -143.82,
    "path": "shortest",
    "targetPitch": 3.58,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -99.61,
    "hfovSpeed": 33.25,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetHfov": 80,
    "targetPitch": 3.58,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -50.12,
    "path": "shortest",
    "targetPitch": -3.2,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -15.45,
    "path": "shortest",
    "targetPitch": 0.82,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_83AB8E4A_EC9A_06B9_41EC_2F04C7AD57C1",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 117.17,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -126.87,
    "path": "shortest",
    "targetPitch": 28.14,
    "pitchSpeed": 57.44,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 114.41
   },
   {
    "targetYaw": -64.19,
    "path": "shortest",
    "targetPitch": -2.7,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 0.88,
    "path": "shortest",
    "targetPitch": -7.47,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 57.91,
    "path": "shortest",
    "targetPitch": -8.98,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_83C03E0A_EC9A_06B9_41DA_AE272F625C97",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 4.02,
  "class": "PanoramaCameraPosition",
  "pitch": 12.06
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 53.38,
    "path": "shortest",
    "targetPitch": 13.38,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 88.05,
    "path": "shortest",
    "targetPitch": -14.01,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 158.14,
    "path": "shortest",
    "targetPitch": -12,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -156.64,
    "path": "shortest",
    "targetPitch": -9.99,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -42.83,
    "path": "shortest",
    "targetPitch": -1.44,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_E9C5B2DE_E46A_1F59_41E8_91B64D35D990_camera",
 "class": "PanoramaCamera"
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_D021BC9C_F1CC_DED3_41DF_BD35CA2B988A",
   "player": "this.MapViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_82E6FC91_EC9A_0BA8_41D6_2F68E5A43E06",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": -126.04,
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -135.66,
    "path": "shortest",
    "targetPitch": 36.93,
    "pitchSpeed": 12.26,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 23.64
   },
   {
    "targetYaw": -106.14,
    "path": "shortest",
    "targetPitch": -8.73,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -2.89,
    "path": "shortest",
    "targetPitch": -9.99,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 61.67,
    "path": "shortest",
    "targetPitch": -1.19,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 122.72,
    "path": "shortest",
    "targetPitch": 0.06,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 174.47,
    "path": "shortest",
    "targetPitch": -4.46,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 51.63,
    "path": "shortest",
    "targetPitch": -2.45,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_85F4D25B_EC9A_7F5F_41EC_C8AF3BD210E6",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -126.87,
  "class": "PanoramaCameraPosition",
  "pitch": -15.66
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -91.82,
    "path": "shortest",
    "targetPitch": -1.19,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 176.99,
    "path": "shortest",
    "targetPitch": -0.19,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 58.16,
    "path": "shortest",
    "targetPitch": -3.45,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_EFE15D2B_E466_0AFF_41D4_0DCE456C6586_camera",
 "class": "PanoramaCamera"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -112.24,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_DDB67E6D_E5AA_077B_41EB_FC229823E01C",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_DDB67E6D_E5AA_077B_41EB_FC229823E01C_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 682
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 2.75,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "pitch": 4.2
},
{
 "headerBackgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_CB577EE9_E4AA_077B_41B7_C94A78458716",
 "backgroundOpacity": 1,
 "titleFontColor": "#000000",
 "width": "90%",
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Window",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "titlePaddingRight": 5,
 "titlePaddingTop": 5,
 "footerBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "headerBorderSize": 0,
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "backgroundColor": [],
 "verticalAlign": "middle",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
 "height": "90%",
 "title": "",
 "borderSize": 0,
 "titleFontStyle": "normal",
 "headerPaddingRight": 0,
 "bodyBackgroundOpacity": 1,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "headerPaddingLeft": 0,
 "bodyPaddingLeft": 0,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "headerBackgroundOpacity": 1,
 "scrollBarColor": "#000000",
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPaddingRight": 10,
 "bodyBorderColor": "#000000",
 "shadowBlurRadius": 6,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "closeButtonPaddingLeft": 10,
 "bodyPaddingTop": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "layout": "vertical",
 "closeButtonBorderRadius": 11,
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "children": [
  "this.htmlText_CB5F7EE7_E4AA_0777_41CF_BE76A5BB2BC6",
  {
   "backgroundOpacity": 1,
   "width": "100%",
   "class": "WebFrame",
   "borderRadius": 0,
   "insetBorder": false,
   "paddingLeft": 0,
   "paddingRight": 0,
   "url": "//www.youtube.com/embed/Y7BmSbFBhLQ",
   "backgroundColorRatios": [],
   "propagateClick": false,
   "minHeight": 0,
   "backgroundColor": [],
   "minWidth": 0,
   "height": "89%",
   "paddingTop": 0,
   "backgroundColorDirection": "vertical",
   "paddingBottom": 0,
   "borderSize": 0,
   "scrollEnabled": true,
   "data": {
    "name": "VideoUrl79314"
   },
   "shadow": false
  }
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "shadowHorizontalLength": 3,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "closeButtonBackgroundOpacity": 1,
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 0,
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "backgroundColorRatios": [],
 "closeButtonBorderSize": 0,
 "closeButtonPaddingBottom": 10,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 0,
 "titleFontSize": "0vmin",
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 20,
 "veilOpacity": 0.4,
 "shadowVerticalLength": 0,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 0,
 "paddingTop": 0,
 "bodyPaddingBottom": 0,
 "titlePaddingLeft": 5,
 "closeButtonPaddingTop": 10,
 "closeButtonIconColor": "#000000",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "close": "this.resumeGlobalAudios('window_CB577EE9_E4AA_077B_41B7_C94A78458716')",
 "bodyPaddingRight": 0,
 "closeButtonBackgroundColor": [],
 "shadowSpread": 1,
 "data": {
  "name": "Window78851"
 },
 "titleFontFamily": "Arial",
 "bodyBorderSize": 0
},
{
 "headerBackgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_CABC5972_E4BA_0D68_41DA_F5FC042CE2B0",
 "backgroundOpacity": 1,
 "titleFontColor": "#000000",
 "width": "90%",
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Window",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "titlePaddingRight": 5,
 "titlePaddingTop": 5,
 "footerBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "headerBorderSize": 0,
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "backgroundColor": [],
 "verticalAlign": "middle",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
 "height": "90%",
 "bodyBackgroundOpacity": 1,
 "borderSize": 0,
 "titleFontStyle": "normal",
 "headerPaddingRight": 0,
 "title": "",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "headerPaddingLeft": 0,
 "bodyPaddingLeft": 0,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "headerBackgroundOpacity": 1,
 "scrollBarColor": "#000000",
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPaddingRight": 10,
 "bodyBorderColor": "#000000",
 "shadowBlurRadius": 6,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "footerBorderColor": "#000000",
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "closeButtonPaddingLeft": 10,
 "bodyPaddingTop": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "layout": "vertical",
 "closeButtonBorderRadius": 11,
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "children": [
  "this.htmlText_CABFA973_E4BA_0D68_41D2_3ED511317D81",
  {
   "backgroundOpacity": 1,
   "width": "100%",
   "class": "WebFrame",
   "borderRadius": 0,
   "insetBorder": false,
   "paddingLeft": 0,
   "paddingRight": 0,
   "url": "//www.youtube.com/embed/Js4IrgZ_W44?v=Js4IrgZ_W44",
   "backgroundColorRatios": [],
   "propagateClick": false,
   "minHeight": 0,
   "backgroundColor": [],
   "minWidth": 0,
   "height": "89%",
   "paddingTop": 0,
   "backgroundColorDirection": "vertical",
   "paddingBottom": 0,
   "borderSize": 0,
   "scrollEnabled": true,
   "data": {
    "name": "VideoUrl82476"
   },
   "shadow": false
  }
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "shadowHorizontalLength": 3,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "closeButtonBackgroundOpacity": 1,
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 0,
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "backgroundColorRatios": [],
 "closeButtonBorderSize": 0,
 "closeButtonPaddingBottom": 10,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 0,
 "titleFontSize": "0vmin",
 "footerBackgroundOpacity": 1,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 20,
 "veilOpacity": 0.4,
 "shadowVerticalLength": 0,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 0,
 "paddingTop": 0,
 "footerBorderSize": 0,
 "bodyPaddingBottom": 0,
 "titlePaddingLeft": 5,
 "closeButtonPaddingTop": 10,
 "closeButtonIconColor": "#000000",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "close": "this.resumeGlobalAudios('window_CABC5972_E4BA_0D68_41DA_F5FC042CE2B0')",
 "bodyPaddingRight": 0,
 "closeButtonBackgroundColor": [],
 "shadowSpread": 1,
 "data": {
  "name": "Window78851"
 },
 "titleFontFamily": "Arial",
 "bodyBorderSize": 0
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E8E42205_E364_33E7_41E6_A73F2DB39F27_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8E42205_E364_33E7_41E6_A73F2DB39F27_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8E42205_E364_33E7_41E6_A73F2DB39F27_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8E42205_E364_33E7_41E6_A73F2DB39F27_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E8E42205_E364_33E7_41E6_A73F2DB39F27_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8E42205_E364_33E7_41E6_A73F2DB39F27_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8E42205_E364_33E7_41E6_A73F2DB39F27_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8E42205_E364_33E7_41E6_A73F2DB39F27_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E8E42205_E364_33E7_41E6_A73F2DB39F27_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8E42205_E364_33E7_41E6_A73F2DB39F27_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8E42205_E364_33E7_41E6_A73F2DB39F27_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8E42205_E364_33E7_41E6_A73F2DB39F27_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E8E42205_E364_33E7_41E6_A73F2DB39F27_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8E42205_E364_33E7_41E6_A73F2DB39F27_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8E42205_E364_33E7_41E6_A73F2DB39F27_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8E42205_E364_33E7_41E6_A73F2DB39F27_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E8E42205_E364_33E7_41E6_A73F2DB39F27_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E8E42205_E364_33E7_41E6_A73F2DB39F27_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8E42205_E364_33E7_41E6_A73F2DB39F27_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8E42205_E364_33E7_41E6_A73F2DB39F27_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8E42205_E364_33E7_41E6_A73F2DB39F27_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E8E42205_E364_33E7_41E6_A73F2DB39F27_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8E42205_E364_33E7_41E6_A73F2DB39F27_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8E42205_E364_33E7_41E6_A73F2DB39F27_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8E42205_E364_33E7_41E6_A73F2DB39F27_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Planta Baja - Direcci\u00f3n",
 "id": "panorama_E8E42205_E364_33E7_41E6_A73F2DB39F27",
 "overlays": [
  "this.overlay_E8E4B205_E364_33E7_41CF_B9714A4AE603",
  "this.panorama_E8E42205_E364_33E7_41E6_A73F2DB39F27_tcap0",
  "this.overlay_A911B617_E59A_06D7_41EC_7B25297CDA02"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 124.52,
   "class": "AdjacentPanorama",
   "backwardYaw": -22.71,
   "panorama": "this.panorama_EADC6D16_E147_A8ED_41E7_7A006A29B117",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_82C12CA3_EC9A_0BEF_41EC_167990F4DC6E",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E8E42205_E364_33E7_41E6_A73F2DB39F27_t.jpg",
 "hfovMax": 120
},
{
 "initialPosition": {
  "yaw": -148.18,
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 30.63,
    "path": "shortest",
    "targetPitch": 40.67,
    "pitchSpeed": 41.51,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 82.39
   },
   {
    "targetYaw": -30.77,
    "path": "shortest",
    "targetPitch": 1.82,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 106.89,
    "path": "shortest",
    "targetPitch": -0.19,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 31.78,
    "path": "shortest",
    "targetPitch": -3.45,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_8783D6AF_EC9A_07F7_41EA_B5B8F5B06B08",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -171.67,
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 0,
    "path": "shortest",
    "targetPitch": 0.91,
    "pitchSpeed": 52.61,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 104.7
   },
   {
    "targetYaw": 53.38,
    "path": "shortest",
    "targetPitch": 0.57,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 98.86,
    "path": "shortest",
    "targetPitch": -0.44,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -143.82,
    "path": "shortest",
    "targetPitch": 3.58,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -99.61,
    "hfovSpeed": 33.25,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetHfov": 80,
    "targetPitch": 3.58,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -50.12,
    "path": "shortest",
    "targetPitch": -3.2,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -15.45,
    "path": "shortest",
    "targetPitch": 0.82,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_8387CE68_EC9A_0779_41E5_CB2EDDFD0FE0",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -40.07,
    "path": "shortest",
    "targetPitch": -9.55,
    "pitchSpeed": 16.89,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -129.76,
    "path": "shortest",
    "targetPitch": -15.58,
    "pitchSpeed": 16.89,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 31.78,
    "path": "shortest",
    "targetPitch": -12.81,
    "pitchSpeed": 16.89,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 101.87,
    "path": "shortest",
    "targetPitch": -6.53,
    "pitchSpeed": 16.89,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F5214712_E4A4_51E2_41E0_B73B9A6D712C_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 149.13,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -139.18,
    "path": "shortest",
    "targetPitch": 27.63,
    "pitchSpeed": 108,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 216
   },
   {
    "targetYaw": -145.58,
    "path": "shortest",
    "targetPitch": -10.49,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -70.97,
    "path": "shortest",
    "targetPitch": -13.5,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -8.42,
    "path": "shortest",
    "targetPitch": -4.21,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 116.44,
    "path": "shortest",
    "targetPitch": -6.72,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 174.98,
    "path": "shortest",
    "targetPitch": -2.2,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_989DC79F_EC9A_05D7_41E2_7DD9763ACE1C",
 "class": "PanoramaCamera"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": 83.29,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_D9171239_E5BA_3EDB_4198_5B1739633D10",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_D9171239_E5BA_3EDB_4198_5B1739633D10_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 682
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 4.81,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "pitch": -9.16
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -38.31,
    "path": "shortest",
    "targetPitch": -1.19,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -18.46,
    "path": "shortest",
    "targetPitch": -32.09,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 35.8,
    "path": "shortest",
    "targetPitch": -10.24,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -3.64,
    "path": "shortest",
    "targetPitch": 37.24,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_E9C4108D_E46A_3BBB_41E4_FCB0E78FC031_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -94.08,
    "hfovSpeed": 33.25,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetHfov": 80,
    "targetPitch": -1.95,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -139.05,
    "hfovSpeed": 33.25,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetHfov": 100,
    "targetPitch": -13.75,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 115.44,
    "hfovSpeed": 33.25,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetHfov": 80,
    "targetPitch": -4.71,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 133.52,
    "hfovSpeed": 33.25,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetHfov": 100,
    "targetPitch": -8.48,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "panorama_EA80C6E4_E147_992C_41D3_588476BDC207_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -111.81,
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 78.63,
    "path": "shortest",
    "targetPitch": 1.26,
    "pitchSpeed": 14.16,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 27.44
   },
   {
    "targetYaw": -153.62,
    "path": "shortest",
    "targetPitch": 3.33,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 12.44,
    "path": "shortest",
    "targetPitch": 16.14,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 18.72,
    "path": "shortest",
    "targetPitch": -7.22,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_85273411_EC9A_7AAB_41E8_058819399B3B",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_F52171BD_E4A4_5027_41E5_9EE998F7E297_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_F52171BD_E4A4_5027_41E5_9EE998F7E297_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F52171BD_E4A4_5027_41E5_9EE998F7E297_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F52171BD_E4A4_5027_41E5_9EE998F7E297_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F52171BD_E4A4_5027_41E5_9EE998F7E297_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_F52171BD_E4A4_5027_41E5_9EE998F7E297_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F52171BD_E4A4_5027_41E5_9EE998F7E297_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F52171BD_E4A4_5027_41E5_9EE998F7E297_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F52171BD_E4A4_5027_41E5_9EE998F7E297_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_F52171BD_E4A4_5027_41E5_9EE998F7E297_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F52171BD_E4A4_5027_41E5_9EE998F7E297_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F52171BD_E4A4_5027_41E5_9EE998F7E297_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_F52171BD_E4A4_5027_41E5_9EE998F7E297_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F52171BD_E4A4_5027_41E5_9EE998F7E297_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_F52171BD_E4A4_5027_41E5_9EE998F7E297_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F52171BD_E4A4_5027_41E5_9EE998F7E297_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F52171BD_E4A4_5027_41E5_9EE998F7E297_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_F52171BD_E4A4_5027_41E5_9EE998F7E297_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_F52171BD_E4A4_5027_41E5_9EE998F7E297_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F52171BD_E4A4_5027_41E5_9EE998F7E297_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F52171BD_E4A4_5027_41E5_9EE998F7E297_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F52171BD_E4A4_5027_41E5_9EE998F7E297_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_F52171BD_E4A4_5027_41E5_9EE998F7E297_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F52171BD_E4A4_5027_41E5_9EE998F7E297_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F52171BD_E4A4_5027_41E5_9EE998F7E297_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "2do Piso - Pasillo 1",
 "id": "panorama_F52171BD_E4A4_5027_41E5_9EE998F7E297",
 "overlays": [
  "this.overlay_F3B0B892_E49A_0BA9_41D1_84F3583A316F",
  "this.panorama_F52171BD_E4A4_5027_41E5_9EE998F7E297_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 25.05,
   "class": "AdjacentPanorama",
   "backwardYaw": -39.3,
   "panorama": "this.panorama_F5213C55_E4A4_D066_416D_85F4BFC80191",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": -1.8,
 "cardboardMenu": "this.Menu_82C12CA3_EC9A_0BEF_41EC_167990F4DC6E",
 "class": "Panorama",
 "vfov": 176.36,
 "thumbnailUrl": "media/panorama_F52171BD_E4A4_5027_41E5_9EE998F7E297_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E9C4108D_E46A_3BBB_41E4_FCB0E78FC031_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E9C4108D_E46A_3BBB_41E4_FCB0E78FC031_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E9C4108D_E46A_3BBB_41E4_FCB0E78FC031_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E9C4108D_E46A_3BBB_41E4_FCB0E78FC031_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E9C4108D_E46A_3BBB_41E4_FCB0E78FC031_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E9C4108D_E46A_3BBB_41E4_FCB0E78FC031_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E9C4108D_E46A_3BBB_41E4_FCB0E78FC031_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E9C4108D_E46A_3BBB_41E4_FCB0E78FC031_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E9C4108D_E46A_3BBB_41E4_FCB0E78FC031_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E9C4108D_E46A_3BBB_41E4_FCB0E78FC031_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E9C4108D_E46A_3BBB_41E4_FCB0E78FC031_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E9C4108D_E46A_3BBB_41E4_FCB0E78FC031_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E9C4108D_E46A_3BBB_41E4_FCB0E78FC031_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E9C4108D_E46A_3BBB_41E4_FCB0E78FC031_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E9C4108D_E46A_3BBB_41E4_FCB0E78FC031_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E9C4108D_E46A_3BBB_41E4_FCB0E78FC031_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E9C4108D_E46A_3BBB_41E4_FCB0E78FC031_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E9C4108D_E46A_3BBB_41E4_FCB0E78FC031_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E9C4108D_E46A_3BBB_41E4_FCB0E78FC031_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E9C4108D_E46A_3BBB_41E4_FCB0E78FC031_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E9C4108D_E46A_3BBB_41E4_FCB0E78FC031_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E9C4108D_E46A_3BBB_41E4_FCB0E78FC031_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E9C4108D_E46A_3BBB_41E4_FCB0E78FC031_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E9C4108D_E46A_3BBB_41E4_FCB0E78FC031_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E9C4108D_E46A_3BBB_41E4_FCB0E78FC031_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "2do Piso - Biblioteca",
 "id": "panorama_E9C4108D_E46A_3BBB_41E4_FCB0E78FC031",
 "overlays": [
  "this.overlay_C1C5C87E_E49A_0B59_41D6_89ECE47257EC",
  "this.overlay_C6C4B3D3_E49A_FDAF_41C0_A3830852E839",
  "this.panorama_E9C4108D_E46A_3BBB_41E4_FCB0E78FC031_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -0.5,
   "class": "AdjacentPanorama",
   "backwardYaw": -38.79,
   "panorama": "this.panorama_E9C2B1AC_E46A_1DF9_41D2_1E8C48B2DC22",
   "distance": 1
  },
  {
   "yaw": -167.06,
   "class": "AdjacentPanorama",
   "backwardYaw": 100.24,
   "panorama": "this.panorama_E9C4F462_E46B_FB69_41EA_EBF76426CC46",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_82C12CA3_EC9A_0BEF_41EC_167990F4DC6E",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E9C4108D_E46A_3BBB_41E4_FCB0E78FC031_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 113.25,
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 0,
    "path": "shortest",
    "targetPitch": 0,
    "pitchSpeed": 19.41,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 38
   },
   {
    "targetYaw": -98.6,
    "path": "shortest",
    "targetPitch": -4.46,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -52.88,
    "path": "shortest",
    "targetPitch": -2.95,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 80.27,
    "path": "shortest",
    "targetPitch": -0.94,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 127.49,
    "path": "shortest",
    "targetPitch": -3.2,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -167.94,
    "path": "shortest",
    "targetPitch": -2.95,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -107.65,
    "path": "shortest",
    "targetPitch": 24.93,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_82004C47_EC9A_0AB7_419C_B9446DD76A5E",
 "class": "PanoramaCamera"
},
{
 "levels": [
  {
   "url": "media/popup_D9171239_E5BA_3EDB_4198_5B1739633D10_0_0.jpg",
   "width": 1920,
   "class": "ImageResourceLevel",
   "height": 1280
  },
  {
   "url": "media/popup_D9171239_E5BA_3EDB_4198_5B1739633D10_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 682
  },
  {
   "url": "media/popup_D9171239_E5BA_3EDB_4198_5B1739633D10_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 341
  }
 ],
 "id": "ImageResource_B51594E0_E5EA_1B69_418F_9F8B95BF11F0",
 "class": "ImageResource"
},
{
 "levels": [
  {
   "url": "media/popup_DE85E94F_E5A6_0AB7_41D9_5C2FBD73C64E_0_0.jpg",
   "width": 1329,
   "class": "ImageResourceLevel",
   "height": 914
  },
  {
   "url": "media/popup_DE85E94F_E5A6_0AB7_41D9_5C2FBD73C64E_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 704
  },
  {
   "url": "media/popup_DE85E94F_E5A6_0AB7_41D9_5C2FBD73C64E_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 352
  }
 ],
 "id": "ImageResource_B532B4A4_E5EA_1BE9_41AE_186311B3D1C5",
 "class": "ImageResource"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -87.62,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_DFA3DD2D_E5BA_0AFB_41CE_0161BF92F0DD",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_DFA3DD2D_E5BA_0AFB_41CE_0161BF92F0DD_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 486
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 8.68,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "pitch": -13.25
},
{
 "initialPosition": {
  "yaw": -7.6,
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -135.66,
    "path": "shortest",
    "targetPitch": 36.93,
    "pitchSpeed": 40.34,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 80.05
   },
   {
    "targetYaw": -106.14,
    "path": "shortest",
    "targetPitch": -8.73,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -2.89,
    "path": "shortest",
    "targetPitch": -9.99,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 61.67,
    "path": "shortest",
    "targetPitch": -1.19,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 122.72,
    "path": "shortest",
    "targetPitch": 0.06,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 174.47,
    "path": "shortest",
    "targetPitch": -4.46,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 51.63,
    "path": "shortest",
    "targetPitch": -2.45,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_83EAEC9E_EC9A_0BD9_41E4_80D90C1A2434",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 141.42,
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 0,
    "path": "shortest",
    "targetPitch": 0.91,
    "pitchSpeed": 41.79,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 82.96
   },
   {
    "targetYaw": -55.65,
    "path": "shortest",
    "targetPitch": 1.57,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -126.49,
    "path": "shortest",
    "targetPitch": 0.31,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 107.9,
    "path": "shortest",
    "targetPitch": -4.71,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 52.38,
    "path": "shortest",
    "targetPitch": -1.44,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_83AFFD12_EC9A_0AA9_41E6_344C79FE4324",
 "class": "PanoramaCamera"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -2.54,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_DE814D19_E5BE_0AD8_41E8_315B83D193D4",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_DE814D19_E5BE_0AD8_41E8_315B83D193D4_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 682
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 2.87,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "pitch": -10.92
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_EA8920BB_E140_B91B_41E9_D14906604A6B_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EA8920BB_E140_B91B_41E9_D14906604A6B_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EA8920BB_E140_B91B_41E9_D14906604A6B_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA8920BB_E140_B91B_41E9_D14906604A6B_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EA8920BB_E140_B91B_41E9_D14906604A6B_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EA8920BB_E140_B91B_41E9_D14906604A6B_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EA8920BB_E140_B91B_41E9_D14906604A6B_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA8920BB_E140_B91B_41E9_D14906604A6B_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EA8920BB_E140_B91B_41E9_D14906604A6B_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EA8920BB_E140_B91B_41E9_D14906604A6B_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EA8920BB_E140_B91B_41E9_D14906604A6B_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA8920BB_E140_B91B_41E9_D14906604A6B_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EA8920BB_E140_B91B_41E9_D14906604A6B_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EA8920BB_E140_B91B_41E9_D14906604A6B_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EA8920BB_E140_B91B_41E9_D14906604A6B_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA8920BB_E140_B91B_41E9_D14906604A6B_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EA8920BB_E140_B91B_41E9_D14906604A6B_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EA8920BB_E140_B91B_41E9_D14906604A6B_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EA8920BB_E140_B91B_41E9_D14906604A6B_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EA8920BB_E140_B91B_41E9_D14906604A6B_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA8920BB_E140_B91B_41E9_D14906604A6B_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_EA8920BB_E140_B91B_41E9_D14906604A6B_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EA8920BB_E140_B91B_41E9_D14906604A6B_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EA8920BB_E140_B91B_41E9_D14906604A6B_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA8920BB_E140_B91B_41E9_D14906604A6B_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Planta Baja - Comedor - Sin Sillas",
 "hfovMin": "120%",
 "id": "panorama_EA8920BB_E140_B91B_41E9_D14906604A6B",
 "overlays": [
  "this.overlay_F7FF712D_E141_9B3C_41DF_65CA15D3BA84",
  "this.overlay_F66BE7B8_E141_6724_41AE_34836A086F6D",
  "this.overlay_FF05FD0B_E4A6_0AB8_41B9_3D5A37DAA694",
  "this.overlay_F8A96E79_E4A6_075B_41E9_20C2F9BB5210",
  "this.overlay_FF14678F_E4A6_05B7_41D7_BB67CDF54487",
  "this.overlay_F8EA3E4D_E4BA_06BB_41A1_FD4060ACC595",
  "this.overlay_FBB1E212_E4BE_1EA9_41E1_A8D3E19E06F7",
  "this.overlay_F9B52226_E4BE_7EE8_41C4_D40855408A05",
  "this.overlay_C32EB3C4_E4EA_3DA9_41E6_5BC138BC611C",
  "this.panorama_EA8920BB_E140_B91B_41E9_D14906604A6B_tcap0",
  "this.overlay_DEA18338_E5BA_1ED8_41E9_9500F5C9AA2D",
  "this.popup_DF9E2977_E5BA_0D57_419B_8772B96D5184",
  "this.overlay_DF82927A_E5BA_1F59_41D2_A008CD40E3B5",
  "this.popup_DB2EED64_E5BA_0569_41E1_3DEFF8F54968",
  "this.overlay_D99BEAF4_E5BA_0F69_41E2_B1B97A86AB8B",
  "this.popup_DE2FCAF8_E5BA_0F59_41E3_05A13E2CBDCD",
  "this.overlay_DA08A67F_E5EE_0757_41B4_085EFECDD11D",
  "this.overlay_AC9D50C2_E47E_7BA9_41E0_69305EB1BD1C",
  "this.overlay_A489F8EB_EC6A_0B7F_41D6_143C9EF4B886",
  "this.overlay_A5C9E313_EC6E_3EAF_41E2_B2DFBF91EFC7",
  "this.overlay_A57DFF2E_EC6E_06F9_41D6_D253C6B53104",
  "this.overlay_A6E530B8_EC6A_1BD9_41DB_688949FEAA7B",
  "this.overlay_A5479A4A_EC6A_0EB9_41E5_60A682A2425C",
  "this.overlay_A649BB2E_EC66_0EF9_41D2_40244F92C655",
  "this.overlay_B1634F45_EC66_06AB_416F_E879CC320A71",
  "this.overlay_B862F8B8_EC9A_0BD9_41C0_469B0D34187A"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -164.6,
   "class": "AdjacentPanorama",
   "backwardYaw": 8.33,
   "panorama": "this.panorama_E8F154F9_E364_F02F_41E0_7ADE7EBBD519",
   "distance": 1
  },
  {
   "yaw": -164.55,
   "class": "AdjacentPanorama",
   "backwardYaw": 8.33,
   "panorama": "this.panorama_E8F154F9_E364_F02F_41E0_7ADE7EBBD519",
   "distance": 1
  },
  {
   "yaw": 136.67,
   "class": "AdjacentPanorama",
   "backwardYaw": 162.79,
   "panorama": "this.panorama_E8FADA72_E364_F022_41C2_C29F7A235EAF",
   "distance": 1
  },
  {
   "yaw": 136.8,
   "class": "AdjacentPanorama",
   "backwardYaw": 162.79,
   "panorama": "this.panorama_E8FADA72_E364_F022_41C2_C29F7A235EAF",
   "distance": 1
  },
  {
   "panorama": "this.panorama_EADDA963_E141_EB2B_41DB_CD069D3B479A",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_EADDA963_E141_EB2B_41DB_CD069D3B479A",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E8C90C1B_E365_F7E2_41D7_18E9C82943A5",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E8C90C1B_E365_F7E2_41D7_18E9C82943A5",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F521389D_E4A4_30E7_419D_206A40017412",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F521389D_E4A4_30E7_419D_206A40017412",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -66.75,
   "class": "AdjacentPanorama",
   "backwardYaw": 134.01,
   "panorama": "this.panorama_EAF0B794_E147_67ED_41D1_DF56AF0E8AFE",
   "distance": 1
  },
  {
   "yaw": -66.85,
   "class": "AdjacentPanorama",
   "backwardYaw": 134.01,
   "panorama": "this.panorama_EAF0B794_E147_67ED_41D1_DF56AF0E8AFE",
   "distance": 1
  },
  {
   "panorama": "this.panorama_F5217E84_E4A4_50E6_41B1_B7D2D7D82D72",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F5217E84_E4A4_50E6_41B1_B7D2D7D82D72",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F52171BD_E4A4_5027_41E5_9EE998F7E297",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F52171BD_E4A4_5027_41E5_9EE998F7E297",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_EADC6D16_E147_A8ED_41E7_7A006A29B117",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_EADC6D16_E147_A8ED_41E7_7A006A29B117",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_FBD0BA6B_E35B_DF11_41E3_DD81912230B1"
 ],
 "cardboardMenu": "this.Menu_82C12CA3_EC9A_0BEF_41EC_167990F4DC6E",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_EA8920BB_E140_B91B_41E9_D14906604A6B_t.jpg",
 "hfovMax": 120,
 "pitch": 0
},
{
 "levels": [
  {
   "url": "media/popup_DFF13C75_E5A6_0B6B_41E1_5FCDB3B8F3E7_0_0.jpg",
   "width": 1167,
   "class": "ImageResourceLevel",
   "height": 1280
  },
  {
   "url": "media/popup_DFF13C75_E5A6_0B6B_41E1_5FCDB3B8F3E7_0_1.jpg",
   "width": 933,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_DFF13C75_E5A6_0B6B_41E1_5FCDB3B8F3E7_0_2.jpg",
   "width": 466,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_B51F24D6_E5EA_1BA9_41C7_3FA436FD82E8",
 "class": "ImageResource"
},
{
 "headerBackgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_CAF4B162_E4AA_FD69_41DC_3A34FD4A7802",
 "backgroundOpacity": 1,
 "titleFontColor": "#000000",
 "width": "90%",
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Window",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "titlePaddingRight": 5,
 "titlePaddingTop": 5,
 "footerBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "headerBorderSize": 0,
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "backgroundColor": [],
 "verticalAlign": "middle",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
 "height": "90%",
 "bodyBackgroundOpacity": 1,
 "borderSize": 0,
 "titleFontStyle": "normal",
 "headerPaddingRight": 0,
 "title": "",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "headerPaddingLeft": 0,
 "bodyPaddingLeft": 0,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "headerBackgroundOpacity": 1,
 "scrollBarColor": "#000000",
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPaddingRight": 2,
 "bodyBorderColor": "#000000",
 "shadowBlurRadius": 6,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "footerBorderColor": "#000000",
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "closeButtonPaddingLeft": 2,
 "bodyPaddingTop": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "layout": "vertical",
 "closeButtonBorderRadius": 11,
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "children": [
  "this.htmlText_CAFE3160_E4AA_FD69_41EB_D1D860FFCD96",
  {
   "backgroundOpacity": 1,
   "width": "100%",
   "class": "WebFrame",
   "borderRadius": 0,
   "insetBorder": false,
   "paddingLeft": 0,
   "paddingRight": 0,
   "url": "https://www.educacionadventista.com/ensenanza/nivel-secundario/",
   "backgroundColorRatios": [],
   "propagateClick": false,
   "minHeight": 0,
   "backgroundColor": [],
   "minWidth": 0,
   "height": "89%",
   "paddingTop": 0,
   "backgroundColorDirection": "vertical",
   "paddingBottom": 0,
   "borderSize": 0,
   "scrollEnabled": true,
   "data": {
    "name": "WebFrame77057"
   },
   "shadow": false
  }
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "shadowHorizontalLength": 3,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBorderSize": 0,
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 0,
 "titleFontSize": "1.29vmin",
 "backgroundColorRatios": [],
 "closeButtonBorderSize": 0,
 "closeButtonPaddingBottom": 2,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 0,
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "footerBackgroundOpacity": 1,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 20,
 "veilOpacity": 0.4,
 "shadowVerticalLength": 0,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 0,
 "paddingTop": 0,
 "closeButtonBackgroundOpacity": 1,
 "bodyPaddingBottom": 0,
 "titlePaddingLeft": 5,
 "closeButtonPaddingTop": 2,
 "closeButtonIconColor": "#000000",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "bodyPaddingRight": 0,
 "closeButtonBackgroundColor": [],
 "shadowSpread": 1,
 "data": {
  "name": "Window66936"
 },
 "titleFontFamily": "Arial",
 "bodyBorderSize": 0
},
{
 "initialPosition": {
  "yaw": 17.21,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 105.26,
    "path": "shortest",
    "targetPitch": -3.01,
    "pitchSpeed": 15.11,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 29.35
   },
   {
    "targetYaw": 6.91,
    "path": "shortest",
    "targetPitch": -22.3,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -107.65,
    "path": "shortest",
    "targetPitch": -23.05,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -162.16,
    "path": "shortest",
    "targetPitch": -4.21,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_86BCD583_EC9A_05AF_41E1_EA9495B52351",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -16.96,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -155.51,
    "path": "shortest",
    "targetPitch": -0.25,
    "pitchSpeed": 76.77,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 153.24
   },
   {
    "targetYaw": -126.24,
    "path": "shortest",
    "targetPitch": -2.45,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -79.51,
    "path": "shortest",
    "targetPitch": -23.8,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 162.16,
    "path": "shortest",
    "targetPitch": -1.95,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8651860A_EC9A_06B9_41E7_9F8F17FC1EE3",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E8F154F9_E364_F02F_41E0_7ADE7EBBD519_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8F154F9_E364_F02F_41E0_7ADE7EBBD519_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8F154F9_E364_F02F_41E0_7ADE7EBBD519_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8F154F9_E364_F02F_41E0_7ADE7EBBD519_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E8F154F9_E364_F02F_41E0_7ADE7EBBD519_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8F154F9_E364_F02F_41E0_7ADE7EBBD519_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8F154F9_E364_F02F_41E0_7ADE7EBBD519_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8F154F9_E364_F02F_41E0_7ADE7EBBD519_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E8F154F9_E364_F02F_41E0_7ADE7EBBD519_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8F154F9_E364_F02F_41E0_7ADE7EBBD519_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8F154F9_E364_F02F_41E0_7ADE7EBBD519_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8F154F9_E364_F02F_41E0_7ADE7EBBD519_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E8F154F9_E364_F02F_41E0_7ADE7EBBD519_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8F154F9_E364_F02F_41E0_7ADE7EBBD519_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8F154F9_E364_F02F_41E0_7ADE7EBBD519_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8F154F9_E364_F02F_41E0_7ADE7EBBD519_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E8F154F9_E364_F02F_41E0_7ADE7EBBD519_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E8F154F9_E364_F02F_41E0_7ADE7EBBD519_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8F154F9_E364_F02F_41E0_7ADE7EBBD519_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8F154F9_E364_F02F_41E0_7ADE7EBBD519_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8F154F9_E364_F02F_41E0_7ADE7EBBD519_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E8F154F9_E364_F02F_41E0_7ADE7EBBD519_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8F154F9_E364_F02F_41E0_7ADE7EBBD519_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8F154F9_E364_F02F_41E0_7ADE7EBBD519_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8F154F9_E364_F02F_41E0_7ADE7EBBD519_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Planta Baja - Comedor - Acceso",
 "hfovMin": "120%",
 "id": "panorama_E8F154F9_E364_F02F_41E0_7ADE7EBBD519",
 "overlays": [
  "this.overlay_E8F124F9_E364_F02F_41D0_832902505B4F",
  "this.overlay_E8F104F9_E364_F02F_41D6_08BBE9F9E8B2",
  "this.overlay_E8F1E4F9_E364_F02F_41E8_A8B472F6FEC0",
  "this.overlay_E8F1C4F9_E364_F02F_41B8_1754F5427BF9",
  "this.overlay_C31B8514_E4EE_7AA9_41D4_43AEDD442820",
  "this.overlay_CC8FE97B_E4EA_0D58_41E6_E8F013FD1A4D",
  "this.overlay_CC35E7D5_E4EA_05A8_41CF_5B4938DBAE93",
  "this.panorama_E8F154F9_E364_F02F_41E0_7ADE7EBBD519_tcap0",
  "this.overlay_CB79EF38_E4AA_06D9_41E5_CD5CD3919B69",
  "this.overlay_DE3D8805_E5BA_0AAB_4175_3F9DE96A0EA6",
  "this.popup_D9DC64D0_E5A6_1BA9_41D2_8E40C16E0AE7",
  "this.overlay_D9248A2D_E5A6_0EFB_41CB_9356369928C5",
  "this.popup_DFF4557A_E5A6_0559_41E9_AD0F6383424C",
  "this.overlay_DE1E265A_E5A6_0759_41D4_D852F7D5199E",
  "this.popup_DEC28F9F_E5A6_05D7_41DA_8B9EF6C61FA8",
  "this.overlay_DE2CCE4E_E59E_06B9_41EB_AED06A553868",
  "this.popup_D9A55FA7_E59E_05F7_41B7_CD44641293DF",
  "this.overlay_DE7F1032_E59A_7AE8_41E2_B62948339D8B",
  "this.popup_D9285EF5_E59A_076B_41EB_851D422410FA",
  "this.overlay_DBA86EEE_E5EE_0779_41C9_1340599F405E",
  "this.overlay_AF551397_E466_1DD7_41D8_9CB4D62B796A",
  "this.overlay_AE8805A4_E46A_05E9_41A6_BE026171509D",
  "this.overlay_A96FE3E7_E46A_1D77_41B4_56ED024F12B9",
  "this.overlay_A85E5517_E46E_3AD7_41D5_9249CA864001",
  "this.overlay_AE53370D_E46A_06BB_41B5_0F624F96D13F",
  "this.overlay_A8E56BDC_E46A_0D59_41D0_B0327D4C938C"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -45.21,
   "class": "AdjacentPanorama",
   "backwardYaw": 172.4,
   "panorama": "this.panorama_EAF0B794_E147_67ED_41D1_DF56AF0E8AFE",
   "distance": 1
  },
  {
   "yaw": -45.27,
   "class": "AdjacentPanorama",
   "backwardYaw": 172.4,
   "panorama": "this.panorama_EAF0B794_E147_67ED_41D1_DF56AF0E8AFE",
   "distance": 1
  },
  {
   "yaw": -16.02,
   "class": "AdjacentPanorama",
   "backwardYaw": 169.61,
   "panorama": "this.panorama_EADDA963_E141_EB2B_41DB_CD069D3B479A",
   "distance": 1
  },
  {
   "yaw": -15.94,
   "class": "AdjacentPanorama",
   "backwardYaw": 169.61,
   "panorama": "this.panorama_EADDA963_E141_EB2B_41DB_CD069D3B479A",
   "distance": 1
  },
  {
   "yaw": 89.69,
   "class": "AdjacentPanorama",
   "backwardYaw": -38.58,
   "panorama": "this.panorama_E8C90C1B_E365_F7E2_41D7_18E9C82943A5",
   "distance": 1
  },
  {
   "yaw": 89.49,
   "class": "AdjacentPanorama",
   "backwardYaw": -38.58,
   "panorama": "this.panorama_E8C90C1B_E365_F7E2_41D7_18E9C82943A5",
   "distance": 1
  },
  {
   "yaw": 8.33,
   "class": "AdjacentPanorama",
   "backwardYaw": -164.6,
   "panorama": "this.panorama_EA8920BB_E140_B91B_41E9_D14906604A6B",
   "distance": 1
  },
  {
   "yaw": 8.46,
   "class": "AdjacentPanorama",
   "backwardYaw": -164.6,
   "panorama": "this.panorama_EA8920BB_E140_B91B_41E9_D14906604A6B",
   "distance": 1
  },
  {
   "yaw": 99.76,
   "class": "AdjacentPanorama",
   "backwardYaw": 135.64,
   "panorama": "this.panorama_E8FADA72_E364_F022_41C2_C29F7A235EAF",
   "distance": 1
  },
  {
   "yaw": 99.74,
   "class": "AdjacentPanorama",
   "backwardYaw": 135.64,
   "panorama": "this.panorama_E8FADA72_E364_F022_41C2_C29F7A235EAF",
   "distance": 1
  },
  {
   "yaw": -87.05,
   "class": "AdjacentPanorama",
   "backwardYaw": 124.98,
   "panorama": "this.panorama_F5217E84_E4A4_50E6_41B1_B7D2D7D82D72",
   "distance": 1
  },
  {
   "yaw": -87,
   "class": "AdjacentPanorama",
   "backwardYaw": 124.98,
   "panorama": "this.panorama_F5217E84_E4A4_50E6_41B1_B7D2D7D82D72",
   "distance": 1
  },
  {
   "yaw": 179.87,
   "class": "AdjacentPanorama",
   "backwardYaw": 61.94,
   "panorama": "this.panorama_EADC6D16_E147_A8ED_41E7_7A006A29B117",
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_FBD54ECF_E35A_3711_41CD_ECD058D2C76E"
 ],
 "cardboardMenu": "this.Menu_82C12CA3_EC9A_0BEF_41EC_167990F4DC6E",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E8F154F9_E364_F02F_41E0_7ADE7EBBD519_t.jpg",
 "hfovMax": 120,
 "pitch": 0
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E8FADA72_E364_F022_41C2_C29F7A235EAF_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8FADA72_E364_F022_41C2_C29F7A235EAF_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8FADA72_E364_F022_41C2_C29F7A235EAF_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8FADA72_E364_F022_41C2_C29F7A235EAF_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E8FADA72_E364_F022_41C2_C29F7A235EAF_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8FADA72_E364_F022_41C2_C29F7A235EAF_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8FADA72_E364_F022_41C2_C29F7A235EAF_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8FADA72_E364_F022_41C2_C29F7A235EAF_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E8FADA72_E364_F022_41C2_C29F7A235EAF_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8FADA72_E364_F022_41C2_C29F7A235EAF_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8FADA72_E364_F022_41C2_C29F7A235EAF_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8FADA72_E364_F022_41C2_C29F7A235EAF_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E8FADA72_E364_F022_41C2_C29F7A235EAF_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8FADA72_E364_F022_41C2_C29F7A235EAF_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8FADA72_E364_F022_41C2_C29F7A235EAF_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8FADA72_E364_F022_41C2_C29F7A235EAF_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E8FADA72_E364_F022_41C2_C29F7A235EAF_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E8FADA72_E364_F022_41C2_C29F7A235EAF_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8FADA72_E364_F022_41C2_C29F7A235EAF_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8FADA72_E364_F022_41C2_C29F7A235EAF_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8FADA72_E364_F022_41C2_C29F7A235EAF_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E8FADA72_E364_F022_41C2_C29F7A235EAF_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8FADA72_E364_F022_41C2_C29F7A235EAF_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8FADA72_E364_F022_41C2_C29F7A235EAF_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8FADA72_E364_F022_41C2_C29F7A235EAF_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Planta Baja - Acceso - Preescolar",
 "hfovMin": "120%",
 "id": "panorama_E8FADA72_E364_F022_41C2_C29F7A235EAF",
 "overlays": [
  "this.overlay_E8FABA72_E364_F022_41D0_A0692B0378AF",
  "this.overlay_E8FA9A72_E364_F022_41C9_E13AC1827B3B",
  "this.overlay_E8FB6A72_E364_F022_41DF_16B2E2BCB7E5",
  "this.overlay_E8FB7A72_E364_F022_41B2_C082546BF173",
  "this.overlay_FD4414B8_E4A6_1BD9_41D5_679976DF5946",
  "this.overlay_CF3353B2_E4FA_7DE8_41C6_13422BA8067A",
  "this.panorama_E8FADA72_E364_F022_41C2_C29F7A235EAF_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 135.64,
   "class": "AdjacentPanorama",
   "backwardYaw": 99.76,
   "panorama": "this.panorama_E8F154F9_E364_F02F_41E0_7ADE7EBBD519",
   "distance": 1
  },
  {
   "yaw": 153.32,
   "class": "AdjacentPanorama",
   "backwardYaw": 154.9,
   "panorama": "this.panorama_EAF0B794_E147_67ED_41D1_DF56AF0E8AFE",
   "distance": 1
  },
  {
   "yaw": -65.37,
   "class": "AdjacentPanorama",
   "backwardYaw": -54.43,
   "panorama": "this.panorama_E8C90C1B_E365_F7E2_41D7_18E9C82943A5",
   "distance": 1
  },
  {
   "yaw": -81.4,
   "class": "AdjacentPanorama",
   "backwardYaw": 142.21,
   "panorama": "this.panorama_F521389D_E4A4_30E7_419D_206A40017412",
   "distance": 1
  },
  {
   "yaw": 162.79,
   "class": "AdjacentPanorama",
   "backwardYaw": 136.67,
   "panorama": "this.panorama_EA8920BB_E140_B91B_41E9_D14906604A6B",
   "distance": 1
  },
  {
   "yaw": 35.32,
   "class": "AdjacentPanorama",
   "backwardYaw": -163.04,
   "panorama": "this.panorama_E8B9812A_E364_302D_41E2_DFDB9823113D",
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_FA062943_E35A_FD11_41CB_61E27AAD28F8"
 ],
 "cardboardMenu": "this.Menu_82C12CA3_EC9A_0BEF_41EC_167990F4DC6E",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E8FADA72_E364_F022_41C2_C29F7A235EAF_t.jpg",
 "hfovMax": 120,
 "pitch": 0
},
{
 "initialPosition": {
  "yaw": -144.68,
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -154.5,
    "path": "shortest",
    "targetPitch": 1.92,
    "pitchSpeed": 3.3,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 5.63
   },
   {
    "targetYaw": -84.79,
    "path": "shortest",
    "targetPitch": 0.06,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 157.89,
    "path": "shortest",
    "targetPitch": -1.95,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 33.79,
    "path": "shortest",
    "targetPitch": -5.46,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_8724A6FF_EC9A_0757_41CA_B05986351B2F",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 178.87,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -2.01,
    "path": "shortest",
    "targetPitch": -1.51,
    "pitchSpeed": 29.45,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 58.17
   },
   {
    "targetYaw": 99.86,
    "path": "shortest",
    "targetPitch": -7.47,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_844AA124_EC9A_7AEA_41EB_E4B4A3532C2A",
 "class": "PanoramaCamera"
},
{
 "levels": [
  {
   "url": "media/popup_D9DC64D0_E5A6_1BA9_41D2_8E40C16E0AE7_0_0.jpg",
   "width": 1920,
   "class": "ImageResourceLevel",
   "height": 1334
  },
  {
   "url": "media/popup_D9DC64D0_E5A6_1BA9_41D2_8E40C16E0AE7_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 711
  },
  {
   "url": "media/popup_D9DC64D0_E5A6_1BA9_41D2_8E40C16E0AE7_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 355
  }
 ],
 "id": "ImageResource_B52824AE_E5EA_1BF9_41D1_26F4BE454FB9",
 "class": "ImageResource"
},
{
 "items": [
  {
   "media": "this.video_DA3322B5_E59A_1FE8_41BA_BC17D10E3272",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_82E11C91_EC9A_0BA8_41D2_2028ABBBEDF0, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_82E11C91_EC9A_0BA8_41D2_2028ABBBEDF0, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "playList_82E11C91_EC9A_0BA8_41D2_2028ABBBEDF0",
 "class": "PlayList"
},
{
 "viewerArea": "this.MainViewer",
 "id": "MainViewerVideoPlayer",
 "class": "VideoPlayer",
 "displayPlaybackBar": true
},
{
 "initialPosition": {
  "yaw": -40.14,
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -135.66,
    "path": "shortest",
    "targetPitch": 36.93,
    "pitchSpeed": 31.23,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 61.75
   },
   {
    "targetYaw": -106.14,
    "path": "shortest",
    "targetPitch": -8.73,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -2.89,
    "path": "shortest",
    "targetPitch": -9.99,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 61.67,
    "path": "shortest",
    "targetPitch": -1.19,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 122.72,
    "path": "shortest",
    "targetPitch": 0.06,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 174.47,
    "path": "shortest",
    "targetPitch": -4.46,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 51.63,
    "path": "shortest",
    "targetPitch": -2.45,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_9850B7D1_EC9A_05AB_41E2_E6C94DB10858",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 46.85,
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 40.45,
    "path": "shortest",
    "targetPitch": 3.77,
    "pitchSpeed": 3.62,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 6.27
   },
   {
    "targetYaw": 85.29,
    "path": "shortest",
    "targetPitch": 11.12,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 138.3,
    "path": "shortest",
    "targetPitch": -1.44,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -173.72,
    "path": "shortest",
    "targetPitch": -0.19,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -122.72,
    "path": "shortest",
    "targetPitch": 0.31,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_81101A01_EC9A_0EAB_41D7_EB8E5479C5A0",
 "class": "PanoramaCamera"
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "audio": {
  "oggUrl": "media/audio_F9E9C201_E366_2F11_41D3_CEAD915E74B8.ogg",
  "mp3Url": "media/audio_F9E9C201_E366_2F11_41D3_CEAD915E74B8.mp3",
  "class": "AudioResource"
 },
 "id": "audio_F9E9C201_E366_2F11_41D3_CEAD915E74B8",
 "data": {
  "label": "Breeze"
 }
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": 10.55,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_DF9E2977_E5BA_0D57_419B_8772B96D5184",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_DF9E2977_E5BA_0D57_419B_8772B96D5184_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 682
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 4.43,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "pitch": -0.33
},
{
 "initialPosition": {
  "yaw": -0.13,
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 0,
    "path": "shortest",
    "targetPitch": 0.91,
    "pitchSpeed": 1.28,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 1.55
   },
   {
    "targetYaw": 53.38,
    "path": "shortest",
    "targetPitch": 0.57,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 98.86,
    "path": "shortest",
    "targetPitch": -0.44,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -143.82,
    "path": "shortest",
    "targetPitch": 3.58,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -99.61,
    "hfovSpeed": 33.25,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetHfov": 80,
    "targetPitch": 3.58,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -50.12,
    "path": "shortest",
    "targetPitch": -3.2,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -15.45,
    "path": "shortest",
    "targetPitch": 0.82,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_8760D6CD_EC9A_07BB_41D7_9A307EE55777",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 141.21,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 24.1,
    "path": "shortest",
    "targetPitch": -2.76,
    "pitchSpeed": 31.9,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 66.42
   },
   {
    "targetYaw": 72.8,
    "path": "shortest",
    "targetPitch": -33.79,
    "pitchSpeed": 16.23,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -169.21,
    "path": "shortest",
    "targetPitch": -32.79,
    "pitchSpeed": 16.23,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -40.92,
    "path": "shortest",
    "targetPitch": -10.95,
    "pitchSpeed": 16.23,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8131E9A6_EC9A_0DE9_41D6_5F74F98E4E1B",
 "class": "PanoramaCamera"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -26.25,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_A6FCD7B0_E5A6_05E9_41BF_9AE914564AF3",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_A6FCD7B0_E5A6_05E9_41BF_9AE914564AF3_0_1.jpg",
    "width": 1009,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 2.7,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "pitch": -6.86
},
{
 "initialPosition": {
  "yaw": -118.06,
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 62.55,
    "path": "shortest",
    "targetPitch": -3.77,
    "pitchSpeed": 28.07,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 55.39
   },
   {
    "targetYaw": 169.45,
    "path": "shortest",
    "targetPitch": 3.08,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -133.02,
    "path": "shortest",
    "targetPitch": -2.45,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -72.73,
    "path": "shortest",
    "targetPitch": 4.58,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -21.48,
    "path": "shortest",
    "targetPitch": -3.45,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 61.93,
    "path": "shortest",
    "targetPitch": -3.45,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_830C1DF4_EC9A_0569_41E8_A7C4E3E392F1",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -55.02,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -126.87,
    "path": "shortest",
    "targetPitch": 28.14,
    "pitchSpeed": 18.73,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 36.62
   },
   {
    "targetYaw": -64.19,
    "path": "shortest",
    "targetPitch": -2.7,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 0.88,
    "path": "shortest",
    "targetPitch": -7.47,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 57.91,
    "path": "shortest",
    "targetPitch": -8.98,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_835A5DBC_EC9A_05D9_41E0_FDDBBAF7A60C",
 "class": "PanoramaCamera"
},
{
 "autoplay": true,
 "loop": true,
 "class": "DirectionalPanoramaAudio",
 "audio": "this.audioresource_FBC32FEF_E35B_D511_41E0_D3CB3105CCD6",
 "pitch": 0,
 "maximumAngle": 360,
 "id": "audio_FBD0BA6B_E35B_DF11_41E3_DD81912230B1",
 "yaw": 0,
 "data": {
  "label": "Birds stereo 01"
 }
},
{
 "initialPosition": {
  "yaw": 106.67,
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 0,
    "path": "shortest",
    "targetPitch": 0,
    "pitchSpeed": 19.19,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 37.56
   },
   {
    "targetYaw": -94.08,
    "hfovSpeed": 33.25,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetHfov": 80,
    "targetPitch": -1.95,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -139.05,
    "hfovSpeed": 33.25,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetHfov": 100,
    "targetPitch": -13.75,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 115.44,
    "hfovSpeed": 33.25,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetHfov": 80,
    "targetPitch": -4.71,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 133.52,
    "hfovSpeed": 33.25,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetHfov": 100,
    "targetPitch": -8.48,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_84A8CFAA_EC9A_05F9_41E7_E20A4B273C57",
 "class": "PanoramaCamera"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": 2.76,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_DFF4557A_E5A6_0559_41E9_AD0F6383424C",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_DFF4557A_E5A6_0559_41E9_AD0F6383424C_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 682
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 4.64,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "pitch": 7.12
},
{
 "items": [
  {
   "media": "this.panorama_EADDC172_E141_BB25_41D8_E09A626FB8FD",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EADDC172_E141_BB25_41D8_E09A626FB8FD_camera"
  },
  {
   "media": "this.panorama_EADC6D16_E147_A8ED_41E7_7A006A29B117",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EADC6D16_E147_A8ED_41E7_7A006A29B117_camera"
  },
  {
   "media": "this.panorama_E8E42205_E364_33E7_41E6_A73F2DB39F27",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E8E42205_E364_33E7_41E6_A73F2DB39F27_camera"
  },
  {
   "media": "this.panorama_E8F154F9_E364_F02F_41E0_7ADE7EBBD519",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E8F154F9_E364_F02F_41E0_7ADE7EBBD519_camera"
  },
  {
   "media": "this.panorama_EA8920BB_E140_B91B_41E9_D14906604A6B",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EA8920BB_E140_B91B_41E9_D14906604A6B_camera"
  },
  {
   "media": "this.panorama_EAF0B794_E147_67ED_41D1_DF56AF0E8AFE",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EAF0B794_E147_67ED_41D1_DF56AF0E8AFE_camera"
  },
  {
   "media": "this.panorama_EADDA963_E141_EB2B_41DB_CD069D3B479A",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EADDA963_E141_EB2B_41DB_CD069D3B479A_camera"
  },
  {
   "media": "this.panorama_EADDBD3C_E141_6B1D_41C2_3B8C0C9C91C2",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EADDBD3C_E141_6B1D_41C2_3B8C0C9C91C2_camera"
  },
  {
   "media": "this.panorama_EA80C6E4_E147_992C_41D3_588476BDC207",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EA80C6E4_E147_992C_41D3_588476BDC207_camera"
  },
  {
   "media": "this.panorama_EADC0494_E147_99EC_41E6_6E85636B3ABA",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EADC0494_E147_99EC_41E6_6E85636B3ABA_camera"
  },
  {
   "media": "this.panorama_EADCE602_E147_B8E5_41E0_A3348388DA41",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EADCE602_E147_B8E5_41E0_A3348388DA41_camera"
  },
  {
   "media": "this.panorama_EF3E255F_E364_5063_41EA_23F03465E467",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EF3E255F_E364_5063_41EA_23F03465E467_camera"
  },
  {
   "media": "this.panorama_EADC6654_E140_996D_41E8_8F536A929374",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EADC6654_E140_996D_41E8_8F536A929374_camera"
  },
  {
   "media": "this.panorama_E8FADA72_E364_F022_41C2_C29F7A235EAF",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E8FADA72_E364_F022_41C2_C29F7A235EAF_camera"
  },
  {
   "media": "this.panorama_E8B9812A_E364_302D_41E2_DFDB9823113D",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E8B9812A_E364_302D_41E2_DFDB9823113D_camera"
  },
  {
   "media": "this.panorama_E8C90C1B_E365_F7E2_41D7_18E9C82943A5",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E8C90C1B_E365_F7E2_41D7_18E9C82943A5_camera"
  },
  {
   "media": "this.panorama_EAE2003C_E141_991C_41CF_920F278E9C7B",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EAE2003C_E141_991C_41CF_920F278E9C7B_camera"
  },
  {
   "media": "this.panorama_ED4F5164_E141_7B2C_41CB_BAE8006AA571",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_ED4F5164_E141_7B2C_41CB_BAE8006AA571_camera"
  },
  {
   "media": "this.panorama_F5217E84_E4A4_50E6_41B1_B7D2D7D82D72",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F5217E84_E4A4_50E6_41B1_B7D2D7D82D72_camera"
  },
  {
   "media": "this.panorama_F5392FBD_E4A4_7027_41E3_AB0AD55108CB",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F5392FBD_E4A4_7027_41E3_AB0AD55108CB_camera"
  },
  {
   "media": "this.panorama_F6165FE8_E4A4_502E_41CE_D0E472165F33",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F6165FE8_E4A4_502E_41CE_D0E472165F33_camera"
  },
  {
   "media": "this.panorama_F5213C55_E4A4_D066_416D_85F4BFC80191",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F5213C55_E4A4_D066_416D_85F4BFC80191_camera"
  },
  {
   "media": "this.panorama_EFE15D2B_E466_0AFF_41D4_0DCE456C6586",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EFE15D2B_E466_0AFF_41D4_0DCE456C6586_camera"
  },
  {
   "media": "this.panorama_E9C6E272_E46A_7F69_41D0_A0613D7F1112",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E9C6E272_E46A_7F69_41D0_A0613D7F1112_camera"
  },
  {
   "media": "this.panorama_F521389D_E4A4_30E7_419D_206A40017412",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F521389D_E4A4_30E7_419D_206A40017412_camera"
  },
  {
   "media": "this.panorama_F5214712_E4A4_51E2_41E0_B73B9A6D712C",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F5214712_E4A4_51E2_41E0_B73B9A6D712C_camera"
  },
  {
   "media": "this.panorama_E9C4F462_E46B_FB69_41EA_EBF76426CC46",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E9C4F462_E46B_FB69_41EA_EBF76426CC46_camera"
  },
  {
   "media": "this.panorama_E9C4108D_E46A_3BBB_41E4_FCB0E78FC031",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E9C4108D_E46A_3BBB_41E4_FCB0E78FC031_camera"
  },
  {
   "media": "this.panorama_E9C2B1AC_E46A_1DF9_41D2_1E8C48B2DC22",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 28, 29)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E9C2B1AC_E46A_1DF9_41D2_1E8C48B2DC22_camera"
  },
  {
   "media": "this.panorama_E9C1D3F7_E46A_1D57_4197_60D58E87487C",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 29, 30)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E9C1D3F7_E46A_1D57_4197_60D58E87487C_camera"
  },
  {
   "media": "this.panorama_E9C5C3B9_E46A_3DDB_41B2_81F19F4D0621",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 30, 31)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E9C5C3B9_E46A_3DDB_41B2_81F19F4D0621_camera"
  },
  {
   "media": "this.panorama_E9C5B2DE_E46A_1F59_41E8_91B64D35D990",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 31, 32)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E9C5B2DE_E46A_1F59_41E8_91B64D35D990_camera"
  },
  {
   "media": "this.panorama_F52171BD_E4A4_5027_41E5_9EE998F7E297",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 32, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F52171BD_E4A4_5027_41E5_9EE998F7E297_camera"
  }
 ],
 "id": "ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 134.79,
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 0,
    "path": "shortest",
    "targetPitch": 0.91,
    "pitchSpeed": 41.52,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 82.43
   },
   {
    "targetYaw": 53.38,
    "path": "shortest",
    "targetPitch": 0.57,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 98.86,
    "path": "shortest",
    "targetPitch": -0.44,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -143.82,
    "path": "shortest",
    "targetPitch": 3.58,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -99.61,
    "hfovSpeed": 33.25,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetHfov": 80,
    "targetPitch": 3.58,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -50.12,
    "path": "shortest",
    "targetPitch": -3.2,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -15.45,
    "path": "shortest",
    "targetPitch": 0.82,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_82662B74_EC9A_0D69_41C9_AE36527A6F28",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -1.32,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -126.87,
    "path": "shortest",
    "targetPitch": -15.66,
    "pitchSpeed": 54.56,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 108.61
   },
   {
    "targetYaw": -91.82,
    "path": "shortest",
    "targetPitch": -1.19,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 176.99,
    "path": "shortest",
    "targetPitch": -0.19,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 58.16,
    "path": "shortest",
    "targetPitch": -3.45,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8693C5CB_EC9A_05BF_41D2_602A35D78A4C",
 "class": "PanoramaCamera"
},
{
 "levels": [
  {
   "url": "media/popup_DDA1676F_E5AA_0577_41C5_13DBF9C09495_0_0.jpg",
   "width": 1920,
   "class": "ImageResourceLevel",
   "height": 1280
  },
  {
   "url": "media/popup_DDA1676F_E5AA_0577_41C5_13DBF9C09495_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 682
  },
  {
   "url": "media/popup_DDA1676F_E5AA_0577_41C5_13DBF9C09495_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 341
  }
 ],
 "id": "ImageResource_B511C4D8_E5EA_1B59_41E1_82546B30D62E",
 "class": "ImageResource"
},
{
 "levels": [
  {
   "url": "media/popup_DF9E2977_E5BA_0D57_419B_8772B96D5184_0_0.jpg",
   "width": 1920,
   "class": "ImageResourceLevel",
   "height": 1280
  },
  {
   "url": "media/popup_DF9E2977_E5BA_0D57_419B_8772B96D5184_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 682
  },
  {
   "url": "media/popup_DF9E2977_E5BA_0D57_419B_8772B96D5184_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 341
  }
 ],
 "id": "ImageResource_B52F84B9_E5EA_1BDB_41E7_C687ABD73920",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "yaw": -55.48,
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -52.25,
    "path": "shortest",
    "targetPitch": -3.04,
    "pitchSpeed": 1.59,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 2.19
   },
   {
    "targetYaw": -172.71,
    "path": "shortest",
    "targetPitch": -4.21,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 126.74,
    "path": "shortest",
    "targetPitch": -3.2,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_87AC3696_EC9A_07A9_41B5_0B6E32D7C038",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -45.99,
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -135.66,
    "path": "shortest",
    "targetPitch": 36.93,
    "pitchSpeed": 29.63,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 58.52
   },
   {
    "targetYaw": -106.14,
    "path": "shortest",
    "targetPitch": -8.73,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -2.89,
    "path": "shortest",
    "targetPitch": -9.99,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 61.67,
    "path": "shortest",
    "targetPitch": -1.19,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 122.72,
    "path": "shortest",
    "targetPitch": 0.06,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 174.47,
    "path": "shortest",
    "targetPitch": -4.46,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 51.63,
    "path": "shortest",
    "targetPitch": -2.45,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_83594EF3_EC9A_076F_41C5_3E659481E1F8",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -98.6,
    "path": "shortest",
    "targetPitch": -4.46,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -52.88,
    "path": "shortest",
    "targetPitch": -2.95,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 80.27,
    "path": "shortest",
    "targetPitch": -0.94,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 127.49,
    "path": "shortest",
    "targetPitch": -3.2,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -167.94,
    "path": "shortest",
    "targetPitch": -2.95,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -107.65,
    "path": "shortest",
    "targetPitch": 24.93,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "panorama_EA8920BB_E140_B91B_41E9_D14906604A6B_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 113.25,
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 0,
    "path": "shortest",
    "targetPitch": 0,
    "pitchSpeed": 19.41,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 38
   },
   {
    "targetYaw": -98.6,
    "path": "shortest",
    "targetPitch": -4.46,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -52.88,
    "path": "shortest",
    "targetPitch": -2.95,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 80.27,
    "path": "shortest",
    "targetPitch": -0.94,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 127.49,
    "path": "shortest",
    "targetPitch": -3.2,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -167.94,
    "path": "shortest",
    "targetPitch": -2.95,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -107.65,
    "path": "shortest",
    "targetPitch": 24.93,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_8217DC63_EC9A_0B6F_418F_170DDAD10FF0",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E9C5B2DE_E46A_1F59_41E8_91B64D35D990_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E9C5B2DE_E46A_1F59_41E8_91B64D35D990_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E9C5B2DE_E46A_1F59_41E8_91B64D35D990_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E9C5B2DE_E46A_1F59_41E8_91B64D35D990_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E9C5B2DE_E46A_1F59_41E8_91B64D35D990_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E9C5B2DE_E46A_1F59_41E8_91B64D35D990_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E9C5B2DE_E46A_1F59_41E8_91B64D35D990_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E9C5B2DE_E46A_1F59_41E8_91B64D35D990_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E9C5B2DE_E46A_1F59_41E8_91B64D35D990_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E9C5B2DE_E46A_1F59_41E8_91B64D35D990_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E9C5B2DE_E46A_1F59_41E8_91B64D35D990_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E9C5B2DE_E46A_1F59_41E8_91B64D35D990_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E9C5B2DE_E46A_1F59_41E8_91B64D35D990_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E9C5B2DE_E46A_1F59_41E8_91B64D35D990_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E9C5B2DE_E46A_1F59_41E8_91B64D35D990_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E9C5B2DE_E46A_1F59_41E8_91B64D35D990_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E9C5B2DE_E46A_1F59_41E8_91B64D35D990_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E9C5B2DE_E46A_1F59_41E8_91B64D35D990_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E9C5B2DE_E46A_1F59_41E8_91B64D35D990_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E9C5B2DE_E46A_1F59_41E8_91B64D35D990_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E9C5B2DE_E46A_1F59_41E8_91B64D35D990_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E9C5B2DE_E46A_1F59_41E8_91B64D35D990_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E9C5B2DE_E46A_1F59_41E8_91B64D35D990_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E9C5B2DE_E46A_1F59_41E8_91B64D35D990_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E9C5B2DE_E46A_1F59_41E8_91B64D35D990_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "2do Piso - Auditorio Punto 2",
 "id": "panorama_E9C5B2DE_E46A_1F59_41E8_91B64D35D990",
 "overlays": [
  "this.overlay_CE613AE6_E4EA_0F68_41E0_6A1B4FC5ABC3",
  "this.overlay_C16A003F_E4EA_1AD7_41CF_341A6DBB6626",
  "this.panorama_E9C5B2DE_E46A_1F59_41E8_91B64D35D990_tcap0",
  "this.overlay_A5D1D344_E5E6_3EA9_41EB_EE4289D3B00C"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -162.08,
   "class": "AdjacentPanorama",
   "backwardYaw": 17.51,
   "panorama": "this.panorama_E9C1D3F7_E46A_1D57_4197_60D58E87487C",
   "distance": 1
  },
  {
   "yaw": -178.5,
   "class": "AdjacentPanorama",
   "backwardYaw": 1.09,
   "panorama": "this.panorama_E9C5C3B9_E46A_3DDB_41B2_81F19F4D0621",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_82C12CA3_EC9A_0BEF_41EC_167990F4DC6E",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E9C5B2DE_E46A_1F59_41E8_91B64D35D990_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -10.39,
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 78.63,
    "path": "shortest",
    "targetPitch": 1.26,
    "pitchSpeed": 7.15,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 13.36
   },
   {
    "targetYaw": -153.62,
    "path": "shortest",
    "targetPitch": 3.33,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 12.44,
    "path": "shortest",
    "targetPitch": 16.14,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 18.72,
    "path": "shortest",
    "targetPitch": -7.22,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_83DE3CF5_EC9A_0B6B_41E6_C89C4BABDBCF",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E9C1D3F7_E46A_1D57_4197_60D58E87487C_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E9C1D3F7_E46A_1D57_4197_60D58E87487C_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E9C1D3F7_E46A_1D57_4197_60D58E87487C_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E9C1D3F7_E46A_1D57_4197_60D58E87487C_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E9C1D3F7_E46A_1D57_4197_60D58E87487C_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E9C1D3F7_E46A_1D57_4197_60D58E87487C_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E9C1D3F7_E46A_1D57_4197_60D58E87487C_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E9C1D3F7_E46A_1D57_4197_60D58E87487C_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E9C1D3F7_E46A_1D57_4197_60D58E87487C_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E9C1D3F7_E46A_1D57_4197_60D58E87487C_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E9C1D3F7_E46A_1D57_4197_60D58E87487C_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E9C1D3F7_E46A_1D57_4197_60D58E87487C_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E9C1D3F7_E46A_1D57_4197_60D58E87487C_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E9C1D3F7_E46A_1D57_4197_60D58E87487C_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E9C1D3F7_E46A_1D57_4197_60D58E87487C_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E9C1D3F7_E46A_1D57_4197_60D58E87487C_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E9C1D3F7_E46A_1D57_4197_60D58E87487C_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E9C1D3F7_E46A_1D57_4197_60D58E87487C_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E9C1D3F7_E46A_1D57_4197_60D58E87487C_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E9C1D3F7_E46A_1D57_4197_60D58E87487C_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E9C1D3F7_E46A_1D57_4197_60D58E87487C_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E9C1D3F7_E46A_1D57_4197_60D58E87487C_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E9C1D3F7_E46A_1D57_4197_60D58E87487C_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E9C1D3F7_E46A_1D57_4197_60D58E87487C_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E9C1D3F7_E46A_1D57_4197_60D58E87487C_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "2do Piso - Auditorio Entrada",
 "id": "panorama_E9C1D3F7_E46A_1D57_4197_60D58E87487C",
 "overlays": [
  "this.overlay_C0A2E84F_E4E6_0AB6_41D1_60C8C8DE497C",
  "this.overlay_C0924358_E4E6_1D59_41D7_111480AD9959",
  "this.overlay_C16696C9_E4EE_07BB_41C4_6A00EDE50F97",
  "this.panorama_E9C1D3F7_E46A_1D57_4197_60D58E87487C_tcap0",
  "this.overlay_A41C6755_E5FA_06AB_41C2_2D820EDCC0E1"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 17.51,
   "class": "AdjacentPanorama",
   "backwardYaw": -162.08,
   "panorama": "this.panorama_E9C5B2DE_E46A_1F59_41E8_91B64D35D990",
   "distance": 1
  },
  {
   "yaw": 48.37,
   "class": "AdjacentPanorama",
   "backwardYaw": -134.31,
   "panorama": "this.panorama_E9C5C3B9_E46A_3DDB_41B2_81F19F4D0621",
   "distance": 1
  },
  {
   "yaw": 179.87,
   "class": "AdjacentPanorama",
   "backwardYaw": -1.13,
   "panorama": "this.panorama_E9C4F462_E46B_FB69_41EA_EBF76426CC46",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_82C12CA3_EC9A_0BEF_41EC_167990F4DC6E",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E9C1D3F7_E46A_1D57_4197_60D58E87487C_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -43.33,
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 0,
    "path": "shortest",
    "targetPitch": 0,
    "pitchSpeed": 8.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 15.16
   },
   {
    "targetYaw": -98.6,
    "path": "shortest",
    "targetPitch": -4.46,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -52.88,
    "path": "shortest",
    "targetPitch": -2.95,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 80.27,
    "path": "shortest",
    "targetPitch": -0.94,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 127.49,
    "path": "shortest",
    "targetPitch": -3.2,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -167.94,
    "path": "shortest",
    "targetPitch": -2.95,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -107.65,
    "path": "shortest",
    "targetPitch": 24.93,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_82A08AE1_EC9A_0F6A_41DE_9867B0D6B837",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -55.02,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -126.87,
    "path": "shortest",
    "targetPitch": 28.14,
    "pitchSpeed": 18.73,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 36.62
   },
   {
    "targetYaw": -64.19,
    "path": "shortest",
    "targetPitch": -2.7,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 0.88,
    "path": "shortest",
    "targetPitch": -7.47,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 57.91,
    "path": "shortest",
    "targetPitch": -8.98,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_83317DD7_EC9A_05A8_41E7_8E0DEDFFECB1",
 "class": "PanoramaCamera"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -127.22,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_DC61FB58_E5AA_0D58_41E6_AB80B9F13949",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_DC61FB58_E5AA_0D58_41E6_AB80B9F13949_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 682
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 2.7,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "pitch": -11.82
},
{
 "initialPosition": {
  "yaw": -174.35,
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "pitch": 2.51
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 154.38,
    "path": "shortest",
    "targetPitch": 0.06,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 112.42,
    "path": "shortest",
    "targetPitch": 41.77,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 0.88,
    "path": "shortest",
    "targetPitch": -1.19,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "panorama_EADDBD3C_E141_6B1D_41C2_3B8C0C9C91C2_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 141.42,
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 0,
    "path": "shortest",
    "targetPitch": 0.91,
    "pitchSpeed": 41.79,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 82.96
   },
   {
    "targetYaw": -55.65,
    "path": "shortest",
    "targetPitch": 1.57,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -126.49,
    "path": "shortest",
    "targetPitch": 0.31,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 107.9,
    "path": "shortest",
    "targetPitch": -4.71,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 52.38,
    "path": "shortest",
    "targetPitch": -1.44,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_83BDCD2F_EC9A_0AF7_41E8_691CB10B7C3D",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 15.4,
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 0,
    "path": "shortest",
    "targetPitch": 0,
    "pitchSpeed": 3.5,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 6.03
   },
   {
    "targetYaw": -98.6,
    "path": "shortest",
    "targetPitch": -4.46,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -52.88,
    "path": "shortest",
    "targetPitch": -2.95,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 80.27,
    "path": "shortest",
    "targetPitch": -0.94,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 127.49,
    "path": "shortest",
    "targetPitch": -3.2,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -167.94,
    "path": "shortest",
    "targetPitch": -2.95,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -107.65,
    "path": "shortest",
    "targetPitch": 24.93,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_83883D4C_EC9A_0AB9_41D6_B8452FAECAF5",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_F521389D_E4A4_30E7_419D_206A40017412_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_F521389D_E4A4_30E7_419D_206A40017412_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F521389D_E4A4_30E7_419D_206A40017412_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F521389D_E4A4_30E7_419D_206A40017412_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F521389D_E4A4_30E7_419D_206A40017412_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_F521389D_E4A4_30E7_419D_206A40017412_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F521389D_E4A4_30E7_419D_206A40017412_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F521389D_E4A4_30E7_419D_206A40017412_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F521389D_E4A4_30E7_419D_206A40017412_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_F521389D_E4A4_30E7_419D_206A40017412_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F521389D_E4A4_30E7_419D_206A40017412_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F521389D_E4A4_30E7_419D_206A40017412_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F521389D_E4A4_30E7_419D_206A40017412_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_F521389D_E4A4_30E7_419D_206A40017412_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F521389D_E4A4_30E7_419D_206A40017412_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F521389D_E4A4_30E7_419D_206A40017412_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_F521389D_E4A4_30E7_419D_206A40017412_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F521389D_E4A4_30E7_419D_206A40017412_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_F521389D_E4A4_30E7_419D_206A40017412_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F521389D_E4A4_30E7_419D_206A40017412_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F521389D_E4A4_30E7_419D_206A40017412_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_F521389D_E4A4_30E7_419D_206A40017412_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_F521389D_E4A4_30E7_419D_206A40017412_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F521389D_E4A4_30E7_419D_206A40017412_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F521389D_E4A4_30E7_419D_206A40017412_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "1er Piso - Acceso a Laboratorio de Inform\u00e1tica",
 "id": "panorama_F521389D_E4A4_30E7_419D_206A40017412",
 "overlays": [
  "this.overlay_F016A24D_E46E_1EB8_41E1_11AEF266C93A",
  "this.overlay_F114C827_E49E_0AF7_41E6_C3C706E30544",
  "this.overlay_F2D397B1_E49E_05EB_41E8_7EFC7EDEBB6F",
  "this.overlay_FE552045_E4AA_FAAB_4193_9E9F16C3CE77",
  "this.overlay_FDDDB51D_E4A9_FADB_41EA_B63C940B3BDB",
  "this.overlay_FDEC07DD_E4AE_055B_41E6_0A2ACFDE3BFA",
  "this.overlay_FEB03287_E4AE_1FB7_41E0_F49FBA22559F",
  "this.panorama_F521389D_E4A4_30E7_419D_206A40017412_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_E8F154F9_E364_F02F_41E0_7ADE7EBBD519",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 142.21,
   "class": "AdjacentPanorama",
   "backwardYaw": -81.4,
   "panorama": "this.panorama_E8FADA72_E364_F022_41C2_C29F7A235EAF",
   "distance": 1
  },
  {
   "panorama": "this.panorama_E9C6E272_E46A_7F69_41D0_A0613D7F1112",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_EFE15D2B_E466_0AFF_41D4_0DCE456C6586",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 150.6,
   "class": "AdjacentPanorama",
   "backwardYaw": -30.87,
   "panorama": "this.panorama_F5213C55_E4A4_D066_416D_85F4BFC80191",
   "distance": 1
  },
  {
   "yaw": 2.14,
   "class": "AdjacentPanorama",
   "backwardYaw": 102.22,
   "panorama": "this.panorama_F5214712_E4A4_51E2_41E0_B73B9A6D712C",
   "distance": 1
  },
  {
   "yaw": -169.9,
   "class": "AdjacentPanorama",
   "backwardYaw": 139.86,
   "panorama": "this.panorama_EAF0B794_E147_67ED_41D1_DF56AF0E8AFE",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_82C12CA3_EC9A_0BEF_41EC_167990F4DC6E",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_F521389D_E4A4_30E7_419D_206A40017412_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_EADDA963_E141_EB2B_41DB_CD069D3B479A_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EADDA963_E141_EB2B_41DB_CD069D3B479A_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EADDA963_E141_EB2B_41DB_CD069D3B479A_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EADDA963_E141_EB2B_41DB_CD069D3B479A_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EADDA963_E141_EB2B_41DB_CD069D3B479A_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EADDA963_E141_EB2B_41DB_CD069D3B479A_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EADDA963_E141_EB2B_41DB_CD069D3B479A_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EADDA963_E141_EB2B_41DB_CD069D3B479A_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EADDA963_E141_EB2B_41DB_CD069D3B479A_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EADDA963_E141_EB2B_41DB_CD069D3B479A_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EADDA963_E141_EB2B_41DB_CD069D3B479A_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EADDA963_E141_EB2B_41DB_CD069D3B479A_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EADDA963_E141_EB2B_41DB_CD069D3B479A_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EADDA963_E141_EB2B_41DB_CD069D3B479A_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EADDA963_E141_EB2B_41DB_CD069D3B479A_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EADDA963_E141_EB2B_41DB_CD069D3B479A_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EADDA963_E141_EB2B_41DB_CD069D3B479A_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EADDA963_E141_EB2B_41DB_CD069D3B479A_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EADDA963_E141_EB2B_41DB_CD069D3B479A_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EADDA963_E141_EB2B_41DB_CD069D3B479A_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EADDA963_E141_EB2B_41DB_CD069D3B479A_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_EADDA963_E141_EB2B_41DB_CD069D3B479A_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EADDA963_E141_EB2B_41DB_CD069D3B479A_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EADDA963_E141_EB2B_41DB_CD069D3B479A_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EADDA963_E141_EB2B_41DB_CD069D3B479A_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Planta Baja - Acceso a Cancha",
 "hfovMin": "120%",
 "id": "panorama_EADDA963_E141_EB2B_41DB_CD069D3B479A",
 "overlays": [
  "this.overlay_F49A1D8B_E141_EBE4_41C7_81CBEC359266",
  "this.overlay_F76B7BD5_E147_AF6C_41BC_DA9E6CA0A391",
  "this.overlay_ECBB7E7C_E2DF_D7F7_41E6_54E27BE87889",
  "this.overlay_F2DE52A8_E2DE_2F1F_41D3_3A75EE144814",
  "this.overlay_F957C129_E36A_2D11_41EB_35FC9937E2E9",
  "this.overlay_CC9E0D8A_E4E6_05B9_41E8_89B98326BD36",
  "this.panorama_EADDA963_E141_EB2B_41DB_CD069D3B479A_tcap0",
  "this.overlay_DBFA95F4_E5E6_0569_41D5_E3D6BAB4C934",
  "this.overlay_A4BA9694_E5E6_07A9_41B9_E6135E0D8E38",
  "this.overlay_BCB12524_ECA6_1AE9_41D4_7ABB3C04DD49"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 68.19,
   "class": "AdjacentPanorama",
   "backwardYaw": -160.57,
   "panorama": "this.panorama_EADC6654_E140_996D_41E8_8F536A929374",
   "distance": 1
  },
  {
   "yaw": 169.61,
   "class": "AdjacentPanorama",
   "backwardYaw": -16.02,
   "panorama": "this.panorama_E8F154F9_E364_F02F_41E0_7ADE7EBBD519",
   "distance": 1
  },
  {
   "yaw": 49.02,
   "class": "AdjacentPanorama",
   "backwardYaw": -150.57,
   "panorama": "this.panorama_EF3E255F_E364_5063_41EA_23F03465E467",
   "distance": 1
  },
  {
   "yaw": -165.49,
   "class": "AdjacentPanorama",
   "backwardYaw": 53.96,
   "panorama": "this.panorama_EAF0B794_E147_67ED_41D1_DF56AF0E8AFE",
   "distance": 1
  },
  {
   "yaw": 17.93,
   "class": "AdjacentPanorama",
   "backwardYaw": -75.59,
   "panorama": "this.panorama_EADDBD3C_E141_6B1D_41C2_3B8C0C9C91C2",
   "distance": 1
  },
  {
   "yaw": 18.1,
   "class": "AdjacentPanorama",
   "backwardYaw": -75.59,
   "panorama": "this.panorama_EADDBD3C_E141_6B1D_41C2_3B8C0C9C91C2",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_82C12CA3_EC9A_0BEF_41EC_167990F4DC6E",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_EADDA963_E141_EB2B_41DB_CD069D3B479A_t.jpg",
 "hfovMax": 120
},
{
 "initialPosition": {
  "yaw": -44.36,
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -154.5,
    "path": "shortest",
    "targetPitch": 1.92,
    "pitchSpeed": 26.35,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 51.94
   },
   {
    "targetYaw": -84.79,
    "path": "shortest",
    "targetPitch": 0.06,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 157.89,
    "path": "shortest",
    "targetPitch": -1.95,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 33.79,
    "path": "shortest",
    "targetPitch": -5.46,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_834E8DA0_EC9A_05E8_41DC_69C9C2D5EA05",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 105.26,
  "class": "PanoramaCameraPosition",
  "pitch": -3.01
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 6.91,
    "path": "shortest",
    "targetPitch": -22.3,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -107.65,
    "path": "shortest",
    "targetPitch": -23.05,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -162.16,
    "path": "shortest",
    "targetPitch": -4.21,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F6165FE8_E4A4_502E_41CE_D0E472165F33_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -176.86,
  "class": "PanoramaCameraPosition",
  "pitch": -12.56
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 152.62,
    "path": "shortest",
    "targetPitch": -2.2,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 90.31,
    "path": "shortest",
    "targetPitch": -1.19,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 1.38,
    "path": "shortest",
    "targetPitch": -8.48,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F521389D_E4A4_30E7_419D_206A40017412_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_EAE2003C_E141_991C_41CF_920F278E9C7B_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EAE2003C_E141_991C_41CF_920F278E9C7B_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EAE2003C_E141_991C_41CF_920F278E9C7B_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EAE2003C_E141_991C_41CF_920F278E9C7B_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EAE2003C_E141_991C_41CF_920F278E9C7B_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EAE2003C_E141_991C_41CF_920F278E9C7B_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EAE2003C_E141_991C_41CF_920F278E9C7B_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EAE2003C_E141_991C_41CF_920F278E9C7B_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EAE2003C_E141_991C_41CF_920F278E9C7B_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EAE2003C_E141_991C_41CF_920F278E9C7B_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EAE2003C_E141_991C_41CF_920F278E9C7B_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EAE2003C_E141_991C_41CF_920F278E9C7B_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EAE2003C_E141_991C_41CF_920F278E9C7B_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EAE2003C_E141_991C_41CF_920F278E9C7B_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EAE2003C_E141_991C_41CF_920F278E9C7B_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EAE2003C_E141_991C_41CF_920F278E9C7B_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EAE2003C_E141_991C_41CF_920F278E9C7B_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EAE2003C_E141_991C_41CF_920F278E9C7B_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EAE2003C_E141_991C_41CF_920F278E9C7B_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EAE2003C_E141_991C_41CF_920F278E9C7B_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EAE2003C_E141_991C_41CF_920F278E9C7B_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_EAE2003C_E141_991C_41CF_920F278E9C7B_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EAE2003C_E141_991C_41CF_920F278E9C7B_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EAE2003C_E141_991C_41CF_920F278E9C7B_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EAE2003C_E141_991C_41CF_920F278E9C7B_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Planta Baja - Acceso - 1er Grado",
 "hfovMin": "120%",
 "id": "panorama_EAE2003C_E141_991C_41CF_920F278E9C7B",
 "overlays": [
  "this.overlay_F547F8BD_E2DA_5B71_41EB_F30F0C812662",
  "this.overlay_F50BD266_E2DA_2F12_41DB_4B62FA0D90EC",
  "this.panorama_EAE2003C_E141_991C_41CF_920F278E9C7B_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -93.11,
   "class": "AdjacentPanorama",
   "backwardYaw": -125.4,
   "panorama": "this.panorama_E8C90C1B_E365_F7E2_41D7_18E9C82943A5",
   "distance": 1
  },
  {
   "yaw": -0.26,
   "class": "AdjacentPanorama",
   "backwardYaw": 179.87,
   "panorama": "this.panorama_ED4F5164_E141_7B2C_41CB_BAE8006AA571",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_82C12CA3_EC9A_0BEF_41EC_167990F4DC6E",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_EAE2003C_E141_991C_41CF_920F278E9C7B_t.jpg",
 "hfovMax": 120
},
{
 "levels": [
  {
   "url": "media/popup_DFF4557A_E5A6_0559_41E9_AD0F6383424C_0_0.jpg",
   "width": 1920,
   "class": "ImageResourceLevel",
   "height": 1280
  },
  {
   "url": "media/popup_DFF4557A_E5A6_0559_41E9_AD0F6383424C_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 682
  },
  {
   "url": "media/popup_DFF4557A_E5A6_0559_41E9_AD0F6383424C_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 341
  }
 ],
 "id": "ImageResource_B52924AF_E5EA_1BF7_41B7_9890BA482A42",
 "class": "ImageResource"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_EFE15D2B_E466_0AFF_41D4_0DCE456C6586_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EFE15D2B_E466_0AFF_41D4_0DCE456C6586_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EFE15D2B_E466_0AFF_41D4_0DCE456C6586_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFE15D2B_E466_0AFF_41D4_0DCE456C6586_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EFE15D2B_E466_0AFF_41D4_0DCE456C6586_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EFE15D2B_E466_0AFF_41D4_0DCE456C6586_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EFE15D2B_E466_0AFF_41D4_0DCE456C6586_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFE15D2B_E466_0AFF_41D4_0DCE456C6586_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EFE15D2B_E466_0AFF_41D4_0DCE456C6586_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EFE15D2B_E466_0AFF_41D4_0DCE456C6586_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EFE15D2B_E466_0AFF_41D4_0DCE456C6586_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFE15D2B_E466_0AFF_41D4_0DCE456C6586_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EFE15D2B_E466_0AFF_41D4_0DCE456C6586_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EFE15D2B_E466_0AFF_41D4_0DCE456C6586_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EFE15D2B_E466_0AFF_41D4_0DCE456C6586_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFE15D2B_E466_0AFF_41D4_0DCE456C6586_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EFE15D2B_E466_0AFF_41D4_0DCE456C6586_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EFE15D2B_E466_0AFF_41D4_0DCE456C6586_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EFE15D2B_E466_0AFF_41D4_0DCE456C6586_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EFE15D2B_E466_0AFF_41D4_0DCE456C6586_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFE15D2B_E466_0AFF_41D4_0DCE456C6586_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_EFE15D2B_E466_0AFF_41D4_0DCE456C6586_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EFE15D2B_E466_0AFF_41D4_0DCE456C6586_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EFE15D2B_E466_0AFF_41D4_0DCE456C6586_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFE15D2B_E466_0AFF_41D4_0DCE456C6586_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "1er Piso - Acceso a Aula 6",
 "id": "panorama_EFE15D2B_E466_0AFF_41D4_0DCE456C6586",
 "overlays": [
  "this.overlay_F624B12D_E46A_3AFB_41A0_CB6A7C7BF94E",
  "this.overlay_F6B03377_E46A_3D57_41BE_13227BC1B4C2",
  "this.overlay_F1E75375_E466_1D6B_41BA_AF3B2F7C7A50",
  "this.panorama_EFE15D2B_E466_0AFF_41D4_0DCE456C6586_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 178.25,
   "class": "AdjacentPanorama",
   "backwardYaw": -6.53,
   "panorama": "this.panorama_F5213C55_E4A4_D066_416D_85F4BFC80191",
   "distance": 1
  },
  {
   "yaw": 178.68,
   "class": "AdjacentPanorama",
   "backwardYaw": -62.95,
   "panorama": "this.panorama_F5217E84_E4A4_50E6_41B1_B7D2D7D82D72",
   "distance": 1
  },
  {
   "panorama": "this.panorama_E9C6E272_E46A_7F69_41D0_A0613D7F1112",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_82C12CA3_EC9A_0BEF_41EC_167990F4DC6E",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_EFE15D2B_E466_0AFF_41D4_0DCE456C6586_t.jpg",
 "hfovMax": 130
},
{
 "levels": [
  {
   "url": "media/popup_DC01BADB_E5AE_0F5F_41E6_41FDAE1145C0_0_0.jpg",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  },
  {
   "url": "media/popup_DC01BADB_E5AE_0F5F_41E6_41FDAE1145C0_0_1.jpg",
   "width": 682,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_DC01BADB_E5AE_0F5F_41E6_41FDAE1145C0_0_2.jpg",
   "width": 341,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_B51C14CD_E5EA_1BBB_41C5_4F97E2D4F385",
 "class": "ImageResource"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -116.83,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_DE2FCAF8_E5BA_0F59_41E3_05A13E2CBDCD",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_DE2FCAF8_E5BA_0F59_41E3_05A13E2CBDCD_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 711
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 2.68,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "pitch": 0.13
},
{
 "initialPosition": {
  "yaw": -0.13,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -175.98,
    "path": "shortest",
    "targetPitch": -5.53,
    "pitchSpeed": 16.04,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 31.21
   },
   {
    "targetYaw": 11.68,
    "path": "shortest",
    "targetPitch": 1.82,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 12.18,
    "path": "shortest",
    "targetPitch": -9.23,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 41.58,
    "path": "shortest",
    "targetPitch": -6.47,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 93.08,
    "path": "shortest",
    "targetPitch": -5.21,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 113.93,
    "path": "shortest",
    "targetPitch": 17.65,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8141991B_EC9A_0ADF_41E0_88D5409D87D2",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 104.41,
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -174.35,
    "path": "shortest",
    "targetPitch": 2.51,
    "pitchSpeed": 14.61,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 28.35
   },
   {
    "targetYaw": 154.38,
    "path": "shortest",
    "targetPitch": 0.06,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 112.42,
    "path": "shortest",
    "targetPitch": 41.77,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 0.88,
    "path": "shortest",
    "targetPitch": -1.19,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_85AD62ED_EC9A_7F78_41EC_59A984CD607B",
 "class": "PanoramaCamera"
},
{
 "levels": [
  {
   "url": "media/popup_D9285EF5_E59A_076B_41EB_851D422410FA_0_0.jpg",
   "width": 1920,
   "class": "ImageResourceLevel",
   "height": 1280
  },
  {
   "url": "media/popup_D9285EF5_E59A_076B_41EB_851D422410FA_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 682
  },
  {
   "url": "media/popup_D9285EF5_E59A_076B_41EB_851D422410FA_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 341
  }
 ],
 "id": "ImageResource_B52CA4B7_E5EA_1BD7_41A1_B1FBE70C638A",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "yaw": 4.14,
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 0,
    "path": "shortest",
    "targetPitch": 0,
    "pitchSpeed": 3.07,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 5.15
   },
   {
    "targetYaw": -31.78,
    "hfovSpeed": 33.25,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetHfov": 92,
    "targetPitch": -4.71,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -107.65,
    "hfovSpeed": 33.25,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetHfov": 100,
    "targetPitch": -6.22,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 75.24,
    "hfovSpeed": 33.25,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetHfov": 110,
    "targetPitch": -12.5,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -174.72,
    "hfovSpeed": 33.25,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetHfov": 110,
    "targetPitch": -9.23,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_829EFD01_EC9A_0AAB_41DE_1AC594DD55EE",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 179.74,
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 92.7,
    "path": "shortest",
    "targetPitch": -5.78,
    "pitchSpeed": 8.6,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 16.26
   },
   {
    "targetYaw": -91.57,
    "path": "shortest",
    "targetPitch": -0.94,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 1.63,
    "path": "shortest",
    "targetPitch": -5.97,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_87CFB673_EC9A_076F_41E0_4AD82A05DA94",
 "class": "PanoramaCamera"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": 94.46,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_DB2EED64_E5BA_0569_41E1_3DEFF8F54968",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_DB2EED64_E5BA_0569_41E1_3DEFF8F54968_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 682
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 4.41,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "pitch": -5.05
},
{
 "initialPosition": {
  "yaw": -29.4,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -176.86,
    "path": "shortest",
    "targetPitch": -12.56,
    "pitchSpeed": 8.21,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 15.48
   },
   {
    "targetYaw": 152.62,
    "path": "shortest",
    "targetPitch": -2.2,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 90.31,
    "path": "shortest",
    "targetPitch": -1.19,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 1.38,
    "path": "shortest",
    "targetPitch": -8.48,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8219CDCE_EC9A_05B9_41B9_2A0774E6834E",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_F5392FBD_E4A4_7027_41E3_AB0AD55108CB_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_F5392FBD_E4A4_7027_41E3_AB0AD55108CB_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5392FBD_E4A4_7027_41E3_AB0AD55108CB_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5392FBD_E4A4_7027_41E3_AB0AD55108CB_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F5392FBD_E4A4_7027_41E3_AB0AD55108CB_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_F5392FBD_E4A4_7027_41E3_AB0AD55108CB_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5392FBD_E4A4_7027_41E3_AB0AD55108CB_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5392FBD_E4A4_7027_41E3_AB0AD55108CB_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F5392FBD_E4A4_7027_41E3_AB0AD55108CB_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_F5392FBD_E4A4_7027_41E3_AB0AD55108CB_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5392FBD_E4A4_7027_41E3_AB0AD55108CB_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5392FBD_E4A4_7027_41E3_AB0AD55108CB_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F5392FBD_E4A4_7027_41E3_AB0AD55108CB_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_F5392FBD_E4A4_7027_41E3_AB0AD55108CB_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5392FBD_E4A4_7027_41E3_AB0AD55108CB_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5392FBD_E4A4_7027_41E3_AB0AD55108CB_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_F5392FBD_E4A4_7027_41E3_AB0AD55108CB_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F5392FBD_E4A4_7027_41E3_AB0AD55108CB_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_F5392FBD_E4A4_7027_41E3_AB0AD55108CB_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5392FBD_E4A4_7027_41E3_AB0AD55108CB_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5392FBD_E4A4_7027_41E3_AB0AD55108CB_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_F5392FBD_E4A4_7027_41E3_AB0AD55108CB_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_F5392FBD_E4A4_7027_41E3_AB0AD55108CB_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5392FBD_E4A4_7027_41E3_AB0AD55108CB_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5392FBD_E4A4_7027_41E3_AB0AD55108CB_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "1er Piso - 6to Grado",
 "id": "panorama_F5392FBD_E4A4_7027_41E3_AB0AD55108CB",
 "overlays": [
  "this.overlay_F6033E1D_E466_06DB_41EC_4F88AEF84156",
  "this.panorama_F5392FBD_E4A4_7027_41E3_AB0AD55108CB_tcap0",
  "this.overlay_CA5DDC62_E4AE_0B69_41BA_6AB6AA5C046F",
  "this.overlay_DBF87475_E5FE_7B6B_41A1_11753D657A7E"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 163.04,
   "class": "AdjacentPanorama",
   "backwardYaw": 58.79,
   "panorama": "this.panorama_F5217E84_E4A4_50E6_41B1_B7D2D7D82D72",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_82C12CA3_EC9A_0BEF_41EC_167990F4DC6E",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_F5392FBD_E4A4_7027_41E3_AB0AD55108CB_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "pitch": 0.91
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 53.38,
    "path": "shortest",
    "targetPitch": 0.57,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 98.86,
    "path": "shortest",
    "targetPitch": -0.44,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -143.82,
    "path": "shortest",
    "targetPitch": 3.58,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -99.61,
    "hfovSpeed": 33.25,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetHfov": 80,
    "targetPitch": 3.58,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -50.12,
    "path": "shortest",
    "targetPitch": -3.2,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -15.45,
    "path": "shortest",
    "targetPitch": 0.82,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "panorama_E8F154F9_E364_F02F_41E0_7ADE7EBBD519_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -79.76,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -2.01,
    "path": "shortest",
    "targetPitch": -1.51,
    "pitchSpeed": 13.23,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 25.58
   },
   {
    "targetYaw": 99.86,
    "path": "shortest",
    "targetPitch": -7.47,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_813AE9C0_EC9A_0DA9_41EB_D1C4C2A28541",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 18.7,
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -174.35,
    "path": "shortest",
    "targetPitch": 2.51,
    "pitchSpeed": 10.43,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 19.94
   },
   {
    "targetYaw": 154.38,
    "path": "shortest",
    "targetPitch": 0.06,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 112.42,
    "path": "shortest",
    "targetPitch": 41.77,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 0.88,
    "path": "shortest",
    "targetPitch": -1.19,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_853AC45C_EC9A_7B59_41EA_27CDD3DC1751",
 "class": "PanoramaCamera"
},
{
 "items": [
  {
   "media": "this.panorama_EADDC172_E141_BB25_41D8_E09A626FB8FD",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EADDC172_E141_BB25_41D8_E09A626FB8FD_camera"
  },
  {
   "media": "this.panorama_EADC6D16_E147_A8ED_41E7_7A006A29B117",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EADC6D16_E147_A8ED_41E7_7A006A29B117_camera"
  },
  {
   "media": "this.panorama_E8E42205_E364_33E7_41E6_A73F2DB39F27",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E8E42205_E364_33E7_41E6_A73F2DB39F27_camera"
  },
  {
   "media": "this.panorama_E8F154F9_E364_F02F_41E0_7ADE7EBBD519",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E8F154F9_E364_F02F_41E0_7ADE7EBBD519_camera"
  },
  {
   "media": "this.panorama_EA8920BB_E140_B91B_41E9_D14906604A6B",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EA8920BB_E140_B91B_41E9_D14906604A6B_camera"
  },
  {
   "media": "this.panorama_EAF0B794_E147_67ED_41D1_DF56AF0E8AFE",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EAF0B794_E147_67ED_41D1_DF56AF0E8AFE_camera"
  },
  {
   "media": "this.panorama_EADDA963_E141_EB2B_41DB_CD069D3B479A",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EADDA963_E141_EB2B_41DB_CD069D3B479A_camera"
  },
  {
   "media": "this.panorama_EADDBD3C_E141_6B1D_41C2_3B8C0C9C91C2",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EADDBD3C_E141_6B1D_41C2_3B8C0C9C91C2_camera"
  },
  {
   "media": "this.panorama_EA80C6E4_E147_992C_41D3_588476BDC207",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EA80C6E4_E147_992C_41D3_588476BDC207_camera"
  },
  {
   "media": "this.panorama_EADC0494_E147_99EC_41E6_6E85636B3ABA",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EADC0494_E147_99EC_41E6_6E85636B3ABA_camera"
  },
  {
   "media": "this.panorama_EADCE602_E147_B8E5_41E0_A3348388DA41",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EADCE602_E147_B8E5_41E0_A3348388DA41_camera"
  },
  {
   "media": "this.panorama_EF3E255F_E364_5063_41EA_23F03465E467",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EF3E255F_E364_5063_41EA_23F03465E467_camera"
  },
  {
   "media": "this.panorama_EADC6654_E140_996D_41E8_8F536A929374",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EADC6654_E140_996D_41E8_8F536A929374_camera"
  },
  {
   "media": "this.panorama_E8FADA72_E364_F022_41C2_C29F7A235EAF",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E8FADA72_E364_F022_41C2_C29F7A235EAF_camera"
  },
  {
   "media": "this.panorama_E8B9812A_E364_302D_41E2_DFDB9823113D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E8B9812A_E364_302D_41E2_DFDB9823113D_camera"
  },
  {
   "media": "this.panorama_E8C90C1B_E365_F7E2_41D7_18E9C82943A5",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E8C90C1B_E365_F7E2_41D7_18E9C82943A5_camera"
  },
  {
   "media": "this.panorama_EAE2003C_E141_991C_41CF_920F278E9C7B",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EAE2003C_E141_991C_41CF_920F278E9C7B_camera"
  },
  {
   "media": "this.panorama_ED4F5164_E141_7B2C_41CB_BAE8006AA571",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_ED4F5164_E141_7B2C_41CB_BAE8006AA571_camera"
  },
  {
   "media": "this.panorama_F5217E84_E4A4_50E6_41B1_B7D2D7D82D72",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F5217E84_E4A4_50E6_41B1_B7D2D7D82D72_camera"
  },
  {
   "media": "this.panorama_F5392FBD_E4A4_7027_41E3_AB0AD55108CB",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F5392FBD_E4A4_7027_41E3_AB0AD55108CB_camera"
  },
  {
   "media": "this.panorama_F6165FE8_E4A4_502E_41CE_D0E472165F33",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F6165FE8_E4A4_502E_41CE_D0E472165F33_camera"
  },
  {
   "media": "this.panorama_F5213C55_E4A4_D066_416D_85F4BFC80191",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F5213C55_E4A4_D066_416D_85F4BFC80191_camera"
  },
  {
   "media": "this.panorama_EFE15D2B_E466_0AFF_41D4_0DCE456C6586",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EFE15D2B_E466_0AFF_41D4_0DCE456C6586_camera"
  },
  {
   "media": "this.panorama_E9C6E272_E46A_7F69_41D0_A0613D7F1112",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E9C6E272_E46A_7F69_41D0_A0613D7F1112_camera"
  },
  {
   "media": "this.panorama_F521389D_E4A4_30E7_419D_206A40017412",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F521389D_E4A4_30E7_419D_206A40017412_camera"
  },
  {
   "media": "this.panorama_F5214712_E4A4_51E2_41E0_B73B9A6D712C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F5214712_E4A4_51E2_41E0_B73B9A6D712C_camera"
  },
  {
   "media": "this.panorama_E9C4F462_E46B_FB69_41EA_EBF76426CC46",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E9C4F462_E46B_FB69_41EA_EBF76426CC46_camera"
  },
  {
   "media": "this.panorama_E9C4108D_E46A_3BBB_41E4_FCB0E78FC031",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E9C4108D_E46A_3BBB_41E4_FCB0E78FC031_camera"
  },
  {
   "media": "this.panorama_E9C2B1AC_E46A_1DF9_41D2_1E8C48B2DC22",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E9C2B1AC_E46A_1DF9_41D2_1E8C48B2DC22_camera"
  },
  {
   "media": "this.panorama_E9C1D3F7_E46A_1D57_4197_60D58E87487C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E9C1D3F7_E46A_1D57_4197_60D58E87487C_camera"
  },
  {
   "media": "this.panorama_E9C5C3B9_E46A_3DDB_41B2_81F19F4D0621",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E9C5C3B9_E46A_3DDB_41B2_81F19F4D0621_camera"
  },
  {
   "media": "this.panorama_E9C5B2DE_E46A_1F59_41E8_91B64D35D990",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E9C5B2DE_E46A_1F59_41E8_91B64D35D990_camera"
  },
  {
   "media": "this.panorama_F52171BD_E4A4_5027_41E5_9EE998F7E297",
   "end": "this.trigger('tourEnded')",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F52171BD_E4A4_5027_41E5_9EE998F7E297_camera"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 0,
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "pitch": 0.91
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -55.65,
    "path": "shortest",
    "targetPitch": 1.57,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -126.49,
    "path": "shortest",
    "targetPitch": 0.31,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 107.9,
    "path": "shortest",
    "targetPitch": -4.71,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 52.38,
    "path": "shortest",
    "targetPitch": -1.44,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "panorama_E8C90C1B_E365_F7E2_41D7_18E9C82943A5_camera",
 "class": "PanoramaCamera"
},
{
 "headerBackgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_CA487C11_E4AE_0AAB_41E9_8BD550529C57",
 "backgroundOpacity": 1,
 "titleFontColor": "#000000",
 "width": "90%",
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Window",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "titlePaddingRight": 5,
 "titlePaddingTop": 5,
 "footerBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "headerBorderSize": 0,
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "backgroundColor": [],
 "verticalAlign": "middle",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
 "height": "90%",
 "title": "",
 "borderSize": 0,
 "titleFontStyle": "normal",
 "headerPaddingRight": 0,
 "bodyBackgroundOpacity": 1,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "headerPaddingLeft": 0,
 "bodyPaddingLeft": 0,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "headerBackgroundOpacity": 1,
 "scrollBarColor": "#000000",
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPaddingRight": 2,
 "bodyBorderColor": "#000000",
 "shadowBlurRadius": 6,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "footerBorderColor": "#000000",
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "closeButtonPaddingLeft": 2,
 "bodyPaddingTop": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "layout": "vertical",
 "closeButtonBorderRadius": 11,
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "children": [
  "this.htmlText_CAB6FC10_E4AE_0AA9_41DF_C64B8324337E",
  {
   "backgroundOpacity": 1,
   "width": "100%",
   "class": "WebFrame",
   "borderRadius": 0,
   "insetBorder": false,
   "paddingLeft": 0,
   "paddingRight": 0,
   "url": "https://www.educacionadventista.com/ensenanza/nivel-secundario/",
   "backgroundColorRatios": [],
   "propagateClick": false,
   "minHeight": 0,
   "backgroundColor": [],
   "minWidth": 0,
   "height": "89%",
   "paddingTop": 0,
   "backgroundColorDirection": "vertical",
   "paddingBottom": 0,
   "borderSize": 0,
   "scrollEnabled": true,
   "data": {
    "name": "WebFrame77057"
   },
   "shadow": false
  }
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "shadowHorizontalLength": 3,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBorderSize": 0,
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 0,
 "titleFontSize": "1.29vmin",
 "backgroundColorRatios": [],
 "closeButtonBorderSize": 0,
 "closeButtonPaddingBottom": 2,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 0,
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "footerBackgroundOpacity": 1,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 20,
 "veilOpacity": 0.4,
 "shadowVerticalLength": 0,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 0,
 "paddingTop": 0,
 "closeButtonBackgroundOpacity": 1,
 "bodyPaddingBottom": 0,
 "titlePaddingLeft": 5,
 "closeButtonPaddingTop": 2,
 "closeButtonIconColor": "#000000",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "bodyPaddingRight": 0,
 "closeButtonBackgroundColor": [],
 "shadowSpread": 1,
 "data": {
  "name": "Window66936"
 },
 "titleFontFamily": "Arial",
 "bodyBorderSize": 0
},
{
 "initialPosition": {
  "yaw": 17.21,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 105.26,
    "path": "shortest",
    "targetPitch": -3.01,
    "pitchSpeed": 15.11,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 29.35
   },
   {
    "targetYaw": 6.91,
    "path": "shortest",
    "targetPitch": -22.3,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -107.65,
    "path": "shortest",
    "targetPitch": -23.05,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -162.16,
    "path": "shortest",
    "targetPitch": -4.21,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_86DE653D_EC9A_7ADB_41DA_E23973FF229D",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_EADC6654_E140_996D_41E8_8F536A929374_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EADC6654_E140_996D_41E8_8F536A929374_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EADC6654_E140_996D_41E8_8F536A929374_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EADC6654_E140_996D_41E8_8F536A929374_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EADC6654_E140_996D_41E8_8F536A929374_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EADC6654_E140_996D_41E8_8F536A929374_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EADC6654_E140_996D_41E8_8F536A929374_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EADC6654_E140_996D_41E8_8F536A929374_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EADC6654_E140_996D_41E8_8F536A929374_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EADC6654_E140_996D_41E8_8F536A929374_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EADC6654_E140_996D_41E8_8F536A929374_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EADC6654_E140_996D_41E8_8F536A929374_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EADC6654_E140_996D_41E8_8F536A929374_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EADC6654_E140_996D_41E8_8F536A929374_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EADC6654_E140_996D_41E8_8F536A929374_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EADC6654_E140_996D_41E8_8F536A929374_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EADC6654_E140_996D_41E8_8F536A929374_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EADC6654_E140_996D_41E8_8F536A929374_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EADC6654_E140_996D_41E8_8F536A929374_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EADC6654_E140_996D_41E8_8F536A929374_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EADC6654_E140_996D_41E8_8F536A929374_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_EADC6654_E140_996D_41E8_8F536A929374_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EADC6654_E140_996D_41E8_8F536A929374_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EADC6654_E140_996D_41E8_8F536A929374_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EADC6654_E140_996D_41E8_8F536A929374_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Planta Baja - Cancha Centro",
 "hfovMin": "120%",
 "id": "panorama_EADC6654_E140_996D_41E8_8F536A929374",
 "overlays": [
  "this.overlay_F7CBE172_E2FE_2DF3_41E1_F65B9886673A",
  "this.overlay_F6D9C912_E2FA_7D33_41D2_D5FB9F8BDD8F",
  "this.overlay_F62520E8_E2FA_EB1F_41A1_23940BBBA5C8",
  "this.overlay_CE96D08B_E4FA_1BBF_41E4_68A1C14D8348",
  "this.panorama_EADC6654_E140_996D_41E8_8F536A929374_tcap0",
  "this.overlay_DBF00944_E5FA_0AA9_41E9_44DFA7804CF8",
  "this.overlay_A45089BD_E5FA_0DDB_41C5_E2D613A0FAD7",
  "this.overlay_A34966EC_E5FE_0778_41E3_315A9FC84AC1"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -133.15,
   "class": "AdjacentPanorama",
   "backwardYaw": 75.62,
   "panorama": "this.panorama_EF3E255F_E364_5063_41EA_23F03465E467",
   "distance": 1
  },
  {
   "yaw": -160.57,
   "class": "AdjacentPanorama",
   "backwardYaw": 68.19,
   "panorama": "this.panorama_EADDA963_E141_EB2B_41DB_CD069D3B479A",
   "distance": 1
  },
  {
   "yaw": -115.59,
   "class": "AdjacentPanorama",
   "backwardYaw": -161.3,
   "panorama": "this.panorama_EADDBD3C_E141_6B1D_41C2_3B8C0C9C91C2",
   "distance": 1
  },
  {
   "panorama": "this.panorama_EA80C6E4_E147_992C_41D3_588476BDC207",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_82C12CA3_EC9A_0BEF_41EC_167990F4DC6E",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_EADC6654_E140_996D_41E8_8F536A929374_t.jpg",
 "hfovMax": 120
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_F5217E84_E4A4_50E6_41B1_B7D2D7D82D72_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_F5217E84_E4A4_50E6_41B1_B7D2D7D82D72_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5217E84_E4A4_50E6_41B1_B7D2D7D82D72_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5217E84_E4A4_50E6_41B1_B7D2D7D82D72_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F5217E84_E4A4_50E6_41B1_B7D2D7D82D72_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_F5217E84_E4A4_50E6_41B1_B7D2D7D82D72_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5217E84_E4A4_50E6_41B1_B7D2D7D82D72_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5217E84_E4A4_50E6_41B1_B7D2D7D82D72_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F5217E84_E4A4_50E6_41B1_B7D2D7D82D72_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_F5217E84_E4A4_50E6_41B1_B7D2D7D82D72_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5217E84_E4A4_50E6_41B1_B7D2D7D82D72_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5217E84_E4A4_50E6_41B1_B7D2D7D82D72_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F5217E84_E4A4_50E6_41B1_B7D2D7D82D72_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_F5217E84_E4A4_50E6_41B1_B7D2D7D82D72_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5217E84_E4A4_50E6_41B1_B7D2D7D82D72_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5217E84_E4A4_50E6_41B1_B7D2D7D82D72_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_F5217E84_E4A4_50E6_41B1_B7D2D7D82D72_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F5217E84_E4A4_50E6_41B1_B7D2D7D82D72_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_F5217E84_E4A4_50E6_41B1_B7D2D7D82D72_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5217E84_E4A4_50E6_41B1_B7D2D7D82D72_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5217E84_E4A4_50E6_41B1_B7D2D7D82D72_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_F5217E84_E4A4_50E6_41B1_B7D2D7D82D72_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_F5217E84_E4A4_50E6_41B1_B7D2D7D82D72_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5217E84_E4A4_50E6_41B1_B7D2D7D82D72_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5217E84_E4A4_50E6_41B1_B7D2D7D82D72_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "1er Piso - Acceso a 5to Grado y Aula 11",
 "id": "panorama_F5217E84_E4A4_50E6_41B1_B7D2D7D82D72",
 "overlays": [
  "this.overlay_EB956235_E47A_1EE8_41E0_E360FEBF7BA5",
  "this.overlay_EBF15B92_E47A_0DA8_41D9_1AC256EAACC2",
  "this.overlay_EBF94DBC_E466_05D8_41C5_D10AE2700275",
  "this.overlay_F787B429_E46A_1AFB_41E5_FB0F123E5FBB",
  "this.overlay_FB17B85C_E49E_0B58_41CC_CC00723232AC",
  "this.overlay_C4CEE7D7_E49E_0557_41DD_07DB98332BB9",
  "this.panorama_F5217E84_E4A4_50E6_41B1_B7D2D7D82D72_tcap0",
  "this.overlay_BC0381A7_ECA6_1DF7_41D8_B8AA95C1C61E",
  "this.overlay_BEAA8925_ECAA_0AEB_41C4_DE4D9ED6B94A",
  "this.overlay_BDE0BC7E_ECAA_0B59_41D2_AB5BF8DBCA51",
  "this.overlay_BEC2E0FB_ECAA_1B5F_41EB_150CEF5A1A58",
  "this.overlay_8C04031A_ECAE_1ED9_41E8_26F648C4E247",
  "this.overlay_B60C05C6_ECAA_05A9_41E1_1D3117F3E169"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 124.98,
   "class": "AdjacentPanorama",
   "backwardYaw": -87.05,
   "panorama": "this.panorama_E8F154F9_E364_F02F_41E0_7ADE7EBBD519",
   "distance": 1
  },
  {
   "yaw": 125.02,
   "class": "AdjacentPanorama",
   "backwardYaw": -87.05,
   "panorama": "this.panorama_E8F154F9_E364_F02F_41E0_7ADE7EBBD519",
   "distance": 1
  },
  {
   "yaw": 0.25,
   "class": "AdjacentPanorama",
   "backwardYaw": -162.79,
   "panorama": "this.panorama_F6165FE8_E4A4_502E_41CE_D0E472165F33",
   "distance": 1
  },
  {
   "yaw": 0.31,
   "class": "AdjacentPanorama",
   "backwardYaw": -162.79,
   "panorama": "this.panorama_F6165FE8_E4A4_502E_41CE_D0E472165F33",
   "distance": 1
  },
  {
   "yaw": -62.95,
   "class": "AdjacentPanorama",
   "backwardYaw": 178.68,
   "panorama": "this.panorama_EFE15D2B_E466_0AFF_41D4_0DCE456C6586",
   "distance": 1
  },
  {
   "yaw": -62.83,
   "class": "AdjacentPanorama",
   "backwardYaw": 173.1,
   "panorama": "this.panorama_F5213C55_E4A4_D066_416D_85F4BFC80191",
   "distance": 1
  },
  {
   "panorama": "this.panorama_F521389D_E4A4_30E7_419D_206A40017412",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F521389D_E4A4_30E7_419D_206A40017412",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 58.79,
   "class": "AdjacentPanorama",
   "backwardYaw": 163.04,
   "panorama": "this.panorama_F5392FBD_E4A4_7027_41E3_AB0AD55108CB",
   "distance": 1
  },
  {
   "yaw": 58.62,
   "class": "AdjacentPanorama",
   "backwardYaw": 163.04,
   "panorama": "this.panorama_F5392FBD_E4A4_7027_41E3_AB0AD55108CB",
   "distance": 1
  },
  {
   "yaw": 176.61,
   "class": "AdjacentPanorama",
   "backwardYaw": -160.03,
   "panorama": "this.panorama_E9C4F462_E46B_FB69_41EA_EBF76426CC46",
   "distance": 1
  },
  {
   "yaw": 175.43,
   "class": "AdjacentPanorama",
   "backwardYaw": -160.03,
   "panorama": "this.panorama_E9C4F462_E46B_FB69_41EA_EBF76426CC46",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_82C12CA3_EC9A_0BEF_41EC_167990F4DC6E",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_F5217E84_E4A4_50E6_41B1_B7D2D7D82D72_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 126.11,
  "class": "PanoramaCameraPosition",
  "pitch": -1.51
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 141.81,
    "path": "shortest",
    "targetPitch": -42.64,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -158.9,
    "path": "shortest",
    "targetPitch": -14.76,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -99.11,
    "path": "shortest",
    "targetPitch": -10.24,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -170.2,
    "path": "shortest",
    "targetPitch": -1.19,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_E9C6E272_E46A_7F69_41D0_A0613D7F1112_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 53.46,
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 62.55,
    "path": "shortest",
    "targetPitch": -3.77,
    "pitchSpeed": 2.47,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 3.96
   },
   {
    "targetYaw": 169.45,
    "path": "shortest",
    "targetPitch": 3.08,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -133.02,
    "path": "shortest",
    "targetPitch": -2.45,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -72.73,
    "path": "shortest",
    "targetPitch": 4.58,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -21.48,
    "path": "shortest",
    "targetPitch": -3.45,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 61.93,
    "path": "shortest",
    "targetPitch": -3.45,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_874186E6_EC9A_0769_41DE_E6E40DE1898B",
 "class": "PanoramaCamera"
},
{
 "levels": [
  {
   "url": "media/popup_DB2EED64_E5BA_0569_41E1_3DEFF8F54968_0_0.jpg",
   "width": 1920,
   "class": "ImageResourceLevel",
   "height": 1280
  },
  {
   "url": "media/popup_DB2EED64_E5BA_0569_41E1_3DEFF8F54968_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 682
  },
  {
   "url": "media/popup_DB2EED64_E5BA_0569_41E1_3DEFF8F54968_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 341
  }
 ],
 "id": "ImageResource_B52F44BA_E5EA_1BD9_41D4_E2E2ACBF4197",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "yaw": 78.63,
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "pitch": 1.26
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -153.62,
    "path": "shortest",
    "targetPitch": 3.33,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 12.44,
    "path": "shortest",
    "targetPitch": 16.14,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 18.72,
    "path": "shortest",
    "targetPitch": -7.22,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "panorama_EADDA963_E141_EB2B_41DB_CD069D3B479A_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -16.96,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -155.51,
    "path": "shortest",
    "targetPitch": -0.25,
    "pitchSpeed": 76.77,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 153.24
   },
   {
    "targetYaw": -126.24,
    "path": "shortest",
    "targetPitch": -2.45,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -79.51,
    "path": "shortest",
    "targetPitch": -23.8,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 162.16,
    "path": "shortest",
    "targetPitch": -1.95,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8634D623_EC9A_06EF_41E7_CF9A76788E57",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -90.31,
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 0,
    "path": "shortest",
    "targetPitch": 0.91,
    "pitchSpeed": 28.15,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 55.56
   },
   {
    "targetYaw": 53.38,
    "path": "shortest",
    "targetPitch": 0.57,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 98.86,
    "path": "shortest",
    "targetPitch": -0.44,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -143.82,
    "path": "shortest",
    "targetPitch": 3.58,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -99.61,
    "hfovSpeed": 33.25,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetHfov": 80,
    "targetPitch": 3.58,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -50.12,
    "path": "shortest",
    "targetPitch": -3.2,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -15.45,
    "path": "shortest",
    "targetPitch": 0.82,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_82452D3D_EC9A_0ADB_41CD_1E42CFA3965B",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -17.21,
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -154.5,
    "path": "shortest",
    "targetPitch": 1.92,
    "pitchSpeed": 32.6,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 64.5
   },
   {
    "targetYaw": -84.79,
    "path": "shortest",
    "targetPitch": 0.06,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 157.89,
    "path": "shortest",
    "targetPitch": -1.95,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 33.79,
    "path": "shortest",
    "targetPitch": -5.46,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_8368AEA8_EC9A_07F9_41BD_1FD6D2F77A36",
 "class": "PanoramaCamera"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -5.62,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_DFBE5525_E5BE_1AEB_41D4_C8D38EFF8A1C",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_DFBE5525_E5BE_1AEB_41D4_C8D38EFF8A1C_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 682
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 2.92,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "pitch": -0.54
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_F6165FE8_E4A4_502E_41CE_D0E472165F33_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_F6165FE8_E4A4_502E_41CE_D0E472165F33_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F6165FE8_E4A4_502E_41CE_D0E472165F33_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F6165FE8_E4A4_502E_41CE_D0E472165F33_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F6165FE8_E4A4_502E_41CE_D0E472165F33_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_F6165FE8_E4A4_502E_41CE_D0E472165F33_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F6165FE8_E4A4_502E_41CE_D0E472165F33_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F6165FE8_E4A4_502E_41CE_D0E472165F33_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F6165FE8_E4A4_502E_41CE_D0E472165F33_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_F6165FE8_E4A4_502E_41CE_D0E472165F33_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F6165FE8_E4A4_502E_41CE_D0E472165F33_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F6165FE8_E4A4_502E_41CE_D0E472165F33_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F6165FE8_E4A4_502E_41CE_D0E472165F33_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_F6165FE8_E4A4_502E_41CE_D0E472165F33_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F6165FE8_E4A4_502E_41CE_D0E472165F33_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F6165FE8_E4A4_502E_41CE_D0E472165F33_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_F6165FE8_E4A4_502E_41CE_D0E472165F33_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F6165FE8_E4A4_502E_41CE_D0E472165F33_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_F6165FE8_E4A4_502E_41CE_D0E472165F33_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F6165FE8_E4A4_502E_41CE_D0E472165F33_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F6165FE8_E4A4_502E_41CE_D0E472165F33_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_F6165FE8_E4A4_502E_41CE_D0E472165F33_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_F6165FE8_E4A4_502E_41CE_D0E472165F33_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F6165FE8_E4A4_502E_41CE_D0E472165F33_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F6165FE8_E4A4_502E_41CE_D0E472165F33_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "1er Piso - 5to Grado",
 "id": "panorama_F6165FE8_E4A4_502E_41CE_D0E472165F33",
 "overlays": [
  "this.overlay_F4C8305F_E466_7B57_41D8_B8F1C17835EF",
  "this.panorama_F6165FE8_E4A4_502E_41CE_D0E472165F33_tcap0",
  "this.overlay_CA8081C6_E4AA_FDA9_41C0_0188801528AB"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -162.79,
   "class": "AdjacentPanorama",
   "backwardYaw": 0.25,
   "panorama": "this.panorama_F5217E84_E4A4_50E6_41B1_B7D2D7D82D72",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_82C12CA3_EC9A_0BEF_41EC_167990F4DC6E",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_F6165FE8_E4A4_502E_41CE_D0E472165F33_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -49.47,
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -50.24,
    "path": "shortest",
    "targetPitch": -3.52,
    "pitchSpeed": 1.79,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 2.59
   },
   {
    "targetYaw": 22.48,
    "path": "shortest",
    "targetPitch": -8.98,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 84.79,
    "path": "shortest",
    "targetPitch": -6.97,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 159.65,
    "path": "shortest",
    "targetPitch": -5.21,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_871B0731_EC9A_06EB_41C7_1F07C7F5A91D",
 "class": "PanoramaCamera"
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "audio": {
  "oggUrl": "media/audio_F9CD3A4B_E366_5F11_41E5_679F3541D93C.ogg",
  "mp3Url": "media/audio_F9CD3A4B_E366_5F11_41E5_679F3541D93C.mp3",
  "class": "AudioResource"
 },
 "id": "audio_F9CD3A4B_E366_5F11_41E5_679F3541D93C",
 "data": {
  "label": "Fashion (Full)"
 }
},
{
 "initialPosition": {
  "yaw": 125.57,
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 0,
    "path": "shortest",
    "targetPitch": 0.91,
    "pitchSpeed": 37.22,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 73.77
   },
   {
    "targetYaw": -55.65,
    "path": "shortest",
    "targetPitch": 1.57,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -126.49,
    "path": "shortest",
    "targetPitch": 0.31,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 107.9,
    "path": "shortest",
    "targetPitch": -4.71,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 52.38,
    "path": "shortest",
    "targetPitch": -1.44,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_82CB6AA9_EC9A_0FFB_41E2_52AC8D91D2F3",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 179.5,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 0,
    "path": "shortest",
    "targetPitch": 0,
    "pitchSpeed": 76.16,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 152.03
   },
   {
    "targetYaw": -38.31,
    "path": "shortest",
    "targetPitch": -1.19,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -18.46,
    "path": "shortest",
    "targetPitch": -32.09,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 35.8,
    "path": "shortest",
    "targetPitch": -10.24,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -3.64,
    "path": "shortest",
    "targetPitch": 37.24,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8705971D_EC9A_06DB_41A6_A077F6371DF3",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_F5214712_E4A4_51E2_41E0_B73B9A6D712C_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_F5214712_E4A4_51E2_41E0_B73B9A6D712C_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5214712_E4A4_51E2_41E0_B73B9A6D712C_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5214712_E4A4_51E2_41E0_B73B9A6D712C_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F5214712_E4A4_51E2_41E0_B73B9A6D712C_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_F5214712_E4A4_51E2_41E0_B73B9A6D712C_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5214712_E4A4_51E2_41E0_B73B9A6D712C_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5214712_E4A4_51E2_41E0_B73B9A6D712C_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F5214712_E4A4_51E2_41E0_B73B9A6D712C_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_F5214712_E4A4_51E2_41E0_B73B9A6D712C_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5214712_E4A4_51E2_41E0_B73B9A6D712C_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5214712_E4A4_51E2_41E0_B73B9A6D712C_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F5214712_E4A4_51E2_41E0_B73B9A6D712C_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_F5214712_E4A4_51E2_41E0_B73B9A6D712C_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5214712_E4A4_51E2_41E0_B73B9A6D712C_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5214712_E4A4_51E2_41E0_B73B9A6D712C_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_F5214712_E4A4_51E2_41E0_B73B9A6D712C_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F5214712_E4A4_51E2_41E0_B73B9A6D712C_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_F5214712_E4A4_51E2_41E0_B73B9A6D712C_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5214712_E4A4_51E2_41E0_B73B9A6D712C_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5214712_E4A4_51E2_41E0_B73B9A6D712C_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_F5214712_E4A4_51E2_41E0_B73B9A6D712C_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_F5214712_E4A4_51E2_41E0_B73B9A6D712C_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5214712_E4A4_51E2_41E0_B73B9A6D712C_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5214712_E4A4_51E2_41E0_B73B9A6D712C_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "1er Piso - Laboratorio de Inform\u00e1tica",
 "id": "panorama_F5214712_E4A4_51E2_41E0_B73B9A6D712C",
 "overlays": [
  "this.overlay_FD2F4132_E4AA_3AE9_41DB_00A26395237F",
  "this.panorama_F5214712_E4A4_51E2_41E0_B73B9A6D712C_tcap0",
  "this.overlay_A4232B9C_E5FA_0DD9_41E3_1571D255AF09"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 102.22,
   "class": "AdjacentPanorama",
   "backwardYaw": 2.14,
   "panorama": "this.panorama_F521389D_E4A4_30E7_419D_206A40017412",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": -0.91,
 "cardboardMenu": "this.Menu_82C12CA3_EC9A_0BEF_41EC_167990F4DC6E",
 "class": "Panorama",
 "vfov": 178.18,
 "thumbnailUrl": "media/panorama_F5214712_E4A4_51E2_41E0_B73B9A6D712C_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 62.55,
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "pitch": -3.77
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 169.45,
    "path": "shortest",
    "targetPitch": 3.08,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -133.02,
    "path": "shortest",
    "targetPitch": -2.45,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -72.73,
    "path": "shortest",
    "targetPitch": 4.58,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -21.48,
    "path": "shortest",
    "targetPitch": -3.45,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 61.93,
    "path": "shortest",
    "targetPitch": -3.45,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "panorama_EADC6D16_E147_A8ED_41E7_7A006A29B117_camera",
 "class": "PanoramaCamera"
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "audio": {
  "oggUrl": "media/audio_F9519C28_E359_DB1F_41E8_ECD9E705759C.ogg",
  "mp3Url": "media/audio_F9519C28_E359_DB1F_41E8_ECD9E705759C.mp3",
  "class": "AudioResource"
 },
 "id": "audio_F9519C28_E359_DB1F_41E8_ECD9E705759C",
 "data": {
  "label": "Abstract Inspiring Beats (Full Main)"
 }
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "audio": {
  "oggUrl": "media/audio_FB97A389_E366_6D11_41E6_48CBEAB331C6.ogg",
  "mp3Url": "media/audio_FB97A389_E366_6D11_41E6_48CBEAB331C6.mp3",
  "class": "AudioResource"
 },
 "id": "audio_FB97A389_E366_6D11_41E6_48CBEAB331C6",
 "data": {
  "label": "Fashion 2"
 }
},
{
 "initialPosition": {
  "yaw": -155.51,
  "class": "PanoramaCameraPosition",
  "pitch": -0.25
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -126.24,
    "path": "shortest",
    "targetPitch": -2.45,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -79.51,
    "path": "shortest",
    "targetPitch": -23.8,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 162.16,
    "path": "shortest",
    "targetPitch": -1.95,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F5392FBD_E4A4_7027_41E3_AB0AD55108CB_camera",
 "class": "PanoramaCamera"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": 146.04,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_DC15C8AD_E5AE_0BFB_41BC_B6486BCD8164",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_DC15C8AD_E5AE_0BFB_41BC_B6486BCD8164_0_1.jpg",
    "width": 682,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 1.81,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "pitch": -1.41
},
{
 "initialPosition": {
  "yaw": -177.86,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -176.86,
    "path": "shortest",
    "targetPitch": -12.56,
    "pitchSpeed": 1.61,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 2.23
   },
   {
    "targetYaw": 152.62,
    "path": "shortest",
    "targetPitch": -2.2,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 90.31,
    "path": "shortest",
    "targetPitch": -1.19,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 1.38,
    "path": "shortest",
    "targetPitch": -8.48,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8483102E_EC9A_7AF9_41E9_A451AA41DDCA",
 "class": "PanoramaCamera"
},
{
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": "#000000",
 "children": [
  {
   "label": "Planta Baja - Calle Punto 1",
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "MenuItem"
  },
  {
   "label": "Planta Baja - Recepción",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "MenuItem"
  },
  {
   "label": "Planta Baja - Dirección",
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "MenuItem"
  },
  {
   "label": "Planta Baja - Comedor - Acceso",
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "MenuItem"
  },
  {
   "label": "Planta Baja - Comedor - Sin Sillas",
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "MenuItem"
  },
  {
   "label": "Planta Baja - Jardín",
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "MenuItem"
  },
  {
   "label": "Planta Baja - Acceso a Cancha",
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "MenuItem"
  },
  {
   "label": "Planta Baja - Cancha - Acceso a Laboratorio",
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "MenuItem"
  },
  {
   "label": "Planta Baja - Laboratorio de Simulación - Punto 1",
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "class": "MenuItem"
  },
  {
   "label": "Planta Baja - Laboratorio de Simulación Punto 2",
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "class": "MenuItem"
  },
  {
   "label": "Planta Baja - Laboratorio de Simulación - Punto 3",
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "class": "MenuItem"
  },
  {
   "label": "Planta Baja - Cancha 2",
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "class": "MenuItem"
  },
  {
   "label": "Planta Baja - Cancha Centro",
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "class": "MenuItem"
  },
  {
   "label": "Planta Baja - Acceso - Preescolar",
   "click": "this.mainPlayList.set('selectedIndex', 13)",
   "class": "MenuItem"
  },
  {
   "label": "Planta Baja - Aula Preescolar",
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "class": "MenuItem"
  },
  {
   "label": "Planta Baja - Pasillo Aulas Esquina",
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "class": "MenuItem"
  },
  {
   "label": "Planta Baja - Acceso - 1er Grado",
   "click": "this.mainPlayList.set('selectedIndex', 16)",
   "class": "MenuItem"
  },
  {
   "label": "Planta Baja - 1er Grado",
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "class": "MenuItem"
  },
  {
   "label": "1er Piso - Acceso a 5to Grado y Aula 11",
   "click": "this.mainPlayList.set('selectedIndex', 18)",
   "class": "MenuItem"
  },
  {
   "label": "1er Piso - 6to Grado",
   "click": "this.mainPlayList.set('selectedIndex', 19)",
   "class": "MenuItem"
  },
  {
   "label": "1er Piso - 5to Grado",
   "click": "this.mainPlayList.set('selectedIndex', 20)",
   "class": "MenuItem"
  },
  {
   "label": "1er Piso - Acceso a Aula 9",
   "click": "this.mainPlayList.set('selectedIndex', 21)",
   "class": "MenuItem"
  },
  {
   "label": "1er Piso - Acceso a Aula 6",
   "click": "this.mainPlayList.set('selectedIndex', 22)",
   "class": "MenuItem"
  },
  {
   "label": "1er Piso - Aula 6",
   "click": "this.mainPlayList.set('selectedIndex', 23)",
   "class": "MenuItem"
  },
  {
   "label": "1er Piso - Acceso a Laboratorio de Informática",
   "click": "this.mainPlayList.set('selectedIndex', 24)",
   "class": "MenuItem"
  },
  {
   "label": "1er Piso - Laboratorio de Informática",
   "click": "this.mainPlayList.set('selectedIndex', 25)",
   "class": "MenuItem"
  },
  {
   "label": "2do Piso - Acceso a Biblioteca",
   "click": "this.mainPlayList.set('selectedIndex', 26)",
   "class": "MenuItem"
  },
  {
   "label": "2do Piso - Biblioteca",
   "click": "this.mainPlayList.set('selectedIndex', 27)",
   "class": "MenuItem"
  },
  {
   "label": "2do Piso - Biblioteca - Segundo Nivel",
   "click": "this.mainPlayList.set('selectedIndex', 28)",
   "class": "MenuItem"
  },
  {
   "label": "2do Piso - Auditorio Entrada",
   "click": "this.mainPlayList.set('selectedIndex', 29)",
   "class": "MenuItem"
  },
  {
   "label": "2do Piso - Auditorio Punto 1",
   "click": "this.mainPlayList.set('selectedIndex', 30)",
   "class": "MenuItem"
  },
  {
   "label": "2do Piso - Auditorio Punto 2",
   "click": "this.mainPlayList.set('selectedIndex', 31)",
   "class": "MenuItem"
  },
  {
   "label": "2do Piso - Pasillo 1",
   "click": "this.mainPlayList.set('selectedIndex', 32)",
   "class": "MenuItem"
  }
 ],
 "label": "Media",
 "id": "Menu_82C12CA3_EC9A_0BEF_41EC_167990F4DC6E",
 "opacity": 0.4,
 "fontFamily": "Arial",
 "selectedFontColor": "#FFFFFF",
 "rollOverOpacity": 0.8,
 "class": "Menu",
 "selectedBackgroundColor": "#202020",
 "backgroundColor": "#404040",
 "rollOverFontColor": "#FFFFFF"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_EADCE602_E147_B8E5_41E0_A3348388DA41_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EADCE602_E147_B8E5_41E0_A3348388DA41_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EADCE602_E147_B8E5_41E0_A3348388DA41_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EADCE602_E147_B8E5_41E0_A3348388DA41_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EADCE602_E147_B8E5_41E0_A3348388DA41_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EADCE602_E147_B8E5_41E0_A3348388DA41_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EADCE602_E147_B8E5_41E0_A3348388DA41_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EADCE602_E147_B8E5_41E0_A3348388DA41_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EADCE602_E147_B8E5_41E0_A3348388DA41_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EADCE602_E147_B8E5_41E0_A3348388DA41_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EADCE602_E147_B8E5_41E0_A3348388DA41_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EADCE602_E147_B8E5_41E0_A3348388DA41_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EADCE602_E147_B8E5_41E0_A3348388DA41_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EADCE602_E147_B8E5_41E0_A3348388DA41_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EADCE602_E147_B8E5_41E0_A3348388DA41_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EADCE602_E147_B8E5_41E0_A3348388DA41_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EADCE602_E147_B8E5_41E0_A3348388DA41_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EADCE602_E147_B8E5_41E0_A3348388DA41_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EADCE602_E147_B8E5_41E0_A3348388DA41_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EADCE602_E147_B8E5_41E0_A3348388DA41_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EADCE602_E147_B8E5_41E0_A3348388DA41_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_EADCE602_E147_B8E5_41E0_A3348388DA41_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EADCE602_E147_B8E5_41E0_A3348388DA41_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EADCE602_E147_B8E5_41E0_A3348388DA41_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EADCE602_E147_B8E5_41E0_A3348388DA41_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Planta Baja - Laboratorio de Simulaci\u00f3n - Punto 3",
 "hfovMin": "120%",
 "id": "panorama_EADCE602_E147_B8E5_41E0_A3348388DA41",
 "overlays": [
  "this.overlay_F0C69BB7_E2EA_7D71_41D4_616740F03169",
  "this.overlay_F08EB27E_E2EA_2FF3_41EB_F700645B35E9",
  "this.panorama_EADCE602_E147_B8E5_41E0_A3348388DA41_tcap0",
  "this.overlay_DFA4D41F_E5A6_1AD7_4183_FA9FDE99F1F4",
  "this.popup_D9171239_E5BA_3EDB_4198_5B1739633D10"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 130.53,
   "class": "AdjacentPanorama",
   "backwardYaw": 91.49,
   "panorama": "this.panorama_EA80C6E4_E147_992C_41D3_588476BDC207",
   "distance": 1
  },
  {
   "yaw": 137.21,
   "class": "AdjacentPanorama",
   "backwardYaw": -175.86,
   "panorama": "this.panorama_EADC0494_E147_99EC_41E6_6E85636B3ABA",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_82C12CA3_EC9A_0BEF_41EC_167990F4DC6E",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_EADCE602_E147_B8E5_41E0_A3348388DA41_t.jpg",
 "hfovMax": 120
},
{
 "initialPosition": {
  "yaw": -130.98,
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 78.63,
    "path": "shortest",
    "targetPitch": 1.26,
    "pitchSpeed": 15.48,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 30.11
   },
   {
    "targetYaw": -153.62,
    "path": "shortest",
    "targetPitch": 3.33,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 12.44,
    "path": "shortest",
    "targetPitch": 16.14,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 18.72,
    "path": "shortest",
    "targetPitch": -7.22,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_82E46A23_EC9A_0EEF_41D6_711578287C5B",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_ED4F5164_E141_7B2C_41CB_BAE8006AA571_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_ED4F5164_E141_7B2C_41CB_BAE8006AA571_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_ED4F5164_E141_7B2C_41CB_BAE8006AA571_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ED4F5164_E141_7B2C_41CB_BAE8006AA571_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_ED4F5164_E141_7B2C_41CB_BAE8006AA571_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_ED4F5164_E141_7B2C_41CB_BAE8006AA571_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_ED4F5164_E141_7B2C_41CB_BAE8006AA571_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ED4F5164_E141_7B2C_41CB_BAE8006AA571_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_ED4F5164_E141_7B2C_41CB_BAE8006AA571_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_ED4F5164_E141_7B2C_41CB_BAE8006AA571_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_ED4F5164_E141_7B2C_41CB_BAE8006AA571_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ED4F5164_E141_7B2C_41CB_BAE8006AA571_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_ED4F5164_E141_7B2C_41CB_BAE8006AA571_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_ED4F5164_E141_7B2C_41CB_BAE8006AA571_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_ED4F5164_E141_7B2C_41CB_BAE8006AA571_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ED4F5164_E141_7B2C_41CB_BAE8006AA571_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_ED4F5164_E141_7B2C_41CB_BAE8006AA571_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_ED4F5164_E141_7B2C_41CB_BAE8006AA571_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_ED4F5164_E141_7B2C_41CB_BAE8006AA571_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_ED4F5164_E141_7B2C_41CB_BAE8006AA571_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ED4F5164_E141_7B2C_41CB_BAE8006AA571_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_ED4F5164_E141_7B2C_41CB_BAE8006AA571_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_ED4F5164_E141_7B2C_41CB_BAE8006AA571_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_ED4F5164_E141_7B2C_41CB_BAE8006AA571_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ED4F5164_E141_7B2C_41CB_BAE8006AA571_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Planta Baja - 1er Grado",
 "hfovMin": "120%",
 "id": "panorama_ED4F5164_E141_7B2C_41CB_BAE8006AA571",
 "overlays": [
  "this.overlay_FAA5CA1D_E2DA_5F36_41D6_C32D383C4274",
  "this.panorama_ED4F5164_E141_7B2C_41CB_BAE8006AA571_tcap0",
  "this.overlay_CA9D64AD_E4AE_3BF8_4193_F0D6F9F6B292"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 179.87,
   "class": "AdjacentPanorama",
   "backwardYaw": -0.26,
   "panorama": "this.panorama_EAE2003C_E141_991C_41CF_920F278E9C7B",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_82C12CA3_EC9A_0BEF_41EC_167990F4DC6E",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_ED4F5164_E141_7B2C_41CB_BAE8006AA571_t.jpg",
 "hfovMax": 120
},
{
 "initialPosition": {
  "yaw": -25.1,
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -135.66,
    "path": "shortest",
    "targetPitch": 36.93,
    "pitchSpeed": 35.41,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 70.14
   },
   {
    "targetYaw": -106.14,
    "path": "shortest",
    "targetPitch": -8.73,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -2.89,
    "path": "shortest",
    "targetPitch": -9.99,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 61.67,
    "path": "shortest",
    "targetPitch": -1.19,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 122.72,
    "path": "shortest",
    "targetPitch": 0.06,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 174.47,
    "path": "shortest",
    "targetPitch": -4.46,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 51.63,
    "path": "shortest",
    "targetPitch": -2.45,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_82C41A8D_EC9A_0FBB_41E7_18A0C8E5277B",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 17.92,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 4.02,
    "path": "shortest",
    "targetPitch": 12.06,
    "pitchSpeed": 6.98,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 13.02
   },
   {
    "targetYaw": 53.38,
    "path": "shortest",
    "targetPitch": 13.38,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 88.05,
    "path": "shortest",
    "targetPitch": -14.01,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 158.14,
    "path": "shortest",
    "targetPitch": -12,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -156.64,
    "path": "shortest",
    "targetPitch": -9.99,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -42.83,
    "path": "shortest",
    "targetPitch": -1.44,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_849B108A_EC9A_7BB9_41EA_EDF98B9F0001",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 115.38,
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -87.42,
    "path": "shortest",
    "targetPitch": 1.67,
    "pitchSpeed": 108,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 216
   },
   {
    "targetYaw": -104.88,
    "path": "shortest",
    "targetPitch": 20.66,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -164.68,
    "path": "shortest",
    "targetPitch": 0.31,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 138.05,
    "path": "shortest",
    "targetPitch": 2.58,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 75.74,
    "path": "shortest",
    "targetPitch": 8.35,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 75.49,
    "path": "shortest",
    "targetPitch": -12.75,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_8331FF12_EC9A_06A9_41CB_3C7EB43FDCD1",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 6.03,
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "pitch": 2.56
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -23.74,
    "path": "shortest",
    "targetPitch": -3.2,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -118.95,
    "path": "shortest",
    "targetPitch": -22.3,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -54.89,
    "path": "shortest",
    "targetPitch": -16.02,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 15.95,
    "path": "shortest",
    "targetPitch": -14.26,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 109.41,
    "path": "shortest",
    "targetPitch": 9.61,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "panorama_E8B9812A_E364_302D_41E2_DFDB9823113D_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 1.5,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 4.02,
    "path": "shortest",
    "targetPitch": 12.06,
    "pitchSpeed": 5,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 9.04
   },
   {
    "targetYaw": 53.38,
    "path": "shortest",
    "targetPitch": 13.38,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 88.05,
    "path": "shortest",
    "targetPitch": -14.01,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 158.14,
    "path": "shortest",
    "targetPitch": -12,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -156.64,
    "path": "shortest",
    "targetPitch": -9.99,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -42.83,
    "path": "shortest",
    "targetPitch": -1.44,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_84C0BE48_EC9A_06B9_41E3_F5EADE210A58",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -139.18,
  "class": "PanoramaCameraPosition",
  "pitch": 27.63
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -145.58,
    "path": "shortest",
    "targetPitch": -10.49,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -70.97,
    "path": "shortest",
    "targetPitch": -13.5,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -8.42,
    "path": "shortest",
    "targetPitch": -4.21,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 116.44,
    "path": "shortest",
    "targetPitch": -6.72,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 174.98,
    "path": "shortest",
    "targetPitch": -2.2,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F5213C55_E4A4_D066_416D_85F4BFC80191_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -7.6,
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -135.66,
    "path": "shortest",
    "targetPitch": 36.93,
    "pitchSpeed": 40.34,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 80.05
   },
   {
    "targetYaw": -106.14,
    "path": "shortest",
    "targetPitch": -8.73,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -2.89,
    "path": "shortest",
    "targetPitch": -9.99,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 61.67,
    "path": "shortest",
    "targetPitch": -1.19,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 122.72,
    "path": "shortest",
    "targetPitch": 0.06,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 174.47,
    "path": "shortest",
    "targetPitch": -4.46,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 51.63,
    "path": "shortest",
    "targetPitch": -2.45,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_83FBFCBB_EC9A_0BDF_41E6_C12D60D5BEBD",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 19.97,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -2.01,
    "path": "shortest",
    "targetPitch": -1.51,
    "pitchSpeed": 4.47,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "targetYaw": 99.86,
    "path": "shortest",
    "targetPitch": -7.47,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8615663C_EC9A_06D9_41EB_AFA32FF43E74",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 178.74,
  "class": "PanoramaCameraPosition",
  "pitch": 13.31
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -33.04,
    "path": "shortest",
    "targetPitch": -16.27,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 31.78,
    "path": "shortest",
    "targetPitch": -14.51,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 1.63,
    "path": "shortest",
    "targetPitch": 4.84,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_E9C5C3B9_E46A_3DDB_41B2_81F19F4D0621_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 14.51,
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 78.63,
    "path": "shortest",
    "targetPitch": 1.26,
    "pitchSpeed": 5.43,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 9.9
   },
   {
    "targetYaw": -153.62,
    "path": "shortest",
    "targetPitch": 3.33,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 12.44,
    "path": "shortest",
    "targetPitch": 16.14,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 18.72,
    "path": "shortest",
    "targetPitch": -7.22,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_825DABF1_EC9A_0D6B_41B0_0B8352968514",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E8C90C1B_E365_F7E2_41D7_18E9C82943A5_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8C90C1B_E365_F7E2_41D7_18E9C82943A5_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8C90C1B_E365_F7E2_41D7_18E9C82943A5_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8C90C1B_E365_F7E2_41D7_18E9C82943A5_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E8C90C1B_E365_F7E2_41D7_18E9C82943A5_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8C90C1B_E365_F7E2_41D7_18E9C82943A5_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8C90C1B_E365_F7E2_41D7_18E9C82943A5_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8C90C1B_E365_F7E2_41D7_18E9C82943A5_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E8C90C1B_E365_F7E2_41D7_18E9C82943A5_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8C90C1B_E365_F7E2_41D7_18E9C82943A5_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8C90C1B_E365_F7E2_41D7_18E9C82943A5_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8C90C1B_E365_F7E2_41D7_18E9C82943A5_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E8C90C1B_E365_F7E2_41D7_18E9C82943A5_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8C90C1B_E365_F7E2_41D7_18E9C82943A5_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8C90C1B_E365_F7E2_41D7_18E9C82943A5_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8C90C1B_E365_F7E2_41D7_18E9C82943A5_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E8C90C1B_E365_F7E2_41D7_18E9C82943A5_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E8C90C1B_E365_F7E2_41D7_18E9C82943A5_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8C90C1B_E365_F7E2_41D7_18E9C82943A5_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8C90C1B_E365_F7E2_41D7_18E9C82943A5_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8C90C1B_E365_F7E2_41D7_18E9C82943A5_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E8C90C1B_E365_F7E2_41D7_18E9C82943A5_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8C90C1B_E365_F7E2_41D7_18E9C82943A5_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8C90C1B_E365_F7E2_41D7_18E9C82943A5_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8C90C1B_E365_F7E2_41D7_18E9C82943A5_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Planta Baja - Pasillo Aulas Esquina",
 "hfovMin": "120%",
 "id": "panorama_E8C90C1B_E365_F7E2_41D7_18E9C82943A5",
 "overlays": [
  "this.overlay_E8D6EC1B_E365_F7E2_41C7_CBEBC6ABF3BD",
  "this.overlay_E8D6FC1B_E365_F7E2_41E7_E692F109D0C1",
  "this.overlay_E8D6CC1B_E365_F7E2_41E2_AD6EDB6AD847",
  "this.panorama_E8C90C1B_E365_F7E2_41D7_18E9C82943A5_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -38.58,
   "class": "AdjacentPanorama",
   "backwardYaw": 89.69,
   "panorama": "this.panorama_E8F154F9_E364_F02F_41E0_7ADE7EBBD519",
   "distance": 1
  },
  {
   "yaw": -54.43,
   "class": "AdjacentPanorama",
   "backwardYaw": -65.37,
   "panorama": "this.panorama_E8FADA72_E364_F022_41C2_C29F7A235EAF",
   "distance": 1
  },
  {
   "yaw": -125.4,
   "class": "AdjacentPanorama",
   "backwardYaw": -93.11,
   "panorama": "this.panorama_EAE2003C_E141_991C_41CF_920F278E9C7B",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_82C12CA3_EC9A_0BEF_41EC_167990F4DC6E",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E8C90C1B_E365_F7E2_41D7_18E9C82943A5_t.jpg",
 "hfovMax": 120
},
{
 "initialPosition": {
  "yaw": 19.97,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -2.01,
    "path": "shortest",
    "targetPitch": -1.51,
    "pitchSpeed": 4.47,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "targetYaw": 99.86,
    "path": "shortest",
    "targetPitch": -7.47,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_87EB7655_EC9A_06AB_41B1_D219A1ADD9AA",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -10.39,
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 78.63,
    "path": "shortest",
    "targetPitch": 1.26,
    "pitchSpeed": 7.15,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 13.36
   },
   {
    "targetYaw": -153.62,
    "path": "shortest",
    "targetPitch": 3.33,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 12.44,
    "path": "shortest",
    "targetPitch": 16.14,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 18.72,
    "path": "shortest",
    "targetPitch": -7.22,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_83C8ECD8_EC9A_0B59_4184_CA8990318B0A",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 54.6,
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 0,
    "path": "shortest",
    "targetPitch": 0.91,
    "pitchSpeed": 16.75,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 32.65
   },
   {
    "targetYaw": -55.65,
    "path": "shortest",
    "targetPitch": 1.57,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -126.49,
    "path": "shortest",
    "targetPitch": 0.31,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 107.9,
    "path": "shortest",
    "targetPitch": -4.71,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 52.38,
    "path": "shortest",
    "targetPitch": -1.44,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_82BB5B1D_EC9A_0EDB_41DA_624A34DC0AC8",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_EADDC172_E141_BB25_41D8_E09A626FB8FD_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EADDC172_E141_BB25_41D8_E09A626FB8FD_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EADDC172_E141_BB25_41D8_E09A626FB8FD_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EADDC172_E141_BB25_41D8_E09A626FB8FD_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EADDC172_E141_BB25_41D8_E09A626FB8FD_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EADDC172_E141_BB25_41D8_E09A626FB8FD_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EADDC172_E141_BB25_41D8_E09A626FB8FD_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EADDC172_E141_BB25_41D8_E09A626FB8FD_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EADDC172_E141_BB25_41D8_E09A626FB8FD_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EADDC172_E141_BB25_41D8_E09A626FB8FD_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EADDC172_E141_BB25_41D8_E09A626FB8FD_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EADDC172_E141_BB25_41D8_E09A626FB8FD_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EADDC172_E141_BB25_41D8_E09A626FB8FD_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EADDC172_E141_BB25_41D8_E09A626FB8FD_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EADDC172_E141_BB25_41D8_E09A626FB8FD_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EADDC172_E141_BB25_41D8_E09A626FB8FD_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EADDC172_E141_BB25_41D8_E09A626FB8FD_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EADDC172_E141_BB25_41D8_E09A626FB8FD_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EADDC172_E141_BB25_41D8_E09A626FB8FD_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EADDC172_E141_BB25_41D8_E09A626FB8FD_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EADDC172_E141_BB25_41D8_E09A626FB8FD_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_EADDC172_E141_BB25_41D8_E09A626FB8FD_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EADDC172_E141_BB25_41D8_E09A626FB8FD_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EADDC172_E141_BB25_41D8_E09A626FB8FD_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EADDC172_E141_BB25_41D8_E09A626FB8FD_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Planta Baja - Calle Punto 1",
 "hfovMin": "120%",
 "id": "panorama_EADDC172_E141_BB25_41D8_E09A626FB8FD",
 "overlays": [
  "this.overlay_F142A306_E141_78ED_41D3_02B8BE49A67D",
  "this.overlay_F98C50C2_E36A_2B12_41A6_DF205040F8CF",
  "this.panorama_EADDC172_E141_BB25_41D8_E09A626FB8FD_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 31.82,
   "class": "AdjacentPanorama",
   "backwardYaw": -126.54,
   "panorama": "this.panorama_EADC6D16_E147_A8ED_41E7_7A006A29B117",
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_FBD14299_E35A_2F31_41BC_935707658DC3"
 ],
 "cardboardMenu": "this.Menu_82C12CA3_EC9A_0BEF_41EC_167990F4DC6E",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_EADDC172_E141_BB25_41D8_E09A626FB8FD_t.jpg",
 "hfovMax": 120,
 "pitch": 0
},
{
 "viewerArea": "this.MapViewer",
 "id": "MapViewerMapPlayer",
 "class": "MapPlayer",
 "movementMode": "constrained"
},
{
 "initialPosition": {
  "yaw": -2.01,
  "class": "PanoramaCameraPosition",
  "pitch": -1.51
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 99.86,
    "path": "shortest",
    "targetPitch": -7.47,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_E9C4F462_E46B_FB69_41EA_EBF76426CC46_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_EAF0B794_E147_67ED_41D1_DF56AF0E8AFE_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EAF0B794_E147_67ED_41D1_DF56AF0E8AFE_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EAF0B794_E147_67ED_41D1_DF56AF0E8AFE_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EAF0B794_E147_67ED_41D1_DF56AF0E8AFE_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EAF0B794_E147_67ED_41D1_DF56AF0E8AFE_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EAF0B794_E147_67ED_41D1_DF56AF0E8AFE_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EAF0B794_E147_67ED_41D1_DF56AF0E8AFE_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EAF0B794_E147_67ED_41D1_DF56AF0E8AFE_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EAF0B794_E147_67ED_41D1_DF56AF0E8AFE_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EAF0B794_E147_67ED_41D1_DF56AF0E8AFE_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EAF0B794_E147_67ED_41D1_DF56AF0E8AFE_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EAF0B794_E147_67ED_41D1_DF56AF0E8AFE_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EAF0B794_E147_67ED_41D1_DF56AF0E8AFE_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EAF0B794_E147_67ED_41D1_DF56AF0E8AFE_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EAF0B794_E147_67ED_41D1_DF56AF0E8AFE_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EAF0B794_E147_67ED_41D1_DF56AF0E8AFE_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EAF0B794_E147_67ED_41D1_DF56AF0E8AFE_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EAF0B794_E147_67ED_41D1_DF56AF0E8AFE_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EAF0B794_E147_67ED_41D1_DF56AF0E8AFE_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EAF0B794_E147_67ED_41D1_DF56AF0E8AFE_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EAF0B794_E147_67ED_41D1_DF56AF0E8AFE_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_EAF0B794_E147_67ED_41D1_DF56AF0E8AFE_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EAF0B794_E147_67ED_41D1_DF56AF0E8AFE_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EAF0B794_E147_67ED_41D1_DF56AF0E8AFE_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EAF0B794_E147_67ED_41D1_DF56AF0E8AFE_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Planta Baja - Jard\u00edn",
 "hfovMin": "120%",
 "id": "panorama_EAF0B794_E147_67ED_41D1_DF56AF0E8AFE",
 "overlays": [
  "this.overlay_F762CDC9_E141_6B64_41DA_D4C236D939A1",
  "this.overlay_F5B7C88C_E143_69FC_41E7_B418B837F2CC",
  "this.overlay_F754FC23_E140_A924_41E5_6BEFA8B01800",
  "this.overlay_F4D5176E_E2EA_3513_41E1_80EAD81B091D",
  "this.overlay_F98D2F45_E36A_F511_41E4_FAACA5724618",
  "this.overlay_F92C6018_E4BE_3AD8_41E7_557732DFA184",
  "this.overlay_FBFA22A3_E4A6_1FEF_41D5_32EA723641A7",
  "this.overlay_FBB6BF67_E4A6_0577_41EB_2FB84AC57313",
  "this.panorama_EAF0B794_E147_67ED_41D1_DF56AF0E8AFE_tcap0",
  "this.overlay_DF7923A1_E5BA_7DEB_41BB_BE70D90D70B8",
  "this.popup_DFA3DD2D_E5BA_0AFB_41CE_0161BF92F0DD",
  "this.overlay_DE997B85_E5BE_0DA8_41D3_1AA52A699987",
  "this.popup_DFBE5525_E5BE_1AEB_41D4_C8D38EFF8A1C",
  "this.overlay_DFBFA835_E5BE_0AEB_41E7_E60DE88D189C",
  "this.popup_DE814D19_E5BE_0AD8_41E8_315B83D193D4",
  "this.overlay_DFC1D5D6_E5BE_05A9_41DB_DBFD87193296",
  "this.popup_DEA413A8_E5BE_3DF9_41E8_D053101E9707",
  "this.overlay_DBF286E9_E5EA_0778_41C2_FB96CD1A9D54",
  "this.overlay_A584DB2A_E5E6_0EF9_41E4_DF2C44C30FA5",
  "this.overlay_B81E4944_EC9A_0AA9_41DC_00FF1DE0CF23",
  "this.overlay_BA2C4D66_EC9A_0569_41E0_14CAF5C17E17",
  "this.overlay_B81DAAE7_EC9E_0F77_41E8_5C8E3E8CBBAE",
  "this.overlay_B8277D34_EC9E_0AE8_41E2_444668D7BE4C",
  "this.overlay_BCF0E86B_EC9A_0B7F_41CF_D4CB24277034",
  "this.overlay_B85C4151_EC9B_FAAB_41E7_13375ACDF592",
  "this.overlay_B852EAEF_EC9A_0F78_41DC_2614158EB6A1"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 172.4,
   "class": "AdjacentPanorama",
   "backwardYaw": -45.21,
   "panorama": "this.panorama_E8F154F9_E364_F02F_41E0_7ADE7EBBD519",
   "distance": 1
  },
  {
   "yaw": 172.23,
   "class": "AdjacentPanorama",
   "backwardYaw": -45.21,
   "panorama": "this.panorama_E8F154F9_E364_F02F_41E0_7ADE7EBBD519",
   "distance": 1
  },
  {
   "yaw": 154.9,
   "class": "AdjacentPanorama",
   "backwardYaw": 153.32,
   "panorama": "this.panorama_E8FADA72_E364_F022_41C2_C29F7A235EAF",
   "distance": 1
  },
  {
   "yaw": 154.87,
   "class": "AdjacentPanorama",
   "backwardYaw": 153.32,
   "panorama": "this.panorama_E8FADA72_E364_F022_41C2_C29F7A235EAF",
   "distance": 1
  },
  {
   "yaw": 53.96,
   "class": "AdjacentPanorama",
   "backwardYaw": -165.49,
   "panorama": "this.panorama_EADDA963_E141_EB2B_41DB_CD069D3B479A",
   "distance": 1
  },
  {
   "yaw": 139.86,
   "class": "AdjacentPanorama",
   "backwardYaw": -169.9,
   "panorama": "this.panorama_F521389D_E4A4_30E7_419D_206A40017412",
   "distance": 1
  },
  {
   "yaw": 139.82,
   "class": "AdjacentPanorama",
   "backwardYaw": -169.9,
   "panorama": "this.panorama_F521389D_E4A4_30E7_419D_206A40017412",
   "distance": 1
  },
  {
   "yaw": 134.01,
   "class": "AdjacentPanorama",
   "backwardYaw": -66.75,
   "panorama": "this.panorama_EA8920BB_E140_B91B_41E9_D14906604A6B",
   "distance": 1
  },
  {
   "yaw": 172.4,
   "class": "AdjacentPanorama",
   "backwardYaw": -66.75,
   "panorama": "this.panorama_EA8920BB_E140_B91B_41E9_D14906604A6B",
   "distance": 1
  },
  {
   "yaw": 133.9,
   "class": "AdjacentPanorama",
   "backwardYaw": -66.75,
   "panorama": "this.panorama_EA8920BB_E140_B91B_41E9_D14906604A6B",
   "distance": 1
  },
  {
   "panorama": "this.panorama_F52171BD_E4A4_5027_41E5_9EE998F7E297",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F52171BD_E4A4_5027_41E5_9EE998F7E297",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F5217E84_E4A4_50E6_41B1_B7D2D7D82D72",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F5217E84_E4A4_50E6_41B1_B7D2D7D82D72",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F5217E84_E4A4_50E6_41B1_B7D2D7D82D72",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_FBC33FEF_E35B_D511_41E8_6E4AFADBB036"
 ],
 "cardboardMenu": "this.Menu_82C12CA3_EC9A_0BEF_41EC_167990F4DC6E",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_EAF0B794_E147_67ED_41D1_DF56AF0E8AFE_t.jpg",
 "hfovMax": 120,
 "pitch": 0
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": 54.06,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_DEC28F9F_E5A6_05D7_41DA_8B9EF6C61FA8",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_DEC28F9F_E5A6_05D7_41DA_8B9EF6C61FA8_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 682
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 4.67,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "pitch": 3.85
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": 5.63,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_DEA413A8_E5BE_3DF9_41E8_D053101E9707",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_DEA413A8_E5BE_3DF9_41E8_D053101E9707_0_1.jpg",
    "width": 682,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 2.89,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "pitch": -6.51
},
{
 "autoplay": true,
 "loop": true,
 "class": "DirectionalPanoramaAudio",
 "audio": "this.audioresource_FBC32FEF_E35B_D511_41E0_D3CB3105CCD6",
 "pitch": 0.91,
 "maximumAngle": 360,
 "id": "audio_FA062943_E35A_FD11_41CB_61E27AAD28F8",
 "yaw": 0,
 "data": {
  "label": "Birds stereo 01"
 }
},
{
 "initialPosition": {
  "yaw": -104.38,
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -87.42,
    "path": "shortest",
    "targetPitch": 1.67,
    "pitchSpeed": 11.6,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 22.29
   },
   {
    "targetYaw": -104.88,
    "path": "shortest",
    "targetPitch": 20.66,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -164.68,
    "path": "shortest",
    "targetPitch": 0.31,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 138.05,
    "path": "shortest",
    "targetPitch": 2.58,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 75.74,
    "path": "shortest",
    "targetPitch": 8.35,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 75.49,
    "path": "shortest",
    "targetPitch": -12.75,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_8546C3D0_EC9A_7DA8_41E4_FE8BE4C3E4C6",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 24.1,
  "class": "PanoramaCameraPosition",
  "pitch": -2.76
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 72.8,
    "path": "shortest",
    "targetPitch": -33.79,
    "pitchSpeed": 16.23,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -169.21,
    "path": "shortest",
    "targetPitch": -32.79,
    "pitchSpeed": 16.23,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -40.92,
    "path": "shortest",
    "targetPitch": -10.95,
    "pitchSpeed": 16.23,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_E9C2B1AC_E46A_1DF9_41D2_1E8C48B2DC22_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 86.89,
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 92.7,
    "path": "shortest",
    "targetPitch": -5.78,
    "pitchSpeed": 1.71,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 2.43
   },
   {
    "targetYaw": -91.57,
    "path": "shortest",
    "targetPitch": -0.94,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 1.63,
    "path": "shortest",
    "targetPitch": -5.97,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_82268D76_EC9A_0569_41CF_B535A77ED462",
 "class": "PanoramaCamera"
},
{
 "headerBackgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_CAFB68A7_E4AA_0BF7_41AB_3F84FB32DBDF",
 "backgroundOpacity": 1,
 "titleFontColor": "#000000",
 "width": "90%",
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Window",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "titlePaddingRight": 5,
 "titlePaddingTop": 5,
 "footerBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "headerBorderSize": 0,
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "backgroundColor": [],
 "verticalAlign": "middle",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
 "height": "90%",
 "bodyBackgroundOpacity": 1,
 "borderSize": 0,
 "titleFontStyle": "normal",
 "headerPaddingRight": 0,
 "title": "",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "headerPaddingLeft": 0,
 "bodyPaddingLeft": 0,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "headerBackgroundOpacity": 1,
 "scrollBarColor": "#000000",
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPaddingRight": 2,
 "bodyBorderColor": "#000000",
 "shadowBlurRadius": 6,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "footerBorderColor": "#000000",
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "closeButtonPaddingLeft": 2,
 "bodyPaddingTop": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "layout": "vertical",
 "closeButtonBorderRadius": 11,
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "children": [
  "this.htmlText_CAFED8A6_E4AA_0BE9_41E8_613CAADB976E",
  {
   "backgroundOpacity": 1,
   "width": "100%",
   "class": "WebFrame",
   "borderRadius": 0,
   "insetBorder": false,
   "paddingLeft": 0,
   "paddingRight": 0,
   "url": "https://www.educacionadventista.com/ensenanza/nivel-secundario/",
   "backgroundColorRatios": [],
   "propagateClick": false,
   "minHeight": 0,
   "backgroundColor": [],
   "minWidth": 0,
   "height": "89%",
   "paddingTop": 0,
   "backgroundColorDirection": "vertical",
   "paddingBottom": 0,
   "borderSize": 0,
   "scrollEnabled": true,
   "data": {
    "name": "WebFrame77057"
   },
   "shadow": false
  }
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "shadowHorizontalLength": 3,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBorderSize": 0,
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 0,
 "titleFontSize": "1.29vmin",
 "backgroundColorRatios": [],
 "closeButtonBorderSize": 0,
 "closeButtonPaddingBottom": 2,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 0,
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "footerBackgroundOpacity": 1,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 20,
 "veilOpacity": 0.4,
 "shadowVerticalLength": 0,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 0,
 "paddingTop": 0,
 "closeButtonBackgroundOpacity": 1,
 "bodyPaddingBottom": 0,
 "titlePaddingLeft": 5,
 "closeButtonPaddingTop": 2,
 "closeButtonIconColor": "#000000",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "bodyPaddingRight": 0,
 "closeButtonBackgroundColor": [],
 "shadowSpread": 1,
 "data": {
  "name": "Window66936"
 },
 "titleFontFamily": "Arial",
 "bodyBorderSize": 0
},
{
 "initialPosition": {
  "yaw": -1.75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -126.87,
    "path": "shortest",
    "targetPitch": -15.66,
    "pitchSpeed": 54.38,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 108.26
   },
   {
    "targetYaw": -91.82,
    "path": "shortest",
    "targetPitch": -1.19,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 176.99,
    "path": "shortest",
    "targetPitch": -0.19,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 58.16,
    "path": "shortest",
    "targetPitch": -3.45,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_83DCFE2B_EC9A_06FF_41A6_FB9DFC667330",
 "class": "PanoramaCamera"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -73.98,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_D9285EF5_E59A_076B_41EB_851D422410FA",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_D9285EF5_E59A_076B_41EB_851D422410FA_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 682
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 2.64,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "pitch": 0.79
},
{
 "initialPosition": {
  "yaw": -0.01,
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 0,
    "path": "shortest",
    "targetPitch": 0,
    "pitchSpeed": 1,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 1
   },
   {
    "targetYaw": -94.08,
    "hfovSpeed": 33.25,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetHfov": 80,
    "targetPitch": -1.95,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -139.05,
    "hfovSpeed": 33.25,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetHfov": 100,
    "targetPitch": -13.75,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 115.44,
    "hfovSpeed": 33.25,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetHfov": 80,
    "targetPitch": -4.71,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 133.52,
    "hfovSpeed": 33.25,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetHfov": 100,
    "targetPitch": -8.48,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_84F8CF6C_EC9A_0579_41E0_80368E77530A",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -162.07,
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 78.63,
    "path": "shortest",
    "targetPitch": 1.26,
    "pitchSpeed": 17.63,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 34.42
   },
   {
    "targetYaw": -153.62,
    "path": "shortest",
    "targetPitch": 3.33,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 12.44,
    "path": "shortest",
    "targetPitch": 16.14,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 18.72,
    "path": "shortest",
    "targetPitch": -7.22,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_84E03F4D_EC9A_06BB_41E7_EE12A194F70C",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 98.6,
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -154.5,
    "path": "shortest",
    "targetPitch": 1.92,
    "pitchSpeed": 59.25,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 118.05
   },
   {
    "targetYaw": -84.79,
    "path": "shortest",
    "targetPitch": 0.06,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 157.89,
    "path": "shortest",
    "targetPitch": -1.95,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 33.79,
    "path": "shortest",
    "targetPitch": -5.46,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_98BC2781_EC9A_05AB_41E1_A88DF1570E58",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 92.95,
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 0,
    "path": "shortest",
    "targetPitch": 0.91,
    "pitchSpeed": 28.95,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 57.15
   },
   {
    "targetYaw": 53.38,
    "path": "shortest",
    "targetPitch": 0.57,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 98.86,
    "path": "shortest",
    "targetPitch": -0.44,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -143.82,
    "path": "shortest",
    "targetPitch": 3.58,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -99.61,
    "hfovSpeed": 33.25,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetHfov": 80,
    "targetPitch": 3.58,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -50.12,
    "path": "shortest",
    "targetPitch": -3.2,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -15.45,
    "path": "shortest",
    "targetPitch": 0.82,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_86FB44ED_EC9A_7B7B_41E4_B9180E4326C2",
 "class": "PanoramaCamera"
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_D021BC9C_F1CC_DED3_41DF_BD35CA2B988A",
   "player": "this.MapViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_82E13C91_EC9A_0BA8_419A_E30758592188",
 "class": "PlayList"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -65.63,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_DDA1676F_E5AA_0577_41C5_13DBF9C09495",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_DDA1676F_E5AA_0577_41C5_13DBF9C09495_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 682
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 2.68,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "pitch": -13.74
},
{
 "initialPosition": {
  "yaw": -26.68,
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -154.5,
    "path": "shortest",
    "targetPitch": 1.92,
    "pitchSpeed": 30.42,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 60.12
   },
   {
    "targetYaw": -84.79,
    "path": "shortest",
    "targetPitch": 0.06,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 157.89,
    "path": "shortest",
    "targetPitch": -1.95,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 33.79,
    "path": "shortest",
    "targetPitch": -5.46,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_827E9BAD_EC9A_0DFB_41D1_4FA6DC20F6C1",
 "class": "PanoramaCamera"
},
{
 "autoplay": true,
 "loop": true,
 "class": "DirectionalPanoramaAudio",
 "audio": "this.audioresource_FBC32FEF_E35B_D511_41E0_D3CB3105CCD6",
 "pitch": 0.91,
 "maximumAngle": 360,
 "id": "audio_FBD54ECF_E35A_3711_41CD_ECD058D2C76E",
 "yaw": 0,
 "data": {
  "label": "Birds stereo 01"
 }
},
{
 "displayOriginPosition": {
  "yaw": 30.63,
  "hfov": 165,
  "class": "RotationalCameraDisplayPosition",
  "stereographicFactor": 1,
  "pitch": -90
 },
 "initialPosition": {
  "yaw": 30.63,
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "pitch": 40.67
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -30.77,
    "path": "shortest",
    "targetPitch": 1.82,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 106.89,
    "path": "shortest",
    "targetPitch": -0.19,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 31.78,
    "path": "shortest",
    "targetPitch": -3.45,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "panorama_EADDC172_E141_BB25_41D8_E09A626FB8FD_camera",
 "class": "PanoramaCamera",
 "displayMovements": [
  {
   "duration": 700,
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "linear"
  },
  {
   "duration": 2000,
   "easing": "cubic_in_out",
   "targetHfov": 100,
   "targetStereographicFactor": 0,
   "class": "TargetRotationalCameraDisplayMovement",
   "targetPitch": 40.67
  }
 ]
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -179.34,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_DE85E94F_E5A6_0AB7_41D9_5C2FBD73C64E",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_DE85E94F_E5A6_0AB7_41D9_5C2FBD73C64E_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 704
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 3.11,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "pitch": 3.01
},
{
 "initialPosition": {
  "yaw": 7.59,
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 0,
    "path": "shortest",
    "targetPitch": 0,
    "pitchSpeed": 4.79,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 8.62
   },
   {
    "targetYaw": -31.78,
    "hfovSpeed": 33.25,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetHfov": 92,
    "targetPitch": -4.71,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -107.65,
    "hfovSpeed": 33.25,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetHfov": 100,
    "targetPitch": -6.22,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 75.24,
    "hfovSpeed": 33.25,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetHfov": 110,
    "targetPitch": -12.5,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -174.72,
    "hfovSpeed": 33.25,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetHfov": 110,
    "targetPitch": -9.23,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_98DEB763_EC9A_056F_41BF_BEE9AF3928CF",
 "class": "PanoramaCamera"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -42.14,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_D9A55FA7_E59E_05F7_41B7_CD44641293DF",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_D9A55FA7_E59E_05F7_41B7_CD44641293DF_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 682
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 2.63,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "pitch": 2.74
},
{
 "initialPosition": {
  "yaw": 134.79,
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 0,
    "path": "shortest",
    "targetPitch": 0.91,
    "pitchSpeed": 41.52,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 82.43
   },
   {
    "targetYaw": 53.38,
    "path": "shortest",
    "targetPitch": 0.57,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 98.86,
    "path": "shortest",
    "targetPitch": -0.44,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -143.82,
    "path": "shortest",
    "targetPitch": 3.58,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -99.61,
    "hfovSpeed": 33.25,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetHfov": 80,
    "targetPitch": 3.58,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -50.12,
    "path": "shortest",
    "targetPitch": -3.2,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -15.45,
    "path": "shortest",
    "targetPitch": 0.82,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_82756B91_EC9A_0DAB_41EB_AA92844B409F",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 84.66,
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "pitch": -1.51
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -109.66,
    "path": "shortest",
    "targetPitch": -9.48,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -25,
    "path": "shortest",
    "targetPitch": -14.76,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 84.28,
    "path": "shortest",
    "targetPitch": -24.81,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 175.98,
    "path": "shortest",
    "targetPitch": -1.7,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "panorama_ED4F5164_E141_7B2C_41CB_BAE8006AA571_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -121.21,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -126.87,
    "path": "shortest",
    "targetPitch": 28.14,
    "pitchSpeed": 7.59,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 14.25
   },
   {
    "targetYaw": -64.19,
    "path": "shortest",
    "targetPitch": -2.7,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 0.88,
    "path": "shortest",
    "targetPitch": -7.47,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 57.91,
    "path": "shortest",
    "targetPitch": -8.98,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8319FE11_EC9A_06AB_41E7_DDB99C28595E",
 "class": "PanoramaCamera"
},
{
 "levels": [
  {
   "url": "media/popup_DFBE5525_E5BE_1AEB_41D4_C8D38EFF8A1C_0_0.jpg",
   "width": 1920,
   "class": "ImageResourceLevel",
   "height": 1280
  },
  {
   "url": "media/popup_DFBE5525_E5BE_1AEB_41D4_C8D38EFF8A1C_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 682
  },
  {
   "url": "media/popup_DFBE5525_E5BE_1AEB_41D4_C8D38EFF8A1C_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 341
  }
 ],
 "id": "ImageResource_B52444C3_E5EA_1BAF_41E8_37759FFBF6F4",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "yaw": -3.39,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -126.87,
    "path": "shortest",
    "targetPitch": 28.14,
    "pitchSpeed": 30.1,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 59.47
   },
   {
    "targetYaw": -64.19,
    "path": "shortest",
    "targetPitch": -2.7,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 0.88,
    "path": "shortest",
    "targetPitch": -7.47,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 57.91,
    "path": "shortest",
    "targetPitch": -8.98,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8124796C_EC9A_0D79_41DD_A1A9E63E28F4",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E9C2B1AC_E46A_1DF9_41D2_1E8C48B2DC22_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E9C2B1AC_E46A_1DF9_41D2_1E8C48B2DC22_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E9C2B1AC_E46A_1DF9_41D2_1E8C48B2DC22_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E9C2B1AC_E46A_1DF9_41D2_1E8C48B2DC22_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E9C2B1AC_E46A_1DF9_41D2_1E8C48B2DC22_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E9C2B1AC_E46A_1DF9_41D2_1E8C48B2DC22_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E9C2B1AC_E46A_1DF9_41D2_1E8C48B2DC22_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E9C2B1AC_E46A_1DF9_41D2_1E8C48B2DC22_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E9C2B1AC_E46A_1DF9_41D2_1E8C48B2DC22_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E9C2B1AC_E46A_1DF9_41D2_1E8C48B2DC22_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E9C2B1AC_E46A_1DF9_41D2_1E8C48B2DC22_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E9C2B1AC_E46A_1DF9_41D2_1E8C48B2DC22_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E9C2B1AC_E46A_1DF9_41D2_1E8C48B2DC22_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E9C2B1AC_E46A_1DF9_41D2_1E8C48B2DC22_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E9C2B1AC_E46A_1DF9_41D2_1E8C48B2DC22_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E9C2B1AC_E46A_1DF9_41D2_1E8C48B2DC22_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E9C2B1AC_E46A_1DF9_41D2_1E8C48B2DC22_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E9C2B1AC_E46A_1DF9_41D2_1E8C48B2DC22_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E9C2B1AC_E46A_1DF9_41D2_1E8C48B2DC22_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E9C2B1AC_E46A_1DF9_41D2_1E8C48B2DC22_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E9C2B1AC_E46A_1DF9_41D2_1E8C48B2DC22_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E9C2B1AC_E46A_1DF9_41D2_1E8C48B2DC22_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E9C2B1AC_E46A_1DF9_41D2_1E8C48B2DC22_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E9C2B1AC_E46A_1DF9_41D2_1E8C48B2DC22_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E9C2B1AC_E46A_1DF9_41D2_1E8C48B2DC22_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "2do Piso - Biblioteca - Segundo Nivel",
 "id": "panorama_E9C2B1AC_E46A_1DF9_41D2_1E8C48B2DC22",
 "overlays": [
  "this.overlay_C67CA76E_E4E6_0579_41E6_DB075EC109FA",
  "this.panorama_E9C2B1AC_E46A_1DF9_41D2_1E8C48B2DC22_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -38.79,
   "class": "AdjacentPanorama",
   "backwardYaw": -0.5,
   "panorama": "this.panorama_E9C4108D_E46A_3BBB_41E4_FCB0E78FC031",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": -4.54,
 "cardboardMenu": "this.Menu_82C12CA3_EC9A_0BEF_41EC_167990F4DC6E",
 "class": "Panorama",
 "vfov": 170.91,
 "thumbnailUrl": "media/panorama_E9C2B1AC_E46A_1DF9_41D2_1E8C48B2DC22_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -44.36,
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -154.5,
    "path": "shortest",
    "targetPitch": 1.92,
    "pitchSpeed": 26.35,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 51.94
   },
   {
    "targetYaw": -84.79,
    "path": "shortest",
    "targetPitch": 0.06,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 157.89,
    "path": "shortest",
    "targetPitch": -1.95,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 33.79,
    "path": "shortest",
    "targetPitch": -5.46,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_83730D80_EC9A_05A9_41E8_403C031E0329",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E9C5C3B9_E46A_3DDB_41B2_81F19F4D0621_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E9C5C3B9_E46A_3DDB_41B2_81F19F4D0621_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E9C5C3B9_E46A_3DDB_41B2_81F19F4D0621_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E9C5C3B9_E46A_3DDB_41B2_81F19F4D0621_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E9C5C3B9_E46A_3DDB_41B2_81F19F4D0621_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E9C5C3B9_E46A_3DDB_41B2_81F19F4D0621_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E9C5C3B9_E46A_3DDB_41B2_81F19F4D0621_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E9C5C3B9_E46A_3DDB_41B2_81F19F4D0621_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E9C5C3B9_E46A_3DDB_41B2_81F19F4D0621_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E9C5C3B9_E46A_3DDB_41B2_81F19F4D0621_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E9C5C3B9_E46A_3DDB_41B2_81F19F4D0621_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E9C5C3B9_E46A_3DDB_41B2_81F19F4D0621_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E9C5C3B9_E46A_3DDB_41B2_81F19F4D0621_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E9C5C3B9_E46A_3DDB_41B2_81F19F4D0621_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E9C5C3B9_E46A_3DDB_41B2_81F19F4D0621_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E9C5C3B9_E46A_3DDB_41B2_81F19F4D0621_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E9C5C3B9_E46A_3DDB_41B2_81F19F4D0621_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E9C5C3B9_E46A_3DDB_41B2_81F19F4D0621_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E9C5C3B9_E46A_3DDB_41B2_81F19F4D0621_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E9C5C3B9_E46A_3DDB_41B2_81F19F4D0621_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E9C5C3B9_E46A_3DDB_41B2_81F19F4D0621_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E9C5C3B9_E46A_3DDB_41B2_81F19F4D0621_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E9C5C3B9_E46A_3DDB_41B2_81F19F4D0621_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E9C5C3B9_E46A_3DDB_41B2_81F19F4D0621_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E9C5C3B9_E46A_3DDB_41B2_81F19F4D0621_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "2do Piso - Auditorio Punto 1",
 "id": "panorama_E9C5C3B9_E46A_3DDB_41B2_81F19F4D0621",
 "overlays": [
  "this.overlay_C03C30C9_E4E9_FBBB_41DE_51D94687731B",
  "this.overlay_C0BDA347_E4EA_1EB7_41E1_72BF4988C79C",
  "this.panorama_E9C5C3B9_E46A_3DDB_41B2_81F19F4D0621_tcap0",
  "this.overlay_A5D976F0_E5E6_0769_41E7_D622A979402B"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -134.31,
   "class": "AdjacentPanorama",
   "backwardYaw": 48.37,
   "panorama": "this.panorama_E9C1D3F7_E46A_1D57_4197_60D58E87487C",
   "distance": 1
  },
  {
   "yaw": 1.09,
   "class": "AdjacentPanorama",
   "backwardYaw": -178.5,
   "panorama": "this.panorama_E9C5B2DE_E46A_1F59_41E8_91B64D35D990",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_82C12CA3_EC9A_0BEF_41EC_167990F4DC6E",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E9C5C3B9_E46A_3DDB_41B2_81F19F4D0621_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 29.43,
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -87.42,
    "path": "shortest",
    "targetPitch": 1.67,
    "pitchSpeed": 73.7,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 147.09
   },
   {
    "targetYaw": -104.88,
    "path": "shortest",
    "targetPitch": 20.66,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -164.68,
    "path": "shortest",
    "targetPitch": 0.31,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 138.05,
    "path": "shortest",
    "targetPitch": 2.58,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 75.74,
    "path": "shortest",
    "targetPitch": 8.35,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 75.49,
    "path": "shortest",
    "targetPitch": -12.75,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_841D720C_EC9A_7EB9_41EC_52CB9202ECD7",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -162.49,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -175.98,
    "path": "shortest",
    "targetPitch": -5.53,
    "pitchSpeed": 2.25,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 3.5
   },
   {
    "targetYaw": 11.68,
    "path": "shortest",
    "targetPitch": 1.82,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 12.18,
    "path": "shortest",
    "targetPitch": -9.23,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 41.58,
    "path": "shortest",
    "targetPitch": -6.47,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 93.08,
    "path": "shortest",
    "targetPitch": -5.21,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 113.93,
    "path": "shortest",
    "targetPitch": 17.65,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_82320D93_EC9A_05AF_41DF_F43CA15CAFF6",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_EADC6D16_E147_A8ED_41E7_7A006A29B117_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EADC6D16_E147_A8ED_41E7_7A006A29B117_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EADC6D16_E147_A8ED_41E7_7A006A29B117_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EADC6D16_E147_A8ED_41E7_7A006A29B117_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EADC6D16_E147_A8ED_41E7_7A006A29B117_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EADC6D16_E147_A8ED_41E7_7A006A29B117_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EADC6D16_E147_A8ED_41E7_7A006A29B117_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EADC6D16_E147_A8ED_41E7_7A006A29B117_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EADC6D16_E147_A8ED_41E7_7A006A29B117_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EADC6D16_E147_A8ED_41E7_7A006A29B117_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EADC6D16_E147_A8ED_41E7_7A006A29B117_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EADC6D16_E147_A8ED_41E7_7A006A29B117_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EADC6D16_E147_A8ED_41E7_7A006A29B117_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EADC6D16_E147_A8ED_41E7_7A006A29B117_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EADC6D16_E147_A8ED_41E7_7A006A29B117_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EADC6D16_E147_A8ED_41E7_7A006A29B117_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EADC6D16_E147_A8ED_41E7_7A006A29B117_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EADC6D16_E147_A8ED_41E7_7A006A29B117_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EADC6D16_E147_A8ED_41E7_7A006A29B117_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EADC6D16_E147_A8ED_41E7_7A006A29B117_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EADC6D16_E147_A8ED_41E7_7A006A29B117_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_EADC6D16_E147_A8ED_41E7_7A006A29B117_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EADC6D16_E147_A8ED_41E7_7A006A29B117_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EADC6D16_E147_A8ED_41E7_7A006A29B117_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EADC6D16_E147_A8ED_41E7_7A006A29B117_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Planta Baja - Recepci\u00f3n",
 "hfovMin": "120%",
 "id": "panorama_EADC6D16_E147_A8ED_41E7_7A006A29B117",
 "overlays": [
  "this.overlay_F3C771BC_E140_9B1D_41E8_EC5CA641426A",
  "this.overlay_F3B3BB39_E147_6F24_41B4_7E5D9C4978A4",
  "this.overlay_F3A1FDF1_E147_6B27_41D7_651F6439A865",
  "this.panorama_EADC6D16_E147_A8ED_41E7_7A006A29B117_tcap0",
  "this.overlay_CAB3873F_E4BA_06D7_41E3_29BD45AC3274",
  "this.overlay_DE7C81DD_E5A6_7D5B_41D0_4BD719D7638B",
  "this.popup_DE85E94F_E5A6_0AB7_41D9_5C2FBD73C64E",
  "this.overlay_D992A990_E59A_0DA9_41E7_68747EEC02D0",
  "this.overlay_DA69570E_E5E6_06B9_41C6_F3F22CF359F4",
  "this.overlay_ACB924B5_E59A_1BE8_41E0_42E91CD2A703",
  "this.overlay_A8DC4D04_E59A_0AA8_41B5_6ED6DAD416C7",
  "this.overlay_A965FF73_E466_056F_41EB_8CE306DD2A76"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -22.71,
   "class": "AdjacentPanorama",
   "backwardYaw": 124.52,
   "panorama": "this.panorama_E8E42205_E364_33E7_41E6_A73F2DB39F27",
   "distance": 1
  },
  {
   "yaw": -126.54,
   "class": "AdjacentPanorama",
   "backwardYaw": 31.82,
   "panorama": "this.panorama_EADDC172_E141_BB25_41D8_E09A626FB8FD",
   "distance": 1
  },
  {
   "yaw": 61.94,
   "class": "AdjacentPanorama",
   "backwardYaw": 179.87,
   "panorama": "this.panorama_E8F154F9_E364_F02F_41E0_7ADE7EBBD519",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_82C12CA3_EC9A_0BEF_41EC_167990F4DC6E",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_EADC6D16_E147_A8ED_41E7_7A006A29B117_t.jpg",
 "hfovMax": 120
},
{
 "initialPosition": {
  "yaw": 3.01,
  "class": "PanoramaCameraPosition",
  "pitch": 2.27
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 18.97,
    "path": "shortest",
    "targetPitch": -16.89,
    "pitchSpeed": 16.72,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 43.59,
    "path": "shortest",
    "targetPitch": -21.92,
    "pitchSpeed": 16.72,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 66.45,
    "path": "shortest",
    "targetPitch": -23.42,
    "pitchSpeed": 16.72,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 75.49,
    "path": "shortest",
    "targetPitch": -12.37,
    "pitchSpeed": 16.72,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 55.14,
    "path": "shortest",
    "targetPitch": -12.37,
    "pitchSpeed": 16.72,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F52171BD_E4A4_5027_41E5_9EE998F7E297_camera",
 "class": "PanoramaCamera"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": 48.86,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_DFF13C75_E5A6_0B6B_41E1_5FCDB3B8F3E7",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_DFF13C75_E5A6_0B6B_41E1_5FCDB3B8F3E7_0_1.jpg",
    "width": 933,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 1.65,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "pitch": -10.2
},
{
 "levels": [
  {
   "url": "media/popup_DDB67E6D_E5AA_077B_41EB_FC229823E01C_0_0.jpg",
   "width": 1920,
   "class": "ImageResourceLevel",
   "height": 1280
  },
  {
   "url": "media/popup_DDB67E6D_E5AA_077B_41EB_FC229823E01C_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 682
  },
  {
   "url": "media/popup_DDB67E6D_E5AA_077B_41EB_FC229823E01C_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 341
  }
 ],
 "id": "ImageResource_B512F4D8_E5EA_1B59_41E2_FEC5F340DE29",
 "class": "ImageResource"
},
{
 "headerBackgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_CA895450_E4AE_3AA8_41CF_A346C39ADE25",
 "backgroundOpacity": 1,
 "titleFontColor": "#000000",
 "width": "90%",
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Window",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "titlePaddingRight": 5,
 "titlePaddingTop": 5,
 "footerBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "headerBorderSize": 0,
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "backgroundColor": [],
 "verticalAlign": "middle",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
 "height": "90%",
 "bodyBackgroundOpacity": 1,
 "borderSize": 0,
 "titleFontStyle": "normal",
 "headerPaddingRight": 0,
 "title": "",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "headerPaddingLeft": 0,
 "bodyPaddingLeft": 0,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "headerBackgroundOpacity": 1,
 "scrollBarColor": "#000000",
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPaddingRight": 2,
 "bodyBorderColor": "#000000",
 "shadowBlurRadius": 6,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "footerBorderColor": "#000000",
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "closeButtonPaddingLeft": 2,
 "bodyPaddingTop": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "layout": "vertical",
 "closeButtonBorderRadius": 11,
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "children": [
  "this.htmlText_CAF7744F_E4AE_3AB8_41E2_E0AB3935C6F6",
  {
   "backgroundOpacity": 1,
   "width": "100%",
   "class": "WebFrame",
   "borderRadius": 0,
   "insetBorder": false,
   "paddingLeft": 0,
   "paddingRight": 0,
   "url": "https://www.educacionadventista.com/ensenanza/nivel-primario/",
   "backgroundColorRatios": [],
   "propagateClick": false,
   "minHeight": 0,
   "backgroundColor": [],
   "minWidth": 0,
   "height": "89%",
   "paddingTop": 0,
   "backgroundColorDirection": "vertical",
   "paddingBottom": 0,
   "borderSize": 0,
   "scrollEnabled": true,
   "data": {
    "name": "WebFrame76294"
   },
   "shadow": false
  }
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "shadowHorizontalLength": 3,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBorderSize": 0,
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 0,
 "titleFontSize": "1.29vmin",
 "backgroundColorRatios": [],
 "closeButtonBorderSize": 0,
 "closeButtonPaddingBottom": 2,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 0,
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "footerBackgroundOpacity": 1,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 20,
 "veilOpacity": 0.4,
 "shadowVerticalLength": 0,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 0,
 "paddingTop": 0,
 "closeButtonBackgroundOpacity": 1,
 "bodyPaddingBottom": 0,
 "titlePaddingLeft": 5,
 "closeButtonPaddingTop": 2,
 "closeButtonIconColor": "#000000",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "bodyPaddingRight": 0,
 "closeButtonBackgroundColor": [],
 "shadowSpread": 1,
 "data": {
  "name": "Window66936"
 },
 "titleFontFamily": "Arial",
 "bodyBorderSize": 0
},
{
 "initialPosition": {
  "yaw": -52.25,
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "pitch": -3.04
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -172.71,
    "path": "shortest",
    "targetPitch": -4.21,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 126.74,
    "path": "shortest",
    "targetPitch": -3.2,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "panorama_E8E42205_E364_33E7_41E6_A73F2DB39F27_camera",
 "class": "PanoramaCamera"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -138.06,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_D287ACCB_E5AA_0BBF_41E6_2D957052D5AD",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_D287ACCB_E5AA_0BBF_41E6_2D957052D5AD_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 682
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 3.09,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "pitch": -13.5
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -99.28,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_D9DC64D0_E5A6_1BA9_41D2_8E40C16E0AE7",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_D9DC64D0_E5A6_1BA9_41D2_8E40C16E0AE7_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 711
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 2.46,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "pitch": 3.22
},
{
 "initialPosition": {
  "yaw": -178.91,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 178.74,
    "path": "shortest",
    "targetPitch": 13.31,
    "pitchSpeed": 27.86,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 54.98
   },
   {
    "targetYaw": -33.04,
    "path": "shortest",
    "targetPitch": -16.27,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 31.78,
    "path": "shortest",
    "targetPitch": -14.51,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 1.63,
    "path": "shortest",
    "targetPitch": 4.84,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_820FADB1_EC9A_05EB_41EA_813E646A598C",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E8B9812A_E364_302D_41E2_DFDB9823113D_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8B9812A_E364_302D_41E2_DFDB9823113D_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8B9812A_E364_302D_41E2_DFDB9823113D_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8B9812A_E364_302D_41E2_DFDB9823113D_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E8B9812A_E364_302D_41E2_DFDB9823113D_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8B9812A_E364_302D_41E2_DFDB9823113D_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8B9812A_E364_302D_41E2_DFDB9823113D_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8B9812A_E364_302D_41E2_DFDB9823113D_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E8B9812A_E364_302D_41E2_DFDB9823113D_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8B9812A_E364_302D_41E2_DFDB9823113D_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8B9812A_E364_302D_41E2_DFDB9823113D_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8B9812A_E364_302D_41E2_DFDB9823113D_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E8B9812A_E364_302D_41E2_DFDB9823113D_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8B9812A_E364_302D_41E2_DFDB9823113D_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8B9812A_E364_302D_41E2_DFDB9823113D_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8B9812A_E364_302D_41E2_DFDB9823113D_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E8B9812A_E364_302D_41E2_DFDB9823113D_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E8B9812A_E364_302D_41E2_DFDB9823113D_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8B9812A_E364_302D_41E2_DFDB9823113D_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8B9812A_E364_302D_41E2_DFDB9823113D_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8B9812A_E364_302D_41E2_DFDB9823113D_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E8B9812A_E364_302D_41E2_DFDB9823113D_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E8B9812A_E364_302D_41E2_DFDB9823113D_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E8B9812A_E364_302D_41E2_DFDB9823113D_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E8B9812A_E364_302D_41E2_DFDB9823113D_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Planta Baja - Aula Preescolar",
 "hfovMin": "120%",
 "id": "panorama_E8B9812A_E364_302D_41E2_DFDB9823113D",
 "overlays": [
  "this.overlay_F2818F80_E36D_D0DE_41D2_1841F0EFE08E",
  "this.overlay_CF5A3E6C_E4FA_0779_41BD_6186776B90CD",
  "this.panorama_E8B9812A_E364_302D_41E2_DFDB9823113D_tcap0",
  "this.overlay_DBECDC0D_E5FE_0ABB_41E4_53C114976E73"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -163.04,
   "class": "AdjacentPanorama",
   "backwardYaw": 35.32,
   "panorama": "this.panorama_E8FADA72_E364_F022_41C2_C29F7A235EAF",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_82C12CA3_EC9A_0BEF_41EC_167990F4DC6E",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E8B9812A_E364_302D_41E2_DFDB9823113D_t.jpg",
 "hfovMax": 120
},
{
 "initialPosition": {
  "yaw": 173.47,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -139.18,
    "path": "shortest",
    "targetPitch": 27.63,
    "pitchSpeed": 108,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 216
   },
   {
    "targetYaw": -145.58,
    "path": "shortest",
    "targetPitch": -10.49,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -70.97,
    "path": "shortest",
    "targetPitch": -13.5,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -8.42,
    "path": "shortest",
    "targetPitch": -4.21,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 116.44,
    "path": "shortest",
    "targetPitch": -6.72,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 174.98,
    "path": "shortest",
    "targetPitch": -2.2,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_85821337_EC9A_7EE8_41EB_73CF0DBDA589",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -31.78,
    "hfovSpeed": 33.25,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetHfov": 92,
    "targetPitch": -4.71,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -107.65,
    "hfovSpeed": 33.25,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetHfov": 100,
    "targetPitch": -6.22,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 75.24,
    "hfovSpeed": 33.25,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetHfov": 110,
    "targetPitch": -12.5,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -174.72,
    "hfovSpeed": 33.25,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetHfov": 110,
    "targetPitch": -9.23,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "panorama_EADC0494_E147_99EC_41E6_6E85636B3ABA_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -17.21,
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -154.5,
    "path": "shortest",
    "targetPitch": 1.92,
    "pitchSpeed": 32.6,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 64.5
   },
   {
    "targetYaw": -84.79,
    "path": "shortest",
    "targetPitch": 0.06,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 157.89,
    "path": "shortest",
    "targetPitch": -1.95,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 33.79,
    "path": "shortest",
    "targetPitch": -5.46,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_839C3E86_EC9A_07A9_41C8_05F7A2E978C8",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -45.99,
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -135.66,
    "path": "shortest",
    "targetPitch": 36.93,
    "pitchSpeed": 29.63,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 58.52
   },
   {
    "targetYaw": -106.14,
    "path": "shortest",
    "targetPitch": -8.73,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -2.89,
    "path": "shortest",
    "targetPitch": -9.99,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 61.67,
    "path": "shortest",
    "targetPitch": -1.19,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 122.72,
    "path": "shortest",
    "targetPitch": 0.06,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 174.47,
    "path": "shortest",
    "targetPitch": -4.46,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 51.63,
    "path": "shortest",
    "targetPitch": -2.45,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_83418ECF_EC9A_07B7_41E6_A8C64D1F0E7D",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_F5213C55_E4A4_D066_416D_85F4BFC80191_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_F5213C55_E4A4_D066_416D_85F4BFC80191_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5213C55_E4A4_D066_416D_85F4BFC80191_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5213C55_E4A4_D066_416D_85F4BFC80191_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F5213C55_E4A4_D066_416D_85F4BFC80191_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_F5213C55_E4A4_D066_416D_85F4BFC80191_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5213C55_E4A4_D066_416D_85F4BFC80191_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5213C55_E4A4_D066_416D_85F4BFC80191_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F5213C55_E4A4_D066_416D_85F4BFC80191_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_F5213C55_E4A4_D066_416D_85F4BFC80191_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5213C55_E4A4_D066_416D_85F4BFC80191_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5213C55_E4A4_D066_416D_85F4BFC80191_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F5213C55_E4A4_D066_416D_85F4BFC80191_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_F5213C55_E4A4_D066_416D_85F4BFC80191_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5213C55_E4A4_D066_416D_85F4BFC80191_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5213C55_E4A4_D066_416D_85F4BFC80191_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_F5213C55_E4A4_D066_416D_85F4BFC80191_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F5213C55_E4A4_D066_416D_85F4BFC80191_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_F5213C55_E4A4_D066_416D_85F4BFC80191_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5213C55_E4A4_D066_416D_85F4BFC80191_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5213C55_E4A4_D066_416D_85F4BFC80191_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_F5213C55_E4A4_D066_416D_85F4BFC80191_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_F5213C55_E4A4_D066_416D_85F4BFC80191_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5213C55_E4A4_D066_416D_85F4BFC80191_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5213C55_E4A4_D066_416D_85F4BFC80191_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "1er Piso - Acceso a Aula 9",
 "id": "panorama_F5213C55_E4A4_D066_416D_85F4BFC80191",
 "overlays": [
  "this.overlay_F04F718E_E46A_7DB8_41E5_899C1A34BEBB",
  "this.overlay_F0A14564_E466_0569_41DF_3B7019293D78",
  "this.overlay_F3B7D8E8_E49E_0B79_41D7_77047CAF5DE3",
  "this.overlay_F3213A2D_E49A_0EF8_41E5_AEFA5C233618",
  "this.panorama_F5213C55_E4A4_D066_416D_85F4BFC80191_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -30.87,
   "class": "AdjacentPanorama",
   "backwardYaw": 150.6,
   "panorama": "this.panorama_F521389D_E4A4_30E7_419D_206A40017412",
   "distance": 1
  },
  {
   "yaw": -39.3,
   "class": "AdjacentPanorama",
   "backwardYaw": 25.05,
   "panorama": "this.panorama_F52171BD_E4A4_5027_41E5_9EE998F7E297",
   "distance": 1
  },
  {
   "yaw": 173.1,
   "class": "AdjacentPanorama",
   "backwardYaw": -62.83,
   "panorama": "this.panorama_F5217E84_E4A4_50E6_41B1_B7D2D7D82D72",
   "distance": 1
  },
  {
   "yaw": -6.53,
   "class": "AdjacentPanorama",
   "backwardYaw": 178.25,
   "panorama": "this.panorama_EFE15D2B_E466_0AFF_41D4_0DCE456C6586",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_82C12CA3_EC9A_0BEF_41EC_167990F4DC6E",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_F5213C55_E4A4_D066_416D_85F4BFC80191_t.jpg",
 "hfovMax": 130
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": 131.27,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_DD9DF9F1_E5AA_0D6B_4197_B9AABB43D065",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_DD9DF9F1_E5AA_0D6B_4197_B9AABB43D065_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 682
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 2.56,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "pitch": -7.17
},
{
 "initialPosition": {
  "yaw": -50.24,
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "pitch": -3.52
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 22.48,
    "path": "shortest",
    "targetPitch": -8.98,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 84.79,
    "path": "shortest",
    "targetPitch": -6.97,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 159.65,
    "path": "shortest",
    "targetPitch": -5.21,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "panorama_EADCE602_E147_B8E5_41E0_A3348388DA41_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 19.43,
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 40.45,
    "path": "shortest",
    "targetPitch": 3.77,
    "pitchSpeed": 8.54,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 16.15
   },
   {
    "targetYaw": 85.29,
    "path": "shortest",
    "targetPitch": 11.12,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 138.3,
    "path": "shortest",
    "targetPitch": -1.44,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -173.72,
    "path": "shortest",
    "targetPitch": -0.19,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -122.72,
    "path": "shortest",
    "targetPitch": 0.31,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_84226172_EC9A_7D69_41E6_58C619A227B0",
 "class": "PanoramaCamera"
},
{
 "levels": [
  {
   "url": "media/popup_DD9DF9F1_E5AA_0D6B_4197_B9AABB43D065_0_0.jpg",
   "width": 1920,
   "class": "ImageResourceLevel",
   "height": 1280
  },
  {
   "url": "media/popup_DD9DF9F1_E5AA_0D6B_4197_B9AABB43D065_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 682
  },
  {
   "url": "media/popup_DD9DF9F1_E5AA_0D6B_4197_B9AABB43D065_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 341
  }
 ],
 "id": "ImageResource_B51D04CE_E5EA_1BB9_41E6_A292A59F60F9",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "yaw": -42.79,
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -50.24,
    "path": "shortest",
    "targetPitch": -3.52,
    "pitchSpeed": 2.81,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 4.65
   },
   {
    "targetYaw": 22.48,
    "path": "shortest",
    "targetPitch": -8.98,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 84.79,
    "path": "shortest",
    "targetPitch": -6.97,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 159.65,
    "path": "shortest",
    "targetPitch": -5.21,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_84D36F8C_EC9A_05B9_41D2_C3B00BF91A55",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -154.95,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 3.01,
    "path": "shortest",
    "targetPitch": 2.27,
    "pitchSpeed": 100.63,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 205.36
   },
   {
    "targetYaw": 18.97,
    "path": "shortest",
    "targetPitch": -16.89,
    "pitchSpeed": 16.72,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 43.59,
    "path": "shortest",
    "targetPitch": -21.92,
    "pitchSpeed": 16.72,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 66.45,
    "path": "shortest",
    "targetPitch": -23.42,
    "pitchSpeed": 16.72,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 75.49,
    "path": "shortest",
    "targetPitch": -12.37,
    "pitchSpeed": 16.72,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 55.14,
    "path": "shortest",
    "targetPitch": -12.37,
    "pitchSpeed": 16.72,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_83F4BDEB_EC9A_057F_41EB_CFC26F14336D",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 40.45,
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "pitch": 3.77
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 85.29,
    "path": "shortest",
    "targetPitch": 11.12,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 138.3,
    "path": "shortest",
    "targetPitch": -1.44,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -173.72,
    "path": "shortest",
    "targetPitch": -0.19,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -122.72,
    "path": "shortest",
    "targetPitch": 0.31,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "panorama_EADC6654_E140_996D_41E8_8F536A929374_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_EF3E255F_E364_5063_41EA_23F03465E467_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EF3E255F_E364_5063_41EA_23F03465E467_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EF3E255F_E364_5063_41EA_23F03465E467_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF3E255F_E364_5063_41EA_23F03465E467_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EF3E255F_E364_5063_41EA_23F03465E467_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EF3E255F_E364_5063_41EA_23F03465E467_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EF3E255F_E364_5063_41EA_23F03465E467_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF3E255F_E364_5063_41EA_23F03465E467_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EF3E255F_E364_5063_41EA_23F03465E467_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EF3E255F_E364_5063_41EA_23F03465E467_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EF3E255F_E364_5063_41EA_23F03465E467_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF3E255F_E364_5063_41EA_23F03465E467_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EF3E255F_E364_5063_41EA_23F03465E467_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EF3E255F_E364_5063_41EA_23F03465E467_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EF3E255F_E364_5063_41EA_23F03465E467_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF3E255F_E364_5063_41EA_23F03465E467_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EF3E255F_E364_5063_41EA_23F03465E467_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EF3E255F_E364_5063_41EA_23F03465E467_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EF3E255F_E364_5063_41EA_23F03465E467_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EF3E255F_E364_5063_41EA_23F03465E467_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF3E255F_E364_5063_41EA_23F03465E467_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_EF3E255F_E364_5063_41EA_23F03465E467_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EF3E255F_E364_5063_41EA_23F03465E467_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EF3E255F_E364_5063_41EA_23F03465E467_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF3E255F_E364_5063_41EA_23F03465E467_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Planta Baja - Cancha 2",
 "hfovMin": "120%",
 "id": "panorama_EF3E255F_E364_5063_41EA_23F03465E467",
 "overlays": [
  "this.overlay_EF3E655F_E364_5063_41D4_798DFFB4F944",
  "this.overlay_EF3E555F_E364_5063_41D7_3A82FDF4936D",
  "this.overlay_EF39B55F_E364_5063_41E5_E130BE9D5E31",
  "this.overlay_CD68A008_E4FA_FAB9_41EB_D7CC520DB65C",
  "this.panorama_EF3E255F_E364_5063_41EA_23F03465E467_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 75.62,
   "class": "AdjacentPanorama",
   "backwardYaw": -133.15,
   "panorama": "this.panorama_EADC6654_E140_996D_41E8_8F536A929374",
   "distance": 1
  },
  {
   "yaw": -150.57,
   "class": "AdjacentPanorama",
   "backwardYaw": 49.02,
   "panorama": "this.panorama_EADDA963_E141_EB2B_41DB_CD069D3B479A",
   "distance": 1
  },
  {
   "yaw": -64.62,
   "class": "AdjacentPanorama",
   "backwardYaw": -140.74,
   "panorama": "this.panorama_EADDBD3C_E141_6B1D_41C2_3B8C0C9C91C2",
   "distance": 1
  },
  {
   "panorama": "this.panorama_EA80C6E4_E147_992C_41D3_588476BDC207",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_82C12CA3_EC9A_0BEF_41EC_167990F4DC6E",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_EF3E255F_E364_5063_41EA_23F03465E467_t.jpg",
 "hfovMax": 120
},
{
 "initialPosition": {
  "yaw": 114.63,
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -154.5,
    "path": "shortest",
    "targetPitch": 1.92,
    "pitchSpeed": 62.94,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 125.46
   },
   {
    "targetYaw": -84.79,
    "path": "shortest",
    "targetPitch": 0.06,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 157.89,
    "path": "shortest",
    "targetPitch": -1.95,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 33.79,
    "path": "shortest",
    "targetPitch": -5.46,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_8257ED59_EC9A_055B_41EB_5EA066819A44",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 45.69,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 178.74,
    "path": "shortest",
    "targetPitch": 13.31,
    "pitchSpeed": 11.04,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 21.17
   },
   {
    "targetYaw": -33.04,
    "path": "shortest",
    "targetPitch": -16.27,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 31.78,
    "path": "shortest",
    "targetPitch": -14.51,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 1.63,
    "path": "shortest",
    "targetPitch": 4.84,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_847270D7_EC9A_7B52_41C0_C776339D7D8F",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -126.87,
  "class": "PanoramaCameraPosition",
  "pitch": 28.14
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -64.19,
    "path": "shortest",
    "targetPitch": -2.7,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 0.88,
    "path": "shortest",
    "targetPitch": -7.47,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 57.91,
    "path": "shortest",
    "targetPitch": -8.98,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F5217E84_E4A4_50E6_41B1_B7D2D7D82D72_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 104.41,
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -174.35,
    "path": "shortest",
    "targetPitch": 2.51,
    "pitchSpeed": 14.61,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 28.35
   },
   {
    "targetYaw": 154.38,
    "path": "shortest",
    "targetPitch": 0.06,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 112.42,
    "path": "shortest",
    "targetPitch": 41.77,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 0.88,
    "path": "shortest",
    "targetPitch": -1.19,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_85CE42A7_EC9A_7FF7_41DB_DD1301477E92",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 92.7,
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "pitch": -5.78
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -91.57,
    "path": "shortest",
    "targetPitch": -0.94,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 1.63,
    "path": "shortest",
    "targetPitch": -5.97,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "panorama_EAE2003C_E141_991C_41CF_920F278E9C7B_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 163.98,
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 0,
    "path": "shortest",
    "targetPitch": 0.91,
    "pitchSpeed": 50.3,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 100.06
   },
   {
    "targetYaw": 53.38,
    "path": "shortest",
    "targetPitch": 0.57,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 98.86,
    "path": "shortest",
    "targetPitch": -0.44,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -143.82,
    "path": "shortest",
    "targetPitch": 3.58,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -99.61,
    "hfovSpeed": 33.25,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetHfov": 80,
    "targetPitch": 3.58,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -50.12,
    "path": "shortest",
    "targetPitch": -3.2,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -15.45,
    "path": "shortest",
    "targetPitch": 0.82,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_840501C0_EC9A_7DA9_41D3_052450FABEC4",
 "class": "PanoramaCamera"
},
{
 "levels": [
  {
   "url": "media/popup_DC61FB58_E5AA_0D58_41E6_AB80B9F13949_0_0.jpg",
   "width": 1920,
   "class": "ImageResourceLevel",
   "height": 1280
  },
  {
   "url": "media/popup_DC61FB58_E5AA_0D58_41E6_AB80B9F13949_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 682
  },
  {
   "url": "media/popup_DC61FB58_E5AA_0D58_41E6_AB80B9F13949_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 341
  }
 ],
 "id": "ImageResource_B510B4D7_E5EA_1B57_41C1_1C2C6AC480BF",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "yaw": 117.05,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -126.87,
    "path": "shortest",
    "targetPitch": 28.14,
    "pitchSpeed": 57.41,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 114.36
   },
   {
    "targetYaw": -64.19,
    "path": "shortest",
    "targetPitch": -2.7,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 0.88,
    "path": "shortest",
    "targetPitch": -7.47,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 57.91,
    "path": "shortest",
    "targetPitch": -8.98,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_85609383_EC9A_7DA8_41C3_F9D2F25EA89E",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -0.13,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -175.98,
    "path": "shortest",
    "targetPitch": -5.53,
    "pitchSpeed": 16.04,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 31.21
   },
   {
    "targetYaw": 11.68,
    "path": "shortest",
    "targetPitch": 1.82,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 12.18,
    "path": "shortest",
    "targetPitch": -9.23,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 41.58,
    "path": "shortest",
    "targetPitch": -6.47,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 93.08,
    "path": "shortest",
    "targetPitch": -5.21,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 113.93,
    "path": "shortest",
    "targetPitch": 17.65,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_817B28FE_EC9A_0B59_41DA_ECF707FFE2D9",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -179.75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -126.87,
    "path": "shortest",
    "targetPitch": 28.14,
    "pitchSpeed": 14.76,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 28.65
   },
   {
    "targetYaw": -64.19,
    "path": "shortest",
    "targetPitch": -2.7,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 0.88,
    "path": "shortest",
    "targetPitch": -7.47,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 57.91,
    "path": "shortest",
    "targetPitch": -8.98,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_810CC9DC_EC9A_0D59_41D3_DAE8B8E4DD64",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E9C4F462_E46B_FB69_41EA_EBF76426CC46_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E9C4F462_E46B_FB69_41EA_EBF76426CC46_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E9C4F462_E46B_FB69_41EA_EBF76426CC46_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E9C4F462_E46B_FB69_41EA_EBF76426CC46_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E9C4F462_E46B_FB69_41EA_EBF76426CC46_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E9C4F462_E46B_FB69_41EA_EBF76426CC46_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E9C4F462_E46B_FB69_41EA_EBF76426CC46_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E9C4F462_E46B_FB69_41EA_EBF76426CC46_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E9C4F462_E46B_FB69_41EA_EBF76426CC46_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E9C4F462_E46B_FB69_41EA_EBF76426CC46_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E9C4F462_E46B_FB69_41EA_EBF76426CC46_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E9C4F462_E46B_FB69_41EA_EBF76426CC46_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E9C4F462_E46B_FB69_41EA_EBF76426CC46_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E9C4F462_E46B_FB69_41EA_EBF76426CC46_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E9C4F462_E46B_FB69_41EA_EBF76426CC46_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E9C4F462_E46B_FB69_41EA_EBF76426CC46_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E9C4F462_E46B_FB69_41EA_EBF76426CC46_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E9C4F462_E46B_FB69_41EA_EBF76426CC46_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E9C4F462_E46B_FB69_41EA_EBF76426CC46_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E9C4F462_E46B_FB69_41EA_EBF76426CC46_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E9C4F462_E46B_FB69_41EA_EBF76426CC46_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E9C4F462_E46B_FB69_41EA_EBF76426CC46_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E9C4F462_E46B_FB69_41EA_EBF76426CC46_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E9C4F462_E46B_FB69_41EA_EBF76426CC46_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E9C4F462_E46B_FB69_41EA_EBF76426CC46_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "2do Piso - Acceso a Biblioteca",
 "id": "panorama_E9C4F462_E46B_FB69_41EA_EBF76426CC46",
 "overlays": [
  "this.overlay_C53B33E0_E49A_1D69_41EC_7ED77A58602B",
  "this.overlay_C5F9D426_E49A_1AE9_41E9_7204095E0324",
  "this.overlay_C99987F4_E4E6_0568_41EC_4C36F40D6BBD",
  "this.panorama_E9C4F462_E46B_FB69_41EA_EBF76426CC46_tcap0",
  "this.overlay_B3AB2B8E_ECAA_0DB9_41DF_36CA51BAEB06",
  "this.overlay_B7303ABD_ECAA_0FDB_41DF_5EEAF99FC900",
  "this.overlay_B5B5EDF4_ECA6_0569_41AE_2D8AA64BFA34"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -1.13,
   "class": "AdjacentPanorama",
   "backwardYaw": 179.87,
   "panorama": "this.panorama_E9C1D3F7_E46A_1D57_4197_60D58E87487C",
   "distance": 1
  },
  {
   "yaw": -1.21,
   "class": "AdjacentPanorama",
   "backwardYaw": 179.87,
   "panorama": "this.panorama_E9C1D3F7_E46A_1D57_4197_60D58E87487C",
   "distance": 1
  },
  {
   "yaw": 100.24,
   "class": "AdjacentPanorama",
   "backwardYaw": -167.06,
   "panorama": "this.panorama_E9C4108D_E46A_3BBB_41E4_FCB0E78FC031",
   "distance": 1
  },
  {
   "yaw": 99.27,
   "class": "AdjacentPanorama",
   "backwardYaw": -167.06,
   "panorama": "this.panorama_E9C4108D_E46A_3BBB_41E4_FCB0E78FC031",
   "distance": 1
  },
  {
   "yaw": -160.03,
   "class": "AdjacentPanorama",
   "backwardYaw": 176.61,
   "panorama": "this.panorama_F5217E84_E4A4_50E6_41B1_B7D2D7D82D72",
   "distance": 1
  },
  {
   "yaw": -160.51,
   "class": "AdjacentPanorama",
   "backwardYaw": 176.61,
   "panorama": "this.panorama_F5217E84_E4A4_50E6_41B1_B7D2D7D82D72",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_82C12CA3_EC9A_0BEF_41EC_167990F4DC6E",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E9C4F462_E46B_FB69_41EA_EBF76426CC46_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 92.95,
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 0,
    "path": "shortest",
    "targetPitch": 0.91,
    "pitchSpeed": 28.95,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 57.15
   },
   {
    "targetYaw": 53.38,
    "path": "shortest",
    "targetPitch": 0.57,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 98.86,
    "path": "shortest",
    "targetPitch": -0.44,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -143.82,
    "path": "shortest",
    "targetPitch": 3.58,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -99.61,
    "hfovSpeed": 33.25,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetHfov": 80,
    "targetPitch": 3.58,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -50.12,
    "path": "shortest",
    "targetPitch": -3.2,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -15.45,
    "path": "shortest",
    "targetPitch": 0.82,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_851B34A7_EC9A_7BF7_41CD_259EDA69ACA1",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -154.5,
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "pitch": 1.92
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -84.79,
    "path": "shortest",
    "targetPitch": 0.06,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 157.89,
    "path": "shortest",
    "targetPitch": -1.95,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 33.79,
    "path": "shortest",
    "targetPitch": -5.46,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "panorama_E8FADA72_E364_F022_41C2_C29F7A235EAF_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_EA80C6E4_E147_992C_41D3_588476BDC207_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EA80C6E4_E147_992C_41D3_588476BDC207_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EA80C6E4_E147_992C_41D3_588476BDC207_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA80C6E4_E147_992C_41D3_588476BDC207_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EA80C6E4_E147_992C_41D3_588476BDC207_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EA80C6E4_E147_992C_41D3_588476BDC207_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EA80C6E4_E147_992C_41D3_588476BDC207_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA80C6E4_E147_992C_41D3_588476BDC207_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EA80C6E4_E147_992C_41D3_588476BDC207_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EA80C6E4_E147_992C_41D3_588476BDC207_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EA80C6E4_E147_992C_41D3_588476BDC207_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA80C6E4_E147_992C_41D3_588476BDC207_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EA80C6E4_E147_992C_41D3_588476BDC207_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EA80C6E4_E147_992C_41D3_588476BDC207_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EA80C6E4_E147_992C_41D3_588476BDC207_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA80C6E4_E147_992C_41D3_588476BDC207_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EA80C6E4_E147_992C_41D3_588476BDC207_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EA80C6E4_E147_992C_41D3_588476BDC207_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EA80C6E4_E147_992C_41D3_588476BDC207_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EA80C6E4_E147_992C_41D3_588476BDC207_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA80C6E4_E147_992C_41D3_588476BDC207_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_EA80C6E4_E147_992C_41D3_588476BDC207_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EA80C6E4_E147_992C_41D3_588476BDC207_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EA80C6E4_E147_992C_41D3_588476BDC207_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA80C6E4_E147_992C_41D3_588476BDC207_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Planta Baja - Laboratorio de Simulaci\u00f3n - Punto 1",
 "hfovMin": "120%",
 "id": "panorama_EA80C6E4_E147_992C_41D3_588476BDC207",
 "overlays": [
  "this.overlay_ED044473_E2E6_EBF1_41E6_23677F909FC9",
  "this.overlay_F3B7E82E_E2E9_FB13_41C3_95A665EC5A22",
  "this.overlay_F2BE7393_E2EA_ED31_41E2_B0C5A7EED295",
  "this.panorama_EA80C6E4_E147_992C_41D3_588476BDC207_tcap0",
  "this.overlay_D2A5BEFA_E5AE_0759_41E9_88AE1FBDA2DC",
  "this.popup_DC15C8AD_E5AE_0BFB_41BC_B6486BCD8164",
  "this.overlay_DD209DC3_E5AE_05AF_41C5_5FE2F305E6FE",
  "this.popup_DC01BADB_E5AE_0F5F_41E6_41FDAE1145C0",
  "this.overlay_D2EDFEBA_E5AE_07D9_41EC_9A36DE2094C6",
  "this.popup_DD9DF9F1_E5AA_0D6B_4197_B9AABB43D065",
  "this.overlay_DDFCC1D4_E5AA_1DA9_41DE_CE9E100A02BE",
  "this.popup_DF14DA02_E5AA_0EA9_41E1_63BE602FBBC7",
  "this.overlay_DC0F0FA6_E5AA_05E9_41E5_C09D7DE04185",
  "this.popup_D287ACCB_E5AA_0BBF_41E6_2D957052D5AD",
  "this.overlay_DE578037_E5A6_3AD7_41D0_CE7891A52FA9",
  "this.popup_DFF13C75_E5A6_0B6B_41E1_5FCDB3B8F3E7"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 91.49,
   "class": "AdjacentPanorama",
   "backwardYaw": 130.53,
   "panorama": "this.panorama_EADCE602_E147_B8E5_41E0_A3348388DA41",
   "distance": 1
  },
  {
   "yaw": 179.99,
   "class": "AdjacentPanorama",
   "backwardYaw": 1.82,
   "panorama": "this.panorama_EADDBD3C_E141_6B1D_41C2_3B8C0C9C91C2",
   "distance": 1
  },
  {
   "yaw": -73.33,
   "class": "AdjacentPanorama",
   "backwardYaw": -172.41,
   "panorama": "this.panorama_EADC0494_E147_99EC_41E6_6E85636B3ABA",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_82C12CA3_EC9A_0BEF_41EC_167990F4DC6E",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_EA80C6E4_E147_992C_41D3_588476BDC207_t.jpg",
 "hfovMax": 120
},
{
 "levels": [
  {
   "url": "media/popup_DE2FCAF8_E5BA_0F59_41E3_05A13E2CBDCD_0_0.jpg",
   "width": 1920,
   "class": "ImageResourceLevel",
   "height": 1334
  },
  {
   "url": "media/popup_DE2FCAF8_E5BA_0F59_41E3_05A13E2CBDCD_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 711
  },
  {
   "url": "media/popup_DE2FCAF8_E5BA_0F59_41E3_05A13E2CBDCD_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 355
  }
 ],
 "id": "ImageResource_B52094C0_E5EA_1BA9_41DE_D1A37769C15A",
 "class": "ImageResource"
},
{
 "cardboardMenu": "this.Menu_82C12CA3_EC9A_0BEF_41EC_167990F4DC6E",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E9C6E272_E46A_7F69_41D0_A0613D7F1112_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E9C6E272_E46A_7F69_41D0_A0613D7F1112_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E9C6E272_E46A_7F69_41D0_A0613D7F1112_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E9C6E272_E46A_7F69_41D0_A0613D7F1112_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E9C6E272_E46A_7F69_41D0_A0613D7F1112_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E9C6E272_E46A_7F69_41D0_A0613D7F1112_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E9C6E272_E46A_7F69_41D0_A0613D7F1112_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E9C6E272_E46A_7F69_41D0_A0613D7F1112_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E9C6E272_E46A_7F69_41D0_A0613D7F1112_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E9C6E272_E46A_7F69_41D0_A0613D7F1112_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E9C6E272_E46A_7F69_41D0_A0613D7F1112_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E9C6E272_E46A_7F69_41D0_A0613D7F1112_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E9C6E272_E46A_7F69_41D0_A0613D7F1112_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E9C6E272_E46A_7F69_41D0_A0613D7F1112_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E9C6E272_E46A_7F69_41D0_A0613D7F1112_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E9C6E272_E46A_7F69_41D0_A0613D7F1112_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E9C6E272_E46A_7F69_41D0_A0613D7F1112_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E9C6E272_E46A_7F69_41D0_A0613D7F1112_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E9C6E272_E46A_7F69_41D0_A0613D7F1112_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E9C6E272_E46A_7F69_41D0_A0613D7F1112_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E9C6E272_E46A_7F69_41D0_A0613D7F1112_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E9C6E272_E46A_7F69_41D0_A0613D7F1112_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E9C6E272_E46A_7F69_41D0_A0613D7F1112_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E9C6E272_E46A_7F69_41D0_A0613D7F1112_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E9C6E272_E46A_7F69_41D0_A0613D7F1112_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "vfov": 180,
 "overlays": [
  "this.panorama_E9C6E272_E46A_7F69_41D0_A0613D7F1112_tcap0",
  "this.overlay_CA87C903_E4AA_0AAF_41E1_485BFE10BEAF"
 ],
 "thumbnailUrl": "media/panorama_E9C6E272_E46A_7F69_41D0_A0613D7F1112_t.jpg",
 "id": "panorama_E9C6E272_E46A_7F69_41D0_A0613D7F1112",
 "label": "1er Piso - Aula 6",
 "hfovMax": 130,
 "class": "Panorama",
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "yaw": 157.29,
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 62.55,
    "path": "shortest",
    "targetPitch": -3.77,
    "pitchSpeed": 15.21,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 29.55
   },
   {
    "targetYaw": 169.45,
    "path": "shortest",
    "targetPitch": 3.08,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -133.02,
    "path": "shortest",
    "targetPitch": -2.45,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -72.73,
    "path": "shortest",
    "targetPitch": 4.58,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -21.48,
    "path": "shortest",
    "targetPitch": -3.45,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 61.93,
    "path": "shortest",
    "targetPitch": -3.45,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_829D5B56_EC9A_0EA9_41D7_8C2394CF24ED",
 "class": "PanoramaCamera"
},
{
 "levels": [
  {
   "url": "media/popup_DEC28F9F_E5A6_05D7_41DA_8B9EF6C61FA8_0_0.jpg",
   "width": 1920,
   "class": "ImageResourceLevel",
   "height": 1280
  },
  {
   "url": "media/popup_DEC28F9F_E5A6_05D7_41DA_8B9EF6C61FA8_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 682
  },
  {
   "url": "media/popup_DEC28F9F_E5A6_05D7_41DA_8B9EF6C61FA8_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 341
  }
 ],
 "id": "ImageResource_B52A64B5_E5EA_1BEB_41E3_E08F40DF7960",
 "class": "ImageResource"
},
{
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "class": "PanoramaPlayer",
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "displayPlaybackBar": true,
 "touchControlMode": "drag_rotation",
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "buttonCardboardView": [
  "this.IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA",
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB"
 ],
 "mouseControlMode": "drag_rotation"
},
{
 "initialPosition": {
  "yaw": -175.98,
  "class": "PanoramaCameraPosition",
  "pitch": -5.53
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 11.68,
    "path": "shortest",
    "targetPitch": 1.82,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 12.18,
    "path": "shortest",
    "targetPitch": -9.23,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 41.58,
    "path": "shortest",
    "targetPitch": -6.47,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 93.08,
    "path": "shortest",
    "targetPitch": -5.21,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 113.93,
    "path": "shortest",
    "targetPitch": 17.65,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_E9C1D3F7_E46A_1D57_4197_60D58E87487C_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 12.94,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 0,
    "path": "shortest",
    "targetPitch": 0,
    "pitchSpeed": 6.42,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 11.89
   },
   {
    "targetYaw": -38.31,
    "path": "shortest",
    "targetPitch": -1.19,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -18.46,
    "path": "shortest",
    "targetPitch": -32.09,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 35.8,
    "path": "shortest",
    "targetPitch": -10.24,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -3.64,
    "path": "shortest",
    "targetPitch": 37.24,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_81524951_EC9A_0AAB_41C4_D51822ECC238",
 "class": "PanoramaCamera"
},
{
 "levels": [
  {
   "url": "media/popup_DE814D19_E5BE_0AD8_41E8_315B83D193D4_0_0.jpg",
   "width": 1920,
   "class": "ImageResourceLevel",
   "height": 1280
  },
  {
   "url": "media/popup_DE814D19_E5BE_0AD8_41E8_315B83D193D4_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 682
  },
  {
   "url": "media/popup_DE814D19_E5BE_0AD8_41E8_315B83D193D4_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 341
  }
 ],
 "id": "ImageResource_B52584C4_E5EA_1BA9_41B3_DE91574219BC",
 "class": "ImageResource"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": 136.7,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_DC01BADB_E5AE_0F5F_41E6_41FDAE1145C0",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_DC01BADB_E5AE_0F5F_41E6_41FDAE1145C0_0_1.jpg",
    "width": 682,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 1.81,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "pitch": -1.61
},
{
 "initialPosition": {
  "yaw": -77.78,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 0,
    "path": "shortest",
    "targetPitch": 0,
    "pitchSpeed": 31,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 61.9
   },
   {
    "targetYaw": -40.07,
    "path": "shortest",
    "targetPitch": -9.55,
    "pitchSpeed": 16.89,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -129.76,
    "path": "shortest",
    "targetPitch": -15.58,
    "pitchSpeed": 16.89,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 31.78,
    "path": "shortest",
    "targetPitch": -12.81,
    "pitchSpeed": 16.89,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 101.87,
    "path": "shortest",
    "targetPitch": -6.53,
    "pitchSpeed": 16.89,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_987377B3_EC9A_05EF_41B4_45AB55546FF3",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -3.39,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -126.87,
    "path": "shortest",
    "targetPitch": 28.14,
    "pitchSpeed": 30.1,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 59.47
   },
   {
    "targetYaw": -64.19,
    "path": "shortest",
    "targetPitch": -2.7,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 0.88,
    "path": "shortest",
    "targetPitch": -7.47,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 57.91,
    "path": "shortest",
    "targetPitch": -8.98,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_812EC987_EC9A_0DB6_41D8_4C68C6634CD1",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_EADC0494_E147_99EC_41E6_6E85636B3ABA_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EADC0494_E147_99EC_41E6_6E85636B3ABA_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EADC0494_E147_99EC_41E6_6E85636B3ABA_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EADC0494_E147_99EC_41E6_6E85636B3ABA_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EADC0494_E147_99EC_41E6_6E85636B3ABA_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EADC0494_E147_99EC_41E6_6E85636B3ABA_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EADC0494_E147_99EC_41E6_6E85636B3ABA_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EADC0494_E147_99EC_41E6_6E85636B3ABA_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EADC0494_E147_99EC_41E6_6E85636B3ABA_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EADC0494_E147_99EC_41E6_6E85636B3ABA_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EADC0494_E147_99EC_41E6_6E85636B3ABA_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EADC0494_E147_99EC_41E6_6E85636B3ABA_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EADC0494_E147_99EC_41E6_6E85636B3ABA_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EADC0494_E147_99EC_41E6_6E85636B3ABA_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EADC0494_E147_99EC_41E6_6E85636B3ABA_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EADC0494_E147_99EC_41E6_6E85636B3ABA_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EADC0494_E147_99EC_41E6_6E85636B3ABA_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EADC0494_E147_99EC_41E6_6E85636B3ABA_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EADC0494_E147_99EC_41E6_6E85636B3ABA_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EADC0494_E147_99EC_41E6_6E85636B3ABA_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EADC0494_E147_99EC_41E6_6E85636B3ABA_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_EADC0494_E147_99EC_41E6_6E85636B3ABA_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EADC0494_E147_99EC_41E6_6E85636B3ABA_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EADC0494_E147_99EC_41E6_6E85636B3ABA_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EADC0494_E147_99EC_41E6_6E85636B3ABA_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Planta Baja - Laboratorio de Simulaci\u00f3n Punto 2",
 "hfovMin": "120%",
 "id": "panorama_EADC0494_E147_99EC_41E6_6E85636B3ABA",
 "overlays": [
  "this.overlay_F0E2413E_E2E9_ED73_41C1_828328E82BD8",
  "this.overlay_F0BFF651_E2EE_5731_41E4_24882AF2BC1A",
  "this.panorama_EADC0494_E147_99EC_41E6_6E85636B3ABA_tcap0",
  "this.overlay_DDC3AC6E_E5AA_0B79_41E7_705C323AF90C",
  "this.popup_DC61FB58_E5AA_0D58_41E6_AB80B9F13949",
  "this.overlay_DD1914A6_E5AA_FBE9_41E0_63AFA57F6F4E",
  "this.popup_DDA1676F_E5AA_0577_41C5_13DBF9C09495",
  "this.overlay_D2F52133_E5AA_1AE8_41D0_DD237D27A7DD",
  "this.popup_DDB67E6D_E5AA_077B_41EB_FC229823E01C",
  "this.overlay_A7212136_E5A6_3AE9_41E2_E3EA5BE95896",
  "this.popup_A6FCD7B0_E5A6_05E9_41BF_9AE914564AF3"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -175.86,
   "class": "AdjacentPanorama",
   "backwardYaw": 137.21,
   "panorama": "this.panorama_EADCE602_E147_B8E5_41E0_A3348388DA41",
   "distance": 1
  },
  {
   "yaw": -172.41,
   "class": "AdjacentPanorama",
   "backwardYaw": -73.33,
   "panorama": "this.panorama_EA80C6E4_E147_992C_41D3_588476BDC207",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_82C12CA3_EC9A_0BEF_41EC_167990F4DC6E",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_EADC0494_E147_99EC_41E6_6E85636B3ABA_t.jpg",
 "hfovMax": 120
},
{
 "levels": [
  {
   "url": "media/popup_D9A55FA7_E59E_05F7_41B7_CD44641293DF_0_0.jpg",
   "width": 1920,
   "class": "ImageResourceLevel",
   "height": 1280
  },
  {
   "url": "media/popup_D9A55FA7_E59E_05F7_41B7_CD44641293DF_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 682
  },
  {
   "url": "media/popup_D9A55FA7_E59E_05F7_41B7_CD44641293DF_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 341
  }
 ],
 "id": "ImageResource_B52B94B6_E5EA_1BE9_41CE_A00E9E396094",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "yaw": 39.26,
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -174.35,
    "path": "shortest",
    "targetPitch": 2.51,
    "pitchSpeed": 11.43,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 21.96
   },
   {
    "targetYaw": 154.38,
    "path": "shortest",
    "targetPitch": 0.06,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 112.42,
    "path": "shortest",
    "targetPitch": 41.77,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 0.88,
    "path": "shortest",
    "targetPitch": -1.19,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_82EE6A41_EC9A_0EAB_41EA_5C6088C757B6",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 10.1,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -176.86,
    "path": "shortest",
    "targetPitch": -12.56,
    "pitchSpeed": 10.12,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 19.33
   },
   {
    "targetYaw": 152.62,
    "path": "shortest",
    "targetPitch": -2.2,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 90.31,
    "path": "shortest",
    "targetPitch": -1.19,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 1.38,
    "path": "shortest",
    "targetPitch": -8.48,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8223DC0E_EC9A_0AB9_4174_D0748244655E",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 10.1,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -176.86,
    "path": "shortest",
    "targetPitch": -12.56,
    "pitchSpeed": 10.12,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 19.33
   },
   {
    "targetYaw": 152.62,
    "path": "shortest",
    "targetPitch": -2.2,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 90.31,
    "path": "shortest",
    "targetPitch": -1.19,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 1.38,
    "path": "shortest",
    "targetPitch": -8.48,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8230FC2A_EC9A_0AF9_41E8_2B087DBDAB44",
 "class": "PanoramaCamera"
},
{
 "fieldOfViewOverlayInsideColor": "#FF0000",
 "id": "map_D021BC9C_F1CC_DED3_41DF_BD35CA2B988A",
 "fieldOfViewOverlayOutsideColor": "#000000",
 "width": 1260,
 "image": {
  "levels": [
   {
    "url": "media/map_D021BC9C_F1CC_DED3_41DF_BD35CA2B988A.jpeg",
    "width": 1260,
    "class": "ImageResourceLevel",
    "height": 834
   },
   {
    "url": "media/map_D021BC9C_F1CC_DED3_41DF_BD35CA2B988A_lq.jpeg",
    "width": 314,
    "tags": "preload",
    "class": "ImageResourceLevel",
    "height": 208
   }
  ],
  "class": "ImageResource"
 },
 "minimumZoomFactor": 0.5,
 "label": "Plano Primer Piso",
 "class": "Map",
 "overlays": [
  "this.overlay_EEEE2C28_F1CD_5DF3_41E7_1CAE88E1FC7A",
  "this.overlay_D29EA0C8_F1CF_A6B3_41DF_889C3DAF1829",
  "this.overlay_EEABF6AC_F1CF_EAF3_41CE_9ABF2C060AC8",
  "this.overlay_D18CBD45_F1CF_5FBD_41E8_3F48F1EAD4B5",
  "this.overlay_D0F6F9A7_F1CC_E6FD_41E1_06BE5EEFF233",
  "this.overlay_D1642474_F1CC_AE52_41E1_C1D4C3468E97",
  "this.overlay_D3436E2F_F1CC_BDCD_41E2_1AF8F2C464D3"
 ],
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "thumbnailUrl": "media/map_D021BC9C_F1CC_DED3_41DF_BD35CA2B988A_t.jpg",
 "fieldOfViewOverlayRadiusScale": 0.3,
 "fieldOfViewOverlayOutsideOpacity": 0,
 "initialZoomFactor": 1,
 "scaleMode": "fit_inside",
 "maximumZoomFactor": 1.2,
 "height": 834
},
{
 "levels": [
  {
   "url": "media/popup_DF14DA02_E5AA_0EA9_41E1_63BE602FBBC7_0_0.jpg",
   "width": 1920,
   "class": "ImageResourceLevel",
   "height": 1631
  },
  {
   "url": "media/popup_DF14DA02_E5AA_0EA9_41E1_63BE602FBBC7_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 869
  },
  {
   "url": "media/popup_DF14DA02_E5AA_0EA9_41E1_63BE602FBBC7_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 434
  }
 ],
 "id": "ImageResource_B51E24D4_E5EA_1BA9_41D2_C855347DCBAA",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "yaw": -135.66,
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "pitch": 36.93
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -106.14,
    "path": "shortest",
    "targetPitch": -8.73,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -2.89,
    "path": "shortest",
    "targetPitch": -9.99,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 61.67,
    "path": "shortest",
    "targetPitch": -1.19,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 122.72,
    "path": "shortest",
    "targetPitch": 0.06,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 174.47,
    "path": "shortest",
    "targetPitch": -4.46,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 51.63,
    "path": "shortest",
    "targetPitch": -2.45,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "panorama_EAF0B794_E147_67ED_41D1_DF56AF0E8AFE_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -37.79,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -176.86,
    "path": "shortest",
    "targetPitch": -12.56,
    "pitchSpeed": 7.8,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 14.66
   },
   {
    "targetYaw": 152.62,
    "path": "shortest",
    "targetPitch": -2.2,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 90.31,
    "path": "shortest",
    "targetPitch": -1.19,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 1.38,
    "path": "shortest",
    "targetPitch": -8.48,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_82DFCAC5_EC9A_0FAB_41E0_2088F7C9D540",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -178.18,
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -174.35,
    "path": "shortest",
    "targetPitch": 2.51,
    "pitchSpeed": 1.22,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 1.45
   },
   {
    "targetYaw": 154.38,
    "path": "shortest",
    "targetPitch": 0.06,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 112.42,
    "path": "shortest",
    "targetPitch": 41.77,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 0.88,
    "path": "shortest",
    "targetPitch": -1.19,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_98F9B74F_EC9A_06B7_41E8_F8CDA0CB79F4",
 "class": "PanoramaCamera"
},
{
 "levels": [
  {
   "url": "media/popup_DC15C8AD_E5AE_0BFB_41BC_B6486BCD8164_0_0.jpg",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  },
  {
   "url": "media/popup_DC15C8AD_E5AE_0BFB_41BC_B6486BCD8164_0_1.jpg",
   "width": 682,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_DC15C8AD_E5AE_0BFB_41BC_B6486BCD8164_0_2.jpg",
   "width": 341,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_B51AD4CD_E5EA_1BBB_41E7_F7AFEFD195B8",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "yaw": -80.24,
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 0,
    "path": "shortest",
    "targetPitch": 0.91,
    "pitchSpeed": 25.13,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 49.48
   },
   {
    "targetYaw": 53.38,
    "path": "shortest",
    "targetPitch": 0.57,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 98.86,
    "path": "shortest",
    "targetPitch": -0.44,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -143.82,
    "path": "shortest",
    "targetPitch": 3.58,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -99.61,
    "hfovSpeed": 33.25,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetHfov": 80,
    "targetPitch": 3.58,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -50.12,
    "path": "shortest",
    "targetPitch": -3.2,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -15.45,
    "path": "shortest",
    "targetPitch": 0.82,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_82F3AA6F_EC9A_0F77_41E7_96DB88E01F3D",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -26.68,
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -154.5,
    "path": "shortest",
    "targetPitch": 1.92,
    "pitchSpeed": 30.42,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 60.12
   },
   {
    "targetYaw": -84.79,
    "path": "shortest",
    "targetPitch": 0.06,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 157.89,
    "path": "shortest",
    "targetPitch": -1.95,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 33.79,
    "path": "shortest",
    "targetPitch": -5.46,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_824C8BCE_EC9A_0DB9_41D8_549AE17C5842",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -0.13,
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 84.66,
    "path": "shortest",
    "targetPitch": -1.51,
    "pitchSpeed": 8,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 15.06
   },
   {
    "targetYaw": -109.66,
    "path": "shortest",
    "targetPitch": -9.48,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -25,
    "path": "shortest",
    "targetPitch": -14.76,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 84.28,
    "path": "shortest",
    "targetPitch": -24.81,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 175.98,
    "path": "shortest",
    "targetPitch": -1.7,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_828E4B3A_EC9A_0ED9_41E7_B09A2D86E932",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -87.42,
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "pitch": 1.67
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -104.88,
    "path": "shortest",
    "targetPitch": 20.66,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -164.68,
    "path": "shortest",
    "targetPitch": 0.31,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 138.05,
    "path": "shortest",
    "targetPitch": 2.58,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 75.74,
    "path": "shortest",
    "targetPitch": 8.35,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 75.49,
    "path": "shortest",
    "targetPitch": -12.75,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "panorama_EF3E255F_E364_5063_41EA_23F03465E467_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -131.63,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -175.98,
    "path": "shortest",
    "targetPitch": -5.53,
    "pitchSpeed": 4.82,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 8.67
   },
   {
    "targetYaw": 11.68,
    "path": "shortest",
    "targetPitch": 1.82,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 12.18,
    "path": "shortest",
    "targetPitch": -9.23,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 41.58,
    "path": "shortest",
    "targetPitch": -6.47,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 93.08,
    "path": "shortest",
    "targetPitch": -5.21,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 113.93,
    "path": "shortest",
    "targetPitch": 17.65,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_84F77E28_EC9A_06F9_41E6_3B34620E2636",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 12.94,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 0,
    "path": "shortest",
    "targetPitch": 0,
    "pitchSpeed": 6.42,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 11.89
   },
   {
    "targetYaw": -38.31,
    "path": "shortest",
    "targetPitch": -1.19,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -18.46,
    "path": "shortest",
    "targetPitch": -32.09,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 35.8,
    "path": "shortest",
    "targetPitch": -10.24,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -3.64,
    "path": "shortest",
    "targetPitch": 37.24,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_814B1936_EC9A_0AE9_41AE_74BDF4B233C3",
 "class": "PanoramaCamera"
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "audio": {
  "oggUrl": "media/audio_F98AA82B_E366_3B11_41C6_1D645BB1CBD3.ogg",
  "mp3Url": "media/audio_F98AA82B_E366_3B11_41C6_1D645BB1CBD3.mp3",
  "class": "AudioResource"
 },
 "id": "audio_F98AA82B_E366_3B11_41C6_1D645BB1CBD3",
 "data": {
  "label": "Background (Full)"
 }
},
{
 "initialPosition": {
  "yaw": 15.4,
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 0,
    "path": "shortest",
    "targetPitch": 0,
    "pitchSpeed": 3.5,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 6.03
   },
   {
    "targetYaw": -98.6,
    "path": "shortest",
    "targetPitch": -4.46,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -52.88,
    "path": "shortest",
    "targetPitch": -2.95,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 80.27,
    "path": "shortest",
    "targetPitch": -0.94,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 127.49,
    "path": "shortest",
    "targetPitch": -3.2,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -167.94,
    "path": "shortest",
    "targetPitch": -2.95,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -107.65,
    "path": "shortest",
    "targetPitch": 24.93,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_83679D69_EC9A_057B_41EB_14D9F5938B0D",
 "class": "PanoramaCamera"
},
{
 "levels": [
  {
   "url": "media/popup_DFA3DD2D_E5BA_0AFB_41CE_0161BF92F0DD_0_0.jpg",
   "width": 2000,
   "class": "ImageResourceLevel",
   "height": 951
  },
  {
   "url": "media/popup_DFA3DD2D_E5BA_0AFB_41CE_0161BF92F0DD_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 486
  },
  {
   "url": "media/popup_DFA3DD2D_E5BA_0AFB_41CE_0161BF92F0DD_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 243
  }
 ],
 "id": "ImageResource_B52354C2_E5EA_1BA9_41DB_0CC132368D99",
 "class": "ImageResource"
},
{
 "levels": [
  {
   "url": "media/popup_A6FCD7B0_E5A6_05E9_41BF_9AE914564AF3_0_0.jpg",
   "width": 1920,
   "class": "ImageResourceLevel",
   "height": 1948
  },
  {
   "url": "media/popup_A6FCD7B0_E5A6_05E9_41BF_9AE914564AF3_0_1.jpg",
   "width": 1009,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_A6FCD7B0_E5A6_05E9_41BF_9AE914564AF3_0_2.jpg",
   "width": 504,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_B513E4DE_E5EA_1B59_41E2_65C0B4F16EB5",
 "class": "ImageResource"
},
{
 "autoplay": true,
 "loop": true,
 "class": "DirectionalPanoramaAudio",
 "audio": "this.audioresource_FBC32FEF_E35B_D511_41E0_D3CB3105CCD6",
 "pitch": 0,
 "maximumAngle": 360,
 "id": "audio_FBC33FEF_E35B_D511_41E8_6E4AFADBB036",
 "yaw": 0,
 "data": {
  "label": "Birds stereo 01"
 }
},
{
 "thumbnailUrl": "media/video_DA3322B5_E59A_1FE8_41BA_BC17D10E3272_t.jpg",
 "id": "video_DA3322B5_E59A_1FE8_41BA_BC17D10E3272",
 "width": 1024,
 "loop": false,
 "scaleMode": "fit_inside",
 "label": "espaciodisponible_x264",
 "class": "Video",
 "height": 768,
 "video": {
  "width": 1024,
  "mp4Url": "media/video_DA3322B5_E59A_1FE8_41BA_BC17D10E3272.mp4",
  "class": "VideoResource",
  "height": 768
 }
},
{
 "headerBackgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "closeButtonBorderColor": "#000000",
 "id": "window_C872055D_E4E6_055B_4182_67323F375807",
 "backgroundOpacity": 1,
 "titleFontColor": "#000000",
 "width": "90%",
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Window",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "titlePaddingRight": 5,
 "titlePaddingTop": 5,
 "footerBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "headerBorderSize": 0,
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "backgroundColor": [],
 "verticalAlign": "middle",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
 "height": "90%",
 "title": "",
 "borderSize": 0,
 "titleFontStyle": "normal",
 "headerPaddingRight": 0,
 "bodyBackgroundOpacity": 1,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "headerPaddingLeft": 0,
 "bodyPaddingLeft": 0,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "headerBackgroundOpacity": 1,
 "scrollBarColor": "#000000",
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPaddingRight": 2,
 "bodyBorderColor": "#000000",
 "shadowBlurRadius": 6,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "footerBorderColor": "#000000",
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "closeButtonPaddingLeft": 2,
 "bodyPaddingTop": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "layout": "vertical",
 "closeButtonBorderRadius": 11,
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "children": [
  "this.htmlText_C872455D_E4E6_055B_4195_4480946DECFE",
  {
   "backgroundOpacity": 1,
   "width": "100%",
   "class": "WebFrame",
   "borderRadius": 0,
   "insetBorder": false,
   "paddingLeft": 0,
   "paddingRight": 0,
   "url": "https://www.educacionadventista.com/ensenanza/nivel-inicial/",
   "backgroundColorRatios": [],
   "propagateClick": false,
   "minHeight": 0,
   "backgroundColor": [],
   "minWidth": 0,
   "height": "89%",
   "paddingTop": 0,
   "backgroundColorDirection": "vertical",
   "paddingBottom": 0,
   "borderSize": 0,
   "scrollEnabled": true,
   "data": {
    "name": "WebFrame75383"
   },
   "shadow": false
  }
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "shadowHorizontalLength": 3,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBorderSize": 0,
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 0,
 "titleFontSize": "1.29vmin",
 "backgroundColorRatios": [],
 "closeButtonBorderSize": 0,
 "closeButtonPaddingBottom": 2,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 0,
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "footerBackgroundOpacity": 1,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 20,
 "veilOpacity": 0.4,
 "shadowVerticalLength": 0,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 0,
 "paddingTop": 0,
 "closeButtonBackgroundOpacity": 1,
 "bodyPaddingBottom": 0,
 "titlePaddingLeft": 5,
 "closeButtonPaddingTop": 2,
 "closeButtonIconColor": "#000000",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "bodyPaddingRight": 0,
 "closeButtonBackgroundColor": [],
 "shadowSpread": 1,
 "data": {
  "name": "Window66936"
 },
 "titleFontFamily": "Arial",
 "bodyBorderSize": 0
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_EADDBD3C_E141_6B1D_41C2_3B8C0C9C91C2_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EADDBD3C_E141_6B1D_41C2_3B8C0C9C91C2_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EADDBD3C_E141_6B1D_41C2_3B8C0C9C91C2_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EADDBD3C_E141_6B1D_41C2_3B8C0C9C91C2_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EADDBD3C_E141_6B1D_41C2_3B8C0C9C91C2_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EADDBD3C_E141_6B1D_41C2_3B8C0C9C91C2_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EADDBD3C_E141_6B1D_41C2_3B8C0C9C91C2_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EADDBD3C_E141_6B1D_41C2_3B8C0C9C91C2_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EADDBD3C_E141_6B1D_41C2_3B8C0C9C91C2_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EADDBD3C_E141_6B1D_41C2_3B8C0C9C91C2_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EADDBD3C_E141_6B1D_41C2_3B8C0C9C91C2_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EADDBD3C_E141_6B1D_41C2_3B8C0C9C91C2_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EADDBD3C_E141_6B1D_41C2_3B8C0C9C91C2_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EADDBD3C_E141_6B1D_41C2_3B8C0C9C91C2_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EADDBD3C_E141_6B1D_41C2_3B8C0C9C91C2_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EADDBD3C_E141_6B1D_41C2_3B8C0C9C91C2_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EADDBD3C_E141_6B1D_41C2_3B8C0C9C91C2_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EADDBD3C_E141_6B1D_41C2_3B8C0C9C91C2_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EADDBD3C_E141_6B1D_41C2_3B8C0C9C91C2_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EADDBD3C_E141_6B1D_41C2_3B8C0C9C91C2_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EADDBD3C_E141_6B1D_41C2_3B8C0C9C91C2_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_EADDBD3C_E141_6B1D_41C2_3B8C0C9C91C2_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EADDBD3C_E141_6B1D_41C2_3B8C0C9C91C2_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EADDBD3C_E141_6B1D_41C2_3B8C0C9C91C2_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EADDBD3C_E141_6B1D_41C2_3B8C0C9C91C2_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Planta Baja - Cancha - Acceso a Laboratorio",
 "hfovMin": "120%",
 "id": "panorama_EADDBD3C_E141_6B1D_41C2_3B8C0C9C91C2",
 "overlays": [
  "this.overlay_ED5E2BF6_E2DA_3CF3_41C5_8F1E4907B579",
  "this.overlay_F2DEDCCC_E2E6_3B10_41EB_5C66F7EE525F",
  "this.overlay_F25AAD4D_E2E6_D511_41D6_FDF65186072D",
  "this.overlay_FFCD81AC_E339_ED17_41E9_EA8DAD973F56",
  "this.panorama_EADDBD3C_E141_6B1D_41C2_3B8C0C9C91C2_tcap0",
  "this.overlay_DA30CE05_E5FA_06AB_41E8_F25B34FDB072",
  "this.overlay_A5901A86_E5FA_0FA9_41B0_F69EBDB6C723"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -140.74,
   "class": "AdjacentPanorama",
   "backwardYaw": -64.62,
   "panorama": "this.panorama_EF3E255F_E364_5063_41EA_23F03465E467",
   "distance": 1
  },
  {
   "yaw": -161.3,
   "class": "AdjacentPanorama",
   "backwardYaw": -115.59,
   "panorama": "this.panorama_EADC6654_E140_996D_41E8_8F536A929374",
   "distance": 1
  },
  {
   "yaw": -75.59,
   "class": "AdjacentPanorama",
   "backwardYaw": 17.93,
   "panorama": "this.panorama_EADDA963_E141_EB2B_41DB_CD069D3B479A",
   "distance": 1
  },
  {
   "yaw": 1.82,
   "class": "AdjacentPanorama",
   "backwardYaw": 179.99,
   "panorama": "this.panorama_EA80C6E4_E147_992C_41D3_588476BDC207",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_82C12CA3_EC9A_0BEF_41EC_167990F4DC6E",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_EADDBD3C_E141_6B1D_41C2_3B8C0C9C91C2_t.jpg",
 "hfovMax": 120
},
{
 "autoplay": true,
 "loop": true,
 "class": "DirectionalPanoramaAudio",
 "audio": "this.audioresource_FBC32FEF_E35B_D511_41E0_D3CB3105CCD6",
 "pitch": 0,
 "maximumAngle": 360,
 "id": "audio_FBD14299_E35A_2F31_41BC_935707658DC3",
 "yaw": 0,
 "data": {
  "label": "Birds stereo 01"
 }
},
{
 "levels": [
  {
   "url": "media/popup_D287ACCB_E5AA_0BBF_41E6_2D957052D5AD_0_0.jpg",
   "width": 1920,
   "class": "ImageResourceLevel",
   "height": 1280
  },
  {
   "url": "media/popup_D287ACCB_E5AA_0BBF_41E6_2D957052D5AD_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 682
  },
  {
   "url": "media/popup_D287ACCB_E5AA_0BBF_41E6_2D957052D5AD_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 341
  }
 ],
 "id": "ImageResource_B51F44D5_E5EA_1BAB_41E8_0937E2005069",
 "class": "ImageResource"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -0.07,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_DF14DA02_E5AA_0EA9_41E1_63BE602FBBC7",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_DF14DA02_E5AA_0EA9_41E1_63BE602FBBC7_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 869
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 3.46,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "pitch": -8.99
},
{
 "initialPosition": {
  "yaw": -88.51,
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 0,
    "path": "shortest",
    "targetPitch": 0,
    "pitchSpeed": 16.1,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 31.33
   },
   {
    "targetYaw": -94.08,
    "hfovSpeed": 33.25,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetHfov": 80,
    "targetPitch": -1.95,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -139.05,
    "hfovSpeed": 33.25,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetHfov": 100,
    "targetPitch": -13.75,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 115.44,
    "hfovSpeed": 33.25,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetHfov": 80,
    "targetPitch": -4.71,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 133.52,
    "hfovSpeed": 33.25,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetHfov": 100,
    "targetPitch": -8.48,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_82890CE7_EC9A_0B77_41DE_54E4E260DED0",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -6.9,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -139.18,
    "path": "shortest",
    "targetPitch": 27.63,
    "pitchSpeed": 57.1,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 113.73
   },
   {
    "targetYaw": -145.58,
    "path": "shortest",
    "targetPitch": -10.49,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -70.97,
    "path": "shortest",
    "targetPitch": -13.5,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -8.42,
    "path": "shortest",
    "targetPitch": -4.21,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 116.44,
    "path": "shortest",
    "targetPitch": -6.72,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 174.98,
    "path": "shortest",
    "targetPitch": -2.2,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8670D5EC_EC9A_0579_41D5_97F6869E6F95",
 "class": "PanoramaCamera"
},
{
 "progressBarBorderSize": 0,
 "id": "MainViewer",
 "left": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 0,
 "class": "ViewerArea",
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 50,
 "toolTipFontFamily": "Georgia",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "minWidth": 100,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#FFFFFF",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "borderSize": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipBackgroundColor": "#000000",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 0,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 10,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 10,
 "toolTipPaddingTop": 7,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 500,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "paddingRight": 0,
 "progressBorderRadius": 0,
 "borderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "top": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 5,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 0.5,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#000000",
 "toolTipPaddingBottom": 7,
 "paddingBottom": 0,
 "toolTipFontSize": 13,
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeight": 10,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_32CC4EA6_16EF_8891_41B3_C36F5FCE49B7",
 "left": "0%",
 "children": [
  "this.Image_9511127C_9B79_D2C1_41D8_D080B87BFD84",
  "this.Container_9A7696F9_9256_4198_41E2_40E7CF09A427",
  "this.IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA",
  "this.Image_D58672B5_E4AA_1FEB_41E6_C3284163793C"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "0%",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "height": "12.832%",
 "minWidth": 1,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--- MENU"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "backgroundOpacity": 0,
 "width": 115.05,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "scrollBarWidth": 10,
 "height": 641,
 "minWidth": 1,
 "layout": "absolute",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-- SETTINGS"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0AEF1C12_16A3_8FB1_4188_D5C88CE581C3",
 "left": 14,
 "width": 344,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "visible",
 "children": [
  "this.Image_E7B2A2F0_F0B5_AA52_41D2_6B37608AD1C2"
 ],
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": 10,
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "scrollBarWidth": 10,
 "height": 91,
 "minWidth": 1,
 "layout": "absolute",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--STICKER"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_386C68AA_17CC_0B05_4191_7DAFDF1C1A4B",
 "left": "0%",
 "children": [
  "this.Container_386EC8AA_17CC_0B05_41A6_7EFCA2EDC23B",
  "this.Container_386C28AA_17CC_0B05_41B7_3334E854CA29"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--INFO photoalbum"
 },
 "shadow": false,
 "visible": false,
 "click": "this.setComponentVisibility(this.Container_386C68AA_17CC_0B05_4191_7DAFDF1C1A4B, false, 0, null, null, false)"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_381217E8_17DC_0505_41A2_85B8D0083AEA",
 "left": "0%",
 "children": [
  "this.Container_3811F7E8_17DC_0505_417B_3406AEA143C9"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--PANORAMA LIST"
 },
 "shadow": false,
 "visible": false,
 "click": "this.setComponentVisibility(this.Container_381217E8_17DC_0505_41A2_85B8D0083AEA, false, 0, null, null, false)"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_2792A64E_17CC_071D_41B0_BEA23997C067",
 "left": "0%",
 "children": [
  "this.Container_2792F64D_17CC_071F_415E_8686768A06D3"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--LOCATION"
 },
 "shadow": false,
 "visible": false,
 "click": "this.setComponentVisibility(this.Container_2792A64E_17CC_071D_41B0_BEA23997C067, false, 0, null, null, false)"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_24580B6E_173C_0D1A_41B0_1B17CFD194C1",
 "left": "0%",
 "children": [
  "this.Container_245BFB6E_173C_0D1A_41B3_7C2B11B7D45E"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--FLOORPLAN"
 },
 "shadow": false,
 "visible": false,
 "click": "this.setComponentVisibility(this.Container_24580B6E_173C_0D1A_41B0_1B17CFD194C1, false, 0, null, null, false)"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_1831720E_17B1_6AC3_41B2_FDD66A00A2E5",
 "left": "0%",
 "children": [
  "this.Container_183FA20E_17B1_6AC3_41A6_A5FD4E159AED",
  "this.Container_1830920E_17B1_6AC3_41B2_4E4AC4718E27"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--CONTACT"
 },
 "shadow": false,
 "visible": false,
 "click": "this.setComponentVisibility(this.Container_1831720E_17B1_6AC3_41B2_FDD66A00A2E5, false, 0, null, null, false)"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_004462E1_0DFB_B53A_4192_155A961E0B9D",
 "left": "0%",
 "children": [
  "this.Container_03921F8D_0DF9_AB05_4179_670E86B12CD7"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  0.49,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "creationPolicy": "inAdvance",
 "backgroundColor": [
  "#000000",
  "#666666",
  "#000000"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Advertising 1"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_8DFFEE18_ECEA_06D9_41DA_706F561877D5",
 "left": "0%",
 "children": [
  "this.Container_8DFF3E18_ECEA_06D9_41D0_0B01BA3EBFF5",
  "this.Container_8DFF8E18_ECEA_06D9_41DF_9CBF28F0822C"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--Revista Institucional"
 },
 "shadow": false,
 "visible": false,
 "click": "this.setComponentVisibility(this.Container_8DFFEE18_ECEA_06D9_41DA_706F561877D5, false, 0, null, null, false)"
},
{
 "id": "veilPopupPanorama",
 "left": 0,
 "showEffect": {
  "duration": 350,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "backgroundOpacity": 0.55,
 "right": 0,
 "class": "UIComponent",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 0,
 "top": 0,
 "bottom": 0,
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "data": {
  "name": "UIComponent138960"
 },
 "shadow": false,
 "visible": false
},
{
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "backgroundOpacity": 1,
 "right": 0,
 "class": "ZoomImage",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "backgroundColorRatios": [],
 "propagateClick": false,
 "minHeight": 0,
 "top": 0,
 "bottom": 0,
 "backgroundColor": [],
 "minWidth": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "scaleMode": "custom",
 "data": {
  "name": "ZoomImage138961"
 },
 "shadow": false,
 "visible": false
},
{
 "textDecoration": "none",
 "fontFamily": "Arial",
 "horizontalAlign": "center",
 "id": "closeButtonPopupPanorama",
 "backgroundOpacity": 0.3,
 "showEffect": {
  "duration": 350,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadowColor": "#000000",
 "right": 10,
 "iconHeight": 20,
 "class": "CloseButton",
 "paddingRight": 5,
 "paddingLeft": 5,
 "borderRadius": 0,
 "iconColor": "#000000",
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "propagateClick": false,
 "minHeight": 0,
 "top": 10,
 "verticalAlign": "middle",
 "rollOverIconColor": "#666666",
 "pressedIconColor": "#888888",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderColor": "#000000",
 "minWidth": 0,
 "mode": "push",
 "fontSize": "1.29vmin",
 "paddingTop": 5,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 5,
 "label": "",
 "fontStyle": "normal",
 "borderSize": 0,
 "iconLineWidth": 5,
 "gap": 5,
 "layout": "horizontal",
 "data": {
  "name": "CloseButton138962"
 },
 "shadow": false,
 "iconWidth": 20,
 "visible": false,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "backgroundOpacity": 0,
 "width": 58,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "transparencyActive": true,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "data": {
  "name": "IconButton MUTE"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "backgroundOpacity": 0,
 "width": 58,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "transparencyActive": true,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_CB5F7EE7_E4AA_0777_41CF_BE76A5BB2BC6",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "10%",
 "minWidth": 0,
 "paddingTop": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText78852"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_CABFA973_E4BA_0D68_41D2_3ED511317D81",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "10%",
 "minWidth": 0,
 "paddingTop": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText78852"
 },
 "shadow": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.55,
   "yaw": 124.52,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E8E42205_E364_33E7_41E6_A73F2DB39F27_1_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.95
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EADC6D16_E147_A8ED_41E7_7A006A29B117, this.camera_829D5B56_EC9A_0EA9_41D7_8C2394CF24ED); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_82A07170_ECA9_FD69_41EB_6EFFB2313B85",
   "pitch": -7.95,
   "hfov": 9.55,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 124.52
  }
 ],
 "id": "overlay_E8E4B205_E364_33E7_41CF_B9714A4AE603",
 "data": {
  "label": "Circle 01c"
 }
},
{
 "inertia": false,
 "id": "panorama_E8E42205_E364_33E7_41E6_A73F2DB39F27_tcap0",
 "angle": -21,
 "distance": 50,
 "rotate": false,
 "hfov": 36,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_EADDC172_E141_BB25_41D8_E09A626FB8FD_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.82,
   "yaw": 124.64,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E8E42205_E364_33E7_41E6_A73F2DB39F27_1_HS_1_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.33
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E8E42205_E364_33E7_41E6_A73F2DB39F27_1_HS_1_0.png",
      "width": 302,
      "class": "ImageResourceLevel",
      "height": 182
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.33,
   "hfov": 10.82,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 124.64
  }
 ],
 "id": "overlay_A911B617_E59A_06D7_41EC_7B25297CDA02",
 "data": {
  "label": "    Recepci\u00f3n"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.25,
   "yaw": 25.05,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F52171BD_E4A4_5027_41E5_9EE998F7E297_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.82
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F5213C55_E4A4_D066_416D_85F4BFC80191, this.camera_826B9D20_EC9A_0AE9_41BD_044DDECB2D90); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8264F1A1_ECA9_FDEB_41EC_C42619788CEF",
   "pitch": -15.82,
   "hfov": 7.25,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 25.05
  }
 ],
 "id": "overlay_F3B0B892_E49A_0BA9_41D1_84F3583A316F",
 "data": {
  "label": "Arrow 04"
 }
},
{
 "inertia": false,
 "id": "panorama_F52171BD_E4A4_5027_41E5_9EE998F7E297_tcap0",
 "angle": -21,
 "distance": 50,
 "rotate": false,
 "hfov": 36,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_EADDC172_E141_BB25_41D8_E09A626FB8FD_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 33.16,
   "yaw": -167.06,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E9C4108D_E46A_3BBB_41E4_FCB0E78FC031_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.12
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E9C4F462_E46B_FB69_41EA_EBF76426CC46, this.camera_813AE9C0_EC9A_0DA9_41EB_D1C4C2A28541); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_826E619C_ECA9_FDD9_4177_6D672062F706",
   "pitch": -12.12,
   "hfov": 33.16,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -167.06
  }
 ],
 "id": "overlay_C1C5C87E_E49A_0B59_41D6_89ECE47257EC",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 19.43,
   "yaw": -0.5,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E9C4108D_E46A_3BBB_41E4_FCB0E78FC031_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 33.73
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E9C2B1AC_E46A_1DF9_41D2_1E8C48B2DC22, this.camera_8131E9A6_EC9A_0DE9_41D6_5F74F98E4E1B); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_826EE19C_ECA9_FDD9_41E6_0CDC376214A6",
   "pitch": 33.73,
   "hfov": 19.43,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -0.5
  }
 ],
 "id": "overlay_C6C4B3D3_E49A_FDAF_41C0_A3830852E839",
 "data": {
  "label": "Circle Arrow 06"
 }
},
{
 "inertia": false,
 "id": "panorama_E9C4108D_E46A_3BBB_41E4_FCB0E78FC031_tcap0",
 "angle": -21,
 "distance": 50,
 "rotate": false,
 "hfov": 36,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_EADDC172_E141_BB25_41D8_E09A626FB8FD_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.02,
   "yaw": -66.75,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EA8920BB_E140_B91B_41E9_D14906604A6B_1_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.61
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EAF0B794_E147_67ED_41D1_DF56AF0E8AFE, this.camera_83418ECF_EC9A_07B7_41E6_A8C64D1F0E7D); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8258517A_ECA9_FD58_41D7_5DDEC84A852F",
   "pitch": -14.61,
   "hfov": 15.02,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -66.75
  }
 ],
 "id": "overlay_F7FF712D_E141_9B3C_41DF_65CA15D3BA84",
 "data": {
  "label": "Circle 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.49,
   "yaw": -164.6,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EA8920BB_E140_B91B_41E9_D14906604A6B_1_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.13
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E8F154F9_E364_F02F_41E0_7ADE7EBBD519, this.camera_83AB8E4A_EC9A_06B9_41EC_2F04C7AD57C1); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8258A17A_ECA9_FD58_41B7_25B64EF63654",
   "pitch": -15.13,
   "hfov": 15.49,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -164.6
  }
 ],
 "id": "overlay_F66BE7B8_E141_6724_41AE_34836A086F6D",
 "data": {
  "label": "Circle 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.53,
   "yaw": 136.67,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EA8920BB_E140_B91B_41E9_D14906604A6B_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.23
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E8FADA72_E364_F022_41C2_C29F7A235EAF, this.camera_839C3E86_EC9A_07A9_41C8_05F7A2E978C8); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8258F17A_ECA9_FD58_41C6_1F3B2FAF315C",
   "pitch": -2.23,
   "hfov": 7.53,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 136.67
  }
 ],
 "id": "overlay_FF05FD0B_E4A6_0AB8_41B9_3D5A37DAA694",
 "data": {
  "label": "Arrow 04"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.85,
   "yaw": 102.93,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EA8920BB_E140_B91B_41E9_D14906604A6B_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 22.18
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8259417A_ECA9_FD58_41DC_AFEC9F95E7E8",
   "pitch": 22.18,
   "hfov": 5.85,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 102.93
  }
 ],
 "id": "overlay_F8A96E79_E4A6_075B_41E9_20C2F9BB5210",
 "data": {
  "label": "Arrow 04"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.22,
   "yaw": 111.24,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EA8920BB_E140_B91B_41E9_D14906604A6B_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 10.15
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8259C17A_ECA9_FD58_41E1_6C61A9820EB1",
   "pitch": 10.15,
   "hfov": 6.22,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 111.24
  }
 ],
 "id": "overlay_FF14678F_E4A6_05B7_41D7_BB67CDF54487",
 "data": {
  "label": "Arrow 04"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.92,
   "yaw": -17.51,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EA8920BB_E140_B91B_41E9_D14906604A6B_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.53
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_825A217A_ECA9_FD58_41E0_4F970A658DA3",
   "pitch": -4.53,
   "hfov": 7.92,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -17.51
  }
 ],
 "id": "overlay_F8EA3E4D_E4BA_06BB_41A1_FD4060ACC595",
 "data": {
  "label": "Arrow 04"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.42,
   "yaw": -165.07,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EA8920BB_E140_B91B_41E9_D14906604A6B_1_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.2
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_825A717A_ECA9_FD58_41D1_6FDF31808541",
   "pitch": -2.2,
   "hfov": 8.42,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -165.07
  }
 ],
 "id": "overlay_FBB1E212_E4BE_1EA9_41E1_A8D3E19E06F7",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.7,
   "yaw": -110.47,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EA8920BB_E140_B91B_41E9_D14906604A6B_1_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.42
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_825AC17A_ECA9_FD58_41D3_120D29379552",
   "pitch": -1.42,
   "hfov": 5.7,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -110.47
  }
 ],
 "id": "overlay_F9B52226_E4BE_7EE8_41C4_D40855408A05",
 "data": {
  "label": "Circle Arrow 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.54,
   "yaw": 118.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EA8920BB_E140_B91B_41E9_D14906604A6B_1_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.02
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_825B217A_ECA9_FD58_41E7_81A70F8BC609",
   "pitch": -1.02,
   "hfov": 7.54,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 118.61
  }
 ],
 "id": "overlay_C32EB3C4_E4EA_3DA9_41E6_5BC138BC611C",
 "data": {
  "label": "Arrow 04"
 }
},
{
 "inertia": false,
 "id": "panorama_EA8920BB_E140_B91B_41E9_D14906604A6B_tcap0",
 "angle": -21,
 "distance": 50,
 "rotate": false,
 "hfov": 36,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_EADDC172_E141_BB25_41D8_E09A626FB8FD_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.43,
   "yaw": 10.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EA8920BB_E140_B91B_41E9_D14906604A6B_1_HS_9_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.33
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_DF9E2977_E5BA_0D57_419B_8772B96D5184, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_B52F84B9_E5EA_1BDB_41E7_C687ABD73920, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 4.43,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EA8920BB_E140_B91B_41E9_D14906604A6B_1_HS_9_0.png",
      "width": 122,
      "class": "ImageResourceLevel",
      "height": 104
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.33,
   "yaw": 10.55
  }
 ],
 "id": "overlay_DEA18338_E5BA_1ED8_41E9_9500F5C9AA2D",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.41,
   "yaw": 94.46,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EA8920BB_E140_B91B_41E9_D14906604A6B_1_HS_10_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.05
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_DB2EED64_E5BA_0569_41E1_3DEFF8F54968, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_B52F44BA_E5EA_1BD9_41D4_E2E2ACBF4197, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 4.41,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EA8920BB_E140_B91B_41E9_D14906604A6B_1_HS_10_0.png",
      "width": 122,
      "class": "ImageResourceLevel",
      "height": 104
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.05,
   "yaw": 94.46
  }
 ],
 "id": "overlay_DF82927A_E5BA_1F59_41D2_A008CD40E3B5",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.68,
   "yaw": -116.83,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EA8920BB_E140_B91B_41E9_D14906604A6B_1_HS_11_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.13
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_DE2FCAF8_E5BA_0F59_41E3_05A13E2CBDCD, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_B52094C0_E5EA_1BA9_41DE_D1A37769C15A, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 2.68,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EA8920BB_E140_B91B_41E9_D14906604A6B_1_HS_11_0.png",
      "width": 74,
      "class": "ImageResourceLevel",
      "height": 70
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.13,
   "yaw": -116.83
  }
 ],
 "id": "overlay_D99BEAF4_E5BA_0F69_41E2_B1B97A86AB8B",
 "data": {
  "label": "Image"
 }
},
{
 "rotationX": -25.61,
 "blending": 0,
 "id": "overlay_DA08A67F_E5EE_0757_41B4_085EFECDD11D",
 "roll": -3.55,
 "loop": true,
 "image": {
  "levels": [
   {
    "url": "media/overlay_DA08A67F_E5EE_0757_41B4_085EFECDD11D_t.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 768
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 55.94,
 "useHandCursor": true,
 "click": "this.openLink('https://api.whatsapp.com/send?phone=595981408400&text=Hola,%20me%20interesa%20el%20espacio%20publicitario%20en%20el%20Paseo%20Digital%20del%20Colegio%20Adventista.', '_blank')",
 "yaw": 14.39,
 "autoplay": true,
 "vfov": 36.62,
 "rotationY": -1.09,
 "class": "VideoPanoramaOverlay",
 "enabledInCardboard": true,
 "distance": 50,
 "hfov": 44.19,
 "data": {
  "label": "Video"
 },
 "videoVisibleOnStop": false,
 "video": {
  "width": 1024,
  "mp4Url": "media/video_DA3322B5_E59A_1FE8_41BA_BC17D10E3272.mp4",
  "class": "VideoResource",
  "height": 768
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.37,
   "yaw": -164.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EA8920BB_E140_B91B_41E9_D14906604A6B_1_HS_12_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.84
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E8F154F9_E364_F02F_41E0_7ADE7EBBD519, this.camera_8387CE68_EC9A_0779_41E5_CB2EDDFD0FE0); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EA8920BB_E140_B91B_41E9_D14906604A6B_1_HS_12_0.png",
      "width": 410,
      "class": "ImageResourceLevel",
      "height": 203
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.84,
   "hfov": 14.37,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -164.55
  }
 ],
 "id": "overlay_AC9D50C2_E47E_7BA9_41E0_69305EB1BD1C",
 "data": {
  "label": "    Entrada a Comedor"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.63,
   "yaw": -17.87,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EA8920BB_E140_B91B_41E9_D14906604A6B_1_HS_13_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.91
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EA8920BB_E140_B91B_41E9_D14906604A6B_1_HS_13_0.png",
      "width": 351,
      "class": "ImageResourceLevel",
      "height": 368
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.91,
   "hfov": 12.63,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -17.87
  }
 ],
 "id": "overlay_A489F8EB_EC6A_0B7F_41D6_143C9EF4B886",
 "data": {
  "label": "  Polideportivo"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.91,
   "yaw": -66.85,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EA8920BB_E140_B91B_41E9_D14906604A6B_1_HS_14_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.44
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EAF0B794_E147_67ED_41D1_DF56AF0E8AFE, this.camera_83594EF3_EC9A_076F_41C5_3E659481E1F8); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EA8920BB_E140_B91B_41E9_D14906604A6B_1_HS_14_0.png",
      "width": 395,
      "class": "ImageResourceLevel",
      "height": 219
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.44,
   "hfov": 13.91,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -66.85
  }
 ],
 "id": "overlay_A5C9E313_EC6E_3EAF_41E2_B2DFBF91EFC7",
 "data": {
  "label": "         Jard\u00edn"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.9,
   "yaw": 103.06,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EA8920BB_E140_B91B_41E9_D14906604A6B_1_HS_15_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 23.19
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EA8920BB_E140_B91B_41E9_D14906604A6B_1_HS_15_0.png",
      "width": 268,
      "class": "ImageResourceLevel",
      "height": 258
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 23.19,
   "hfov": 8.9,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 103.06
  }
 ],
 "id": "overlay_A57DFF2E_EC6E_06F9_41D6_D253C6B53104",
 "data": {
  "label": " Pasillo 2do Piso"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.7,
   "yaw": 136.8,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EA8920BB_E140_B91B_41E9_D14906604A6B_1_HS_16_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 19
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.74
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E8FADA72_E364_F022_41C2_C29F7A235EAF, this.camera_8368AEA8_EC9A_07F9_41BD_1FD6D2F77A36); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EA8920BB_E140_B91B_41E9_D14906604A6B_1_HS_16_0.png",
      "width": 269,
      "class": "ImageResourceLevel",
      "height": 332
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.74,
   "hfov": 9.7,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 136.8
  }
 ],
 "id": "overlay_A6E530B8_EC6A_1BD9_41DB_688949FEAA7B",
 "data": {
  "label": "  Preescolar"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.44,
   "yaw": 111.44,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EA8920BB_E140_B91B_41E9_D14906604A6B_1_HS_17_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 19
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 13.31
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EA8920BB_E140_B91B_41E9_D14906604A6B_1_HS_17_0.png",
      "width": 269,
      "class": "ImageResourceLevel",
      "height": 332
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 13.31,
   "hfov": 9.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 111.44
  }
 ],
 "id": "overlay_A5479A4A_EC6A_0EB9_41E5_60A682A2425C",
 "data": {
  "label": "   Laboratorio\u000d   Inform\u00e1tica"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.19,
   "yaw": 118.63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EA8920BB_E140_B91B_41E9_D14906604A6B_1_HS_18_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 20
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.46
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EA8920BB_E140_B91B_41E9_D14906604A6B_1_HS_18_0.png",
      "width": 255,
      "class": "ImageResourceLevel",
      "height": 332
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.46,
   "hfov": 9.19,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 118.63
  }
 ],
 "id": "overlay_A649BB2E_EC66_0EF9_41D2_40244F92C655",
 "data": {
  "label": "    Pasillo a 1er\u000d         Grado"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.23,
   "yaw": -110.73,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EA8920BB_E140_B91B_41E9_D14906604A6B_1_HS_19_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 19
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.43
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EA8920BB_E140_B91B_41E9_D14906604A6B_1_HS_19_0.png",
      "width": 227,
      "class": "ImageResourceLevel",
      "height": 271
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.43,
   "hfov": 8.23,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -110.73
  }
 ],
 "id": "overlay_B1634F45_EC66_06AB_416F_E879CC320A71",
 "data": {
  "label": "    1er Piso"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.72,
   "yaw": -164.9,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EA8920BB_E140_B91B_41E9_D14906604A6B_1_HS_20_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 18
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.98
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EA8920BB_E140_B91B_41E9_D14906604A6B_1_HS_20_0.png",
      "width": 270,
      "class": "ImageResourceLevel",
      "height": 308
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.98,
   "hfov": 9.72,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -164.9
  }
 ],
 "id": "overlay_B862F8B8_EC9A_0BD9_41C0_469B0D34187A",
 "data": {
  "label": "    Recepci\u00f3n"
 }
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_CAFE3160_E4AA_FD69_41EB_D1D860FFCD96",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "10%",
 "minWidth": 0,
 "paddingTop": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText66937"
 },
 "shadow": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 25.22,
   "yaw": 179.87,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E8F154F9_E364_F02F_41E0_7ADE7EBBD519_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.37
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EADC6D16_E147_A8ED_41E7_7A006A29B117, this.camera_830C1DF4_EC9A_0569_41E8_A7C4E3E392F1); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_82A1B170_ECA9_FD69_41E7_7C0484FF0F1B",
   "pitch": -5.37,
   "hfov": 25.22,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 179.87
  }
 ],
 "id": "overlay_E8F124F9_E364_F02F_41D0_832902505B4F",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.8,
   "yaw": 8.33,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E8F154F9_E364_F02F_41E0_7ADE7EBBD519_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.57
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EA8920BB_E140_B91B_41E9_D14906604A6B, this.camera_83883D4C_EC9A_0AB9_41D6_B8452FAECAF5); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_82A20170_ECA9_FD69_41E4_1062C018EAA7",
   "pitch": -10.57,
   "hfov": 14.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 8.33
  }
 ],
 "id": "overlay_E8F104F9_E364_F02F_41D6_08BBE9F9E8B2",
 "data": {
  "label": "Arrow 04"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.43,
   "yaw": -45.21,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E8F154F9_E364_F02F_41E0_7ADE7EBBD519_1_HS_2_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.11
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EAF0B794_E147_67ED_41D1_DF56AF0E8AFE, this.camera_83EAEC9E_EC9A_0BD9_41E4_80D90C1A2434); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_82A26170_ECA9_FD69_41E3_3F1C5F28A88E",
   "pitch": -8.11,
   "hfov": 14.43,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -45.21
  }
 ],
 "id": "overlay_E8F1E4F9_E364_F02F_41E8_A8B472F6FEC0",
 "data": {
  "label": "Circle 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.99,
   "yaw": -16.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E8F154F9_E364_F02F_41E0_7ADE7EBBD519_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.48
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EADDA963_E141_EB2B_41DB_CD069D3B479A, this.camera_83C8ECD8_EC9A_0B59_4184_CA8990318B0A); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_82A2B170_ECA9_FD69_41E0_E09D8BBA280C",
   "pitch": -3.48,
   "hfov": 8.99,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -16.02
  }
 ],
 "id": "overlay_E8F1C4F9_E364_F02F_41B8_1754F5427BF9",
 "data": {
  "label": "Arrow 04"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.56,
   "yaw": -87.05,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E8F154F9_E364_F02F_41E0_7ADE7EBBD519_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.32
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F5217E84_E4A4_50E6_41B1_B7D2D7D82D72, this.camera_835A5DBC_EC9A_05D9_41E0_FDDBBAF7A60C); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_82A2F170_ECA9_FD69_41D8_AE2A6F2809DA",
   "pitch": 1.32,
   "hfov": 13.56,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -87.05
  }
 ],
 "id": "overlay_C31B8514_E4EE_7AA9_41D4_43AEDD442820",
 "data": {
  "label": "Circle Arrow 06"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.5,
   "yaw": 99.76,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E8F154F9_E364_F02F_41E0_7ADE7EBBD519_1_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.21
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E8FADA72_E364_F022_41C2_C29F7A235EAF, this.camera_83730D80_EC9A_05A9_41E8_403C031E0329); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_82A34170_ECA9_FD69_41E6_12CC7DB72EDF",
   "pitch": -7.21,
   "hfov": 6.5,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 99.76
  }
 ],
 "id": "overlay_CC8FE97B_E4EA_0D58_41E6_E8F013FD1A4D",
 "data": {
  "label": "Arrow 04"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.56,
   "yaw": 89.69,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E8F154F9_E364_F02F_41E0_7ADE7EBBD519_1_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.98
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E8C90C1B_E365_F7E2_41D7_18E9C82943A5, this.camera_83AFFD12_EC9A_0AA9_41E6_344C79FE4324); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_82A3A170_ECA9_FD69_41D4_B8F9C45903B4",
   "pitch": -0.98,
   "hfov": 6.56,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 89.69
  }
 ],
 "id": "overlay_CC35E7D5_E4EA_05A8_41CF_5B4938DBAE93",
 "data": {
  "label": "Arrow 04"
 }
},
{
 "inertia": false,
 "id": "panorama_E8F154F9_E364_F02F_41E0_7ADE7EBBD519_tcap0",
 "angle": -21,
 "distance": 50,
 "rotate": false,
 "hfov": 36,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_EADDC172_E141_BB25_41D8_E09A626FB8FD_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.53,
   "yaw": -129.81,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E8F154F9_E364_F02F_41E0_7ADE7EBBD519_1_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.59
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showWindow(this.window_CB577EE9_E4AA_077B_41B7_C94A78458716, null, true); this.pauseGlobalAudios('window_CB577EE9_E4AA_077B_41B7_C94A78458716')",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 7.53,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E8F154F9_E364_F02F_41E0_7ADE7EBBD519_1_HS_8_0.png",
      "width": 209,
      "class": "ImageResourceLevel",
      "height": 209
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.59,
   "yaw": -129.81
  }
 ],
 "id": "overlay_CB79EF38_E4AA_06D9_41E5_CD5CD3919B69",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.46,
   "yaw": -99.28,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E8F154F9_E364_F02F_41E0_7ADE7EBBD519_1_HS_9_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.22
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_D9DC64D0_E5A6_1BA9_41D2_8E40C16E0AE7, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_B52824AE_E5EA_1BF9_41D1_26F4BE454FB9, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 2.46,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E8F154F9_E364_F02F_41E0_7ADE7EBBD519_1_HS_9_0.png",
      "width": 68,
      "class": "ImageResourceLevel",
      "height": 71
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.22,
   "yaw": -99.28
  }
 ],
 "id": "overlay_DE3D8805_E5BA_0AAB_4175_3F9DE96A0EA6",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.64,
   "yaw": 2.76,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E8F154F9_E364_F02F_41E0_7ADE7EBBD519_1_HS_10_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.12
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_DFF4557A_E5A6_0559_41E9_AD0F6383424C, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_B52924AF_E5EA_1BF7_41B7_9890BA482A42, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 4.64,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E8F154F9_E364_F02F_41E0_7ADE7EBBD519_1_HS_10_0.png",
      "width": 129,
      "class": "ImageResourceLevel",
      "height": 133
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.12,
   "yaw": 2.76
  }
 ],
 "id": "overlay_D9248A2D_E5A6_0EFB_41CB_9356369928C5",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.67,
   "yaw": 54.06,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E8F154F9_E364_F02F_41E0_7ADE7EBBD519_1_HS_11_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.85
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_DEC28F9F_E5A6_05D7_41DA_8B9EF6C61FA8, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_B52A64B5_E5EA_1BEB_41E3_E08F40DF7960, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 4.67,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E8F154F9_E364_F02F_41E0_7ADE7EBBD519_1_HS_11_0.png",
      "width": 129,
      "class": "ImageResourceLevel",
      "height": 133
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.85,
   "yaw": 54.06
  }
 ],
 "id": "overlay_DE1E265A_E5A6_0759_41D4_D852F7D5199E",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.63,
   "yaw": -42.14,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E8F154F9_E364_F02F_41E0_7ADE7EBBD519_1_HS_12_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 20
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.74
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_D9A55FA7_E59E_05F7_41B7_CD44641293DF, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_B52B94B6_E5EA_1BE9_41CE_A00E9E396094, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 2.63,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E8F154F9_E364_F02F_41E0_7ADE7EBBD519_1_HS_12_0.png",
      "width": 73,
      "class": "ImageResourceLevel",
      "height": 94
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.74,
   "yaw": -42.14
  }
 ],
 "id": "overlay_DE2CCE4E_E59E_06B9_41EB_AED06A553868",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.64,
   "yaw": -73.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E8F154F9_E364_F02F_41E0_7ADE7EBBD519_1_HS_13_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 20
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.79
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_D9285EF5_E59A_076B_41EB_851D422410FA, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_B52CA4B7_E5EA_1BD7_41A1_B1FBE70C638A, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 2.64,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E8F154F9_E364_F02F_41E0_7ADE7EBBD519_1_HS_13_0.png",
      "width": 73,
      "class": "ImageResourceLevel",
      "height": 94
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.79,
   "yaw": -73.98
  }
 ],
 "id": "overlay_DE7F1032_E59A_7AE8_41E2_B62948339D8B",
 "data": {
  "label": "Image"
 }
},
{
 "rotationX": 20.74,
 "blending": 0,
 "id": "overlay_DBA86EEE_E5EE_0779_41C9_1340599F405E",
 "roll": -2.47,
 "loop": true,
 "image": {
  "levels": [
   {
    "url": "media/overlay_DBA86EEE_E5EE_0779_41C9_1340599F405E_t.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 768
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 19.9,
 "useHandCursor": true,
 "click": "this.openLink('https://api.whatsapp.com/send?phone=595981408400&text=Hola,%20me%20interesa%20el%20espacio%20publicitario%20en%20el%20Paseo%20Digital%20del%20Colegio%20Adventista.', '_blank')",
 "yaw": 5.01,
 "autoplay": true,
 "vfov": 12.46,
 "rotationY": 0.04,
 "class": "VideoPanoramaOverlay",
 "enabledInCardboard": true,
 "distance": 50,
 "hfov": 26.84,
 "data": {
  "label": "Video"
 },
 "videoVisibleOnStop": false,
 "video": {
  "width": 1024,
  "mp4Url": "media/video_DA3322B5_E59A_1FE8_41BA_BC17D10E3272.mp4",
  "class": "VideoResource",
  "height": 768
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.79,
   "yaw": -45.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E8F154F9_E364_F02F_41E0_7ADE7EBBD519_1_HS_14_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.95
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EAF0B794_E147_67ED_41D1_DF56AF0E8AFE, this.camera_83FBFCBB_EC9A_0BDF_41E6_C12D60D5BEBD); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E8F154F9_E364_F02F_41E0_7ADE7EBBD519_1_HS_14_0.png",
      "width": 385,
      "class": "ImageResourceLevel",
      "height": 225
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.95,
   "hfov": 13.79,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -45.27
  }
 ],
 "id": "overlay_AF551397_E466_1DD7_41D8_9CB4D62B796A",
 "data": {
  "label": "          Jard\u00edn"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.11,
   "yaw": 8.46,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E8F154F9_E364_F02F_41E0_7ADE7EBBD519_1_HS_15_0_map.gif",
      "width": 15,
      "class": "ImageResourceLevel",
      "height": 19
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.38
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EA8920BB_E140_B91B_41E9_D14906604A6B, this.camera_83679D69_EC9A_057B_41EB_14D9F5938B0D); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E8F154F9_E364_F02F_41E0_7ADE7EBBD519_1_HS_15_0.png",
      "width": 425,
      "class": "ImageResourceLevel",
      "height": 527
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.38,
   "hfov": 15.11,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 8.46
  }
 ],
 "id": "overlay_AE8805A4_E46A_05E9_41A6_BE026171509D",
 "data": {
  "label": "       Comedor"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.64,
   "yaw": -15.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E8F154F9_E364_F02F_41E0_7ADE7EBBD519_1_HS_16_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.68
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EADDA963_E141_EB2B_41DB_CD069D3B479A, this.camera_83DE3CF5_EC9A_0B6B_41E6_C89C4BABDBCF); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E8F154F9_E364_F02F_41E0_7ADE7EBBD519_1_HS_16_0.png",
      "width": 351,
      "class": "ImageResourceLevel",
      "height": 370
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.68,
   "hfov": 12.64,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -15.94
  }
 ],
 "id": "overlay_A96FE3E7_E46A_1D77_41B4_56ED024F12B9",
 "data": {
  "label": "    Polideportivo"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.49,
   "yaw": -87,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E8F154F9_E364_F02F_41E0_7ADE7EBBD519_1_HS_17_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 22
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.36
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F5217E84_E4A4_50E6_41B1_B7D2D7D82D72, this.camera_83317DD7_EC9A_05A8_41E7_8E0DEDFFECB1); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E8F154F9_E364_F02F_41E0_7ADE7EBBD519_1_HS_17_0.png",
      "width": 346,
      "class": "ImageResourceLevel",
      "height": 486
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.36,
   "hfov": 12.49,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -87
  }
 ],
 "id": "overlay_A85E5517_E46E_3AD7_41D5_9249CA864001",
 "data": {
  "label": "     1er Piso"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.62,
   "yaw": 99.74,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E8F154F9_E364_F02F_41E0_7ADE7EBBD519_1_HS_18_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 19
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.21
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E8FADA72_E364_F022_41C2_C29F7A235EAF, this.camera_834E8DA0_EC9A_05E8_41DC_69C9C2D5EA05); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E8F154F9_E364_F02F_41E0_7ADE7EBBD519_1_HS_18_0.png",
      "width": 240,
      "class": "ImageResourceLevel",
      "height": 290
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.21,
   "hfov": 8.62,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 99.74
  }
 ],
 "id": "overlay_AE53370D_E46A_06BB_41B5_0F624F96D13F",
 "data": {
  "label": "  Preescolar"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.67,
   "yaw": 89.49,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E8F154F9_E364_F02F_41E0_7ADE7EBBD519_1_HS_19_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 19
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.55
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E8C90C1B_E365_F7E2_41D7_18E9C82943A5, this.camera_83BDCD2F_EC9A_0AF7_41E8_691CB10B7C3D); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E8F154F9_E364_F02F_41E0_7ADE7EBBD519_1_HS_19_0.png",
      "width": 240,
      "class": "ImageResourceLevel",
      "height": 290
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.55,
   "hfov": 8.67,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 89.49
  }
 ],
 "id": "overlay_A8E56BDC_E46A_0D59_41D0_B0327D4C938C",
 "data": {
  "label": "      Pasillo"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.29,
   "yaw": 135.64,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E8FADA72_E364_F022_41C2_C29F7A235EAF_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.31
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E8F154F9_E364_F02F_41E0_7ADE7EBBD519, this.camera_82F3AA6F_EC9A_0F77_41E7_96DB88E01F3D); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8244C189_ECA9_FDB8_41D0_4D47A154DE32",
   "pitch": -6.31,
   "hfov": 12.29,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 135.64
  }
 ],
 "id": "overlay_E8FABA72_E364_F022_41D0_A0692B0378AF",
 "data": {
  "label": "Arrow 04"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 19.97,
   "yaw": 35.32,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E8FADA72_E364_F022_41C2_C29F7A235EAF_1_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.75
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E8B9812A_E364_302D_41E2_DFDB9823113D, this.camera_82B7FAFF_EC9A_0F57_41E3_ABDAB343A27D); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_82452189_ECA9_FDB8_41D6_A6AF17B864D7",
   "pitch": -16.75,
   "hfov": 19.97,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 35.32
  }
 ],
 "id": "overlay_E8FA9A72_E364_F022_41C9_E13AC1827B3B",
 "data": {
  "label": "Circle 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.82,
   "yaw": -65.37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E8FADA72_E364_F022_41C2_C29F7A235EAF_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.24
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E8C90C1B_E365_F7E2_41D7_18E9C82943A5, this.camera_82CB6AA9_EC9A_0FFB_41E2_52AC8D91D2F3); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_82456189_ECA9_FDB8_41E8_C1D36524513B",
   "pitch": -5.24,
   "hfov": 16.82,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -65.37
  }
 ],
 "id": "overlay_E8FB6A72_E364_F022_41DF_16B2E2BCB7E5",
 "data": {
  "label": "Arrow 04"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.35,
   "yaw": 153.32,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E8FADA72_E364_F022_41C2_C29F7A235EAF_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EAF0B794_E147_67ED_41D1_DF56AF0E8AFE, this.camera_82C41A8D_EC9A_0FBB_41E7_18A0C8E5277B); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8245E18E_ECA9_FDB9_41CE_472784697580",
   "pitch": -1.06,
   "hfov": 9.35,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 153.32
  }
 ],
 "id": "overlay_E8FB7A72_E364_F022_41B2_C082546BF173",
 "data": {
  "label": "Arrow 04"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.46,
   "yaw": -81.4,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E8FADA72_E364_F022_41C2_C29F7A235EAF_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 23.3
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F521389D_E4A4_30E7_419D_206A40017412, this.camera_82DFCAC5_EC9A_0FAB_41E0_2088F7C9D540); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8246218E_ECA9_FDB9_41EA_6D94FD9879CE",
   "pitch": 23.3,
   "hfov": 9.46,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -81.4
  }
 ],
 "id": "overlay_FD4414B8_E4A6_1BD9_41D5_679976DF5946",
 "data": {
  "label": "Arrow 04"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.33,
   "yaw": 162.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E8FADA72_E364_F022_41C2_C29F7A235EAF_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.83
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EA8920BB_E140_B91B_41E9_D14906604A6B, this.camera_82A08AE1_EC9A_0F6A_41DE_9867B0D6B837); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8246918E_ECA9_FDB9_41A6_F27B04B000C8",
   "pitch": -3.83,
   "hfov": 9.33,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 162.79
  }
 ],
 "id": "overlay_CF3353B2_E4FA_7DE8_41C6_13422BA8067A",
 "data": {
  "label": "Arrow 04"
 }
},
{
 "inertia": false,
 "id": "panorama_E8FADA72_E364_F022_41C2_C29F7A235EAF_tcap0",
 "angle": -21,
 "distance": 50,
 "rotate": false,
 "hfov": 36,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_EADDC172_E141_BB25_41D8_E09A626FB8FD_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "class": "AudioResource",
 "oggUrl": "media/audio_FA062943_E35A_FD11_41CB_61E27AAD28F8.ogg",
 "mp3Url": "media/audio_FA062943_E35A_FD11_41CB_61E27AAD28F8.mp3",
 "id": "audioresource_FBC32FEF_E35B_D511_41E0_D3CB3105CCD6"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.23,
   "yaw": -178.5,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E9C5B2DE_E46A_1F59_41E8_91B64D35D990_1_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.8
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E9C5C3B9_E46A_3DDB_41B2_81F19F4D0621, this.camera_820FADB1_EC9A_05EB_41EA_813E646A598C); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8264C1A1_ECA9_FDEB_41DC_E17FE1CE995F",
   "pitch": -10.8,
   "hfov": 11.23,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -178.5
  }
 ],
 "id": "overlay_CE613AE6_E4EA_0F68_41E0_6A1B4FC5ABC3",
 "data": {
  "label": "Circle 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.86,
   "yaw": -162.08,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E9C5B2DE_E46A_1F59_41E8_91B64D35D990_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.01
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E9C1D3F7_E46A_1D57_4197_60D58E87487C, this.camera_82320D93_EC9A_05AF_41DF_F43CA15CAFF6); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_826521A1_ECA9_FDEB_41A6_50451793BB30",
   "pitch": -6.01,
   "hfov": 5.86,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -162.08
  }
 ],
 "id": "overlay_C16A003F_E4EA_1AD7_41CF_341A6DBB6626",
 "data": {
  "label": "Arrow 04"
 }
},
{
 "inertia": false,
 "id": "panorama_E9C5B2DE_E46A_1F59_41E8_91B64D35D990_tcap0",
 "angle": -21,
 "distance": 50,
 "rotate": false,
 "hfov": 36,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_EADDC172_E141_BB25_41D8_E09A626FB8FD_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "rotationX": -13.22,
 "blending": 0,
 "id": "overlay_A5D1D344_E5E6_3EA9_41EB_EE4289D3B00C",
 "roll": -4.13,
 "loop": true,
 "image": {
  "levels": [
   {
    "url": "media/overlay_A5D1D344_E5E6_3EA9_41EB_EE4289D3B00C_t.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 768
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 13.08,
 "useHandCursor": true,
 "click": "this.openLink('https://api.whatsapp.com/send?phone=595981408400&text=Hola,%20me%20interesa%20el%20espacio%20publicitario%20en%20el%20Paseo%20Digital%20del%20Colegio%20Adventista.', '_blank')",
 "yaw": 52.95,
 "autoplay": true,
 "vfov": 18.24,
 "rotationY": 21.09,
 "class": "VideoPanoramaOverlay",
 "enabledInCardboard": true,
 "distance": 50,
 "hfov": 24,
 "data": {
  "label": "Video"
 },
 "videoVisibleOnStop": false,
 "video": {
  "width": 1024,
  "mp4Url": "media/video_DA3322B5_E59A_1FE8_41BA_BC17D10E3272.mp4",
  "class": "VideoResource",
  "height": 768
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 35.85,
   "yaw": 179.87,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E9C1D3F7_E46A_1D57_4197_60D58E87487C_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.24
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E9C4F462_E46B_FB69_41EA_EBF76426CC46, this.camera_844AA124_EC9A_7AEA_41EB_E4B4A3532C2A); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8261019C_ECA9_FDD9_41AD_03AF43509E67",
   "pitch": -10.24,
   "hfov": 35.85,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 179.87
  }
 ],
 "id": "overlay_C0A2E84F_E4E6_0AB6_41D1_60C8C8DE497C",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 19.08,
   "yaw": 48.37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E9C1D3F7_E46A_1D57_4197_60D58E87487C_1_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.6
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E9C5C3B9_E46A_3DDB_41B2_81F19F4D0621, this.camera_847270D7_EC9A_7B52_41C0_C776339D7D8F); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8261719C_ECA9_FDD9_41DB_23E6CC889983",
   "pitch": -18.6,
   "hfov": 19.08,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 48.37
  }
 ],
 "id": "overlay_C0924358_E4E6_1D59_41D7_111480AD9959",
 "data": {
  "label": "Circle 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.44,
   "yaw": 17.51,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E9C1D3F7_E46A_1D57_4197_60D58E87487C_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.93
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E9C5B2DE_E46A_1F59_41E8_91B64D35D990, this.camera_849B108A_EC9A_7BB9_41EA_EDF98B9F0001); this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8261D19C_ECA9_FDD9_41EA_A51B74910515",
   "pitch": -4.93,
   "hfov": 5.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 17.51
  }
 ],
 "id": "overlay_C16696C9_E4EE_07BB_41C4_6A00EDE50F97",
 "data": {
  "label": "Arrow 04"
 }
},
{
 "inertia": false,
 "id": "panorama_E9C1D3F7_E46A_1D57_4197_60D58E87487C_tcap0",
 "angle": -21,
 "distance": 50,
 "rotate": false,
 "hfov": 36,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_EADDC172_E141_BB25_41D8_E09A626FB8FD_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "rotationX": -9.73,
 "blending": 0,
 "id": "overlay_A41C6755_E5FA_06AB_41C2_2D820EDCC0E1",
 "roll": 1.8,
 "loop": true,
 "image": {
  "levels": [
   {
    "url": "media/overlay_A41C6755_E5FA_06AB_41C2_2D820EDCC0E1_t.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 768
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 4.65,
 "useHandCursor": true,
 "click": "this.openLink('https://api.whatsapp.com/send?phone=595981408400&text=Hola,%20me%20interesa%20el%20espacio%20publicitario%20en%20el%20Paseo%20Digital%20del%20Colegio%20Adventista.', '_blank')",
 "yaw": 25.98,
 "autoplay": true,
 "vfov": 5.72,
 "rotationY": -9.88,
 "class": "VideoPanoramaOverlay",
 "enabledInCardboard": true,
 "distance": 50,
 "hfov": 7.47,
 "data": {
  "label": "Video"
 },
 "videoVisibleOnStop": false,
 "video": {
  "width": 1024,
  "mp4Url": "media/video_DA3322B5_E59A_1FE8_41BA_BC17D10E3272.mp4",
  "class": "VideoResource",
  "height": 768
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 32.36,
   "yaw": 2.14,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F521389D_E4A4_30E7_419D_206A40017412_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.62
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F5214712_E4A4_51E2_41E0_B73B9A6D712C, this.camera_987377B3_EC9A_05EF_41B4_45AB55546FF3); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_82776197_ECA9_FDD7_41CB_1248D9A577FF",
   "pitch": -12.62,
   "hfov": 32.36,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 2.14
  }
 ],
 "id": "overlay_F016A24D_E46E_1EB8_41E1_11AEF266C93A",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.78,
   "yaw": 91.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F521389D_E4A4_30E7_419D_206A40017412_1_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.33
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8277B197_ECA9_FDD7_41E6_060FB890A126",
   "pitch": -15.33,
   "hfov": 14.78,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 91.34
  }
 ],
 "id": "overlay_F114C827_E49E_0AF7_41E6_C3C706E30544",
 "data": {
  "label": "Circle 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.08,
   "yaw": 150.6,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F521389D_E4A4_30E7_419D_206A40017412_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.42
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F5213C55_E4A4_D066_416D_85F4BFC80191, this.camera_989DC79F_EC9A_05D7_41E2_7DD9763ACE1C); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_82681197_ECA9_FDD7_41C5_91BCE5B8F52A",
   "pitch": -2.42,
   "hfov": 6.08,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 150.6
  }
 ],
 "id": "overlay_F2D397B1_E49E_05EB_41E8_7EFC7EDEBB6F",
 "data": {
  "label": "Arrow 04"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.88,
   "yaw": 142.21,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F521389D_E4A4_30E7_419D_206A40017412_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.71
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E8FADA72_E364_F022_41C2_C29F7A235EAF, this.camera_98BC2781_EC9A_05AB_41E1_A88DF1570E58); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_82689197_ECA9_FDD7_41C3_995E01041764",
   "pitch": -26.71,
   "hfov": 11.88,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 142.21
  }
 ],
 "id": "overlay_FE552045_E4AA_FAAB_4193_9E9F16C3CE77",
 "data": {
  "label": "Arrow 04"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.66,
   "yaw": 170.03,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F521389D_E4A4_30E7_419D_206A40017412_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.91
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8268D197_ECA9_FDD7_41CC_8782DA1539EE",
   "pitch": -13.91,
   "hfov": 7.66,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 170.03
  }
 ],
 "id": "overlay_FDDDB51D_E4A9_FADB_41EA_B63C940B3BDB",
 "data": {
  "label": "Arrow 04"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.53,
   "yaw": -169.9,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F521389D_E4A4_30E7_419D_206A40017412_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.73
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EAF0B794_E147_67ED_41D1_DF56AF0E8AFE, this.camera_9850B7D1_EC9A_05AB_41E2_E6C94DB10858); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_82693197_ECA9_FDD7_41E0_DBA5B0A4CA8B",
   "pitch": -9.73,
   "hfov": 4.53,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -169.9
  }
 ],
 "id": "overlay_FDEC07DD_E4AE_055B_41E6_0A2ACFDE3BFA",
 "data": {
  "label": "Arrow 04"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.19,
   "yaw": 88.31,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F521389D_E4A4_30E7_419D_206A40017412_1_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.49
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_82697197_ECA9_FDD7_41B7_25F5FB16FD3F",
   "pitch": -2.49,
   "hfov": 7.19,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 88.31
  }
 ],
 "id": "overlay_FEB03287_E4AE_1FB7_41E0_F49FBA22559F",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "inertia": false,
 "id": "panorama_F521389D_E4A4_30E7_419D_206A40017412_tcap0",
 "angle": -21,
 "distance": 50,
 "rotate": false,
 "hfov": 36,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_EADDC172_E141_BB25_41D8_E09A626FB8FD_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.91,
   "yaw": -165.49,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EADDA963_E141_EB2B_41DB_CD069D3B479A_1_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EAF0B794_E147_67ED_41D1_DF56AF0E8AFE, this.camera_85F4D25B_EC9A_7F5F_41EC_C8AF3BD210E6); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8254B184_ECA9_FDA8_41E5_DD3AD007D066",
   "pitch": -6,
   "hfov": 21.91,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -165.49
  }
 ],
 "id": "overlay_F49A1D8B_E141_EBE4_41C7_81CBEC359266",
 "data": {
  "label": "Circle 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.39,
   "yaw": 169.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EADDA963_E141_EB2B_41DB_CD069D3B479A_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.2
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E8F154F9_E364_F02F_41E0_7ADE7EBBD519, this.camera_840501C0_EC9A_7DA9_41D3_052450FABEC4); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_82550184_ECA9_FDA8_41D5_9F3E8790E43B",
   "pitch": -0.2,
   "hfov": 5.39,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 169.61
  }
 ],
 "id": "overlay_F76B7BD5_E147_AF6C_41BC_DA9E6CA0A391",
 "data": {
  "label": "Arrow 04"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.59,
   "yaw": 17.93,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EADDA963_E141_EB2B_41DB_CD069D3B479A_1_HS_2_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.52
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EADDBD3C_E141_6B1D_41C2_3B8C0C9C91C2, this.camera_85CE42A7_EC9A_7FF7_41DB_DD1301477E92); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_82554184_ECA9_FDA8_41C6_B82A9F3729DA",
   "pitch": -9.52,
   "hfov": 9.59,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 17.93
  }
 ],
 "id": "overlay_ECBB7E7C_E2DF_D7F7_41E6_54E27BE87889",
 "data": {
  "label": "Circle 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.55,
   "yaw": 49.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EADDA963_E141_EB2B_41DB_CD069D3B479A_1_HS_3_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.36
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EF3E255F_E364_5063_41EA_23F03465E467, this.camera_841D720C_EC9A_7EB9_41EC_52CB9202ECD7); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_82559184_ECA9_FDA8_41E4_30E7409EC227",
   "pitch": -11.36,
   "hfov": 16.55,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 49.02
  }
 ],
 "id": "overlay_F2DE52A8_E2DE_2F1F_41D3_3A75EE144814",
 "data": {
  "label": "Circle 01c"
 }
},
{
 "bleachingDistance": 0.4,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 35.99,
 "bleaching": 0.7,
 "id": "overlay_F957C129_E36A_2D11_41EB_35FC9937E2E9",
 "yaw": -144.58
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.81,
   "yaw": 68.19,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EADDA963_E141_EB2B_41DB_CD069D3B479A_1_HS_4_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.58
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EADC6654_E140_996D_41E8_8F536A929374, this.camera_84226172_EC9A_7D69_41E6_58C619A227B0); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_82560184_ECA9_FDA8_41BD_6DF226D35749",
   "pitch": -7.58,
   "hfov": 10.81,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 68.19
  }
 ],
 "id": "overlay_CC9E0D8A_E4E6_05B9_41E8_89B98326BD36",
 "data": {
  "label": "Circle 01c"
 }
},
{
 "inertia": false,
 "id": "panorama_EADDA963_E141_EB2B_41DB_CD069D3B479A_tcap0",
 "angle": -21,
 "distance": 50,
 "rotate": false,
 "hfov": 36,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_EADDC172_E141_BB25_41D8_E09A626FB8FD_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "rotationX": -1.51,
 "blending": 0,
 "id": "overlay_DBFA95F4_E5E6_0569_41D5_E3D6BAB4C934",
 "roll": -1.31,
 "loop": true,
 "image": {
  "levels": [
   {
    "url": "media/overlay_DBFA95F4_E5E6_0569_41D5_E3D6BAB4C934_t.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 768
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 3.02,
 "useHandCursor": true,
 "click": "this.openLink('https://api.whatsapp.com/send?phone=595981408400&text=Hola,%20me%20interesa%20el%20espacio%20publicitario%20en%20el%20Paseo%20Digital%20del%20Colegio%20Adventista.', '_blank')",
 "yaw": 26.24,
 "autoplay": true,
 "vfov": 9.12,
 "rotationY": 19.84,
 "class": "VideoPanoramaOverlay",
 "enabledInCardboard": true,
 "distance": 50,
 "hfov": 17.23,
 "data": {
  "label": "Video"
 },
 "videoVisibleOnStop": false,
 "video": {
  "width": 1024,
  "mp4Url": "media/video_DA3322B5_E59A_1FE8_41BA_BC17D10E3272.mp4",
  "class": "VideoResource",
  "height": 768
 }
},
{
 "rotationX": -2.72,
 "blending": 0,
 "id": "overlay_A4BA9694_E5E6_07A9_41B9_E6135E0D8E38",
 "roll": -2.77,
 "loop": true,
 "image": {
  "levels": [
   {
    "url": "media/overlay_A4BA9694_E5E6_07A9_41B9_E6135E0D8E38_t.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 768
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 2.39,
 "useHandCursor": true,
 "click": "this.openLink('https://api.whatsapp.com/send?phone=595981408400&text=Hola,%20me%20interesa%20el%20espacio%20publicitario%20en%20el%20Paseo%20Digital%20del%20Colegio%20Adventista.', '_blank')",
 "yaw": 41.79,
 "autoplay": true,
 "vfov": 8,
 "rotationY": 36.23,
 "class": "VideoPanoramaOverlay",
 "enabledInCardboard": true,
 "distance": 50,
 "hfov": 14.78,
 "data": {
  "label": "Video"
 },
 "videoVisibleOnStop": false,
 "video": {
  "width": 1024,
  "mp4Url": "media/video_DA3322B5_E59A_1FE8_41BA_BC17D10E3272.mp4",
  "class": "VideoResource",
  "height": 768
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.21,
   "yaw": 18.1,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EADDA963_E141_EB2B_41DB_CD069D3B479A_1_HS_5_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.75
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EADDBD3C_E141_6B1D_41C2_3B8C0C9C91C2, this.camera_85AD62ED_EC9A_7F78_41EC_59A984CD607B); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EADDA963_E141_EB2B_41DB_CD069D3B479A_1_HS_5_0.png",
      "width": 257,
      "class": "ImageResourceLevel",
      "height": 257
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.75,
   "hfov": 9.21,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 18.1
  }
 ],
 "id": "overlay_BCB12524_ECA6_1AE9_41D4_7ABB3C04DD49",
 "data": {
  "label": "     Acceso a\u000d Laboratorio de\u000d    Simulaci\u00f3n"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 22.56,
   "yaw": -93.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EAE2003C_E141_991C_41CF_920F278E9C7B_1_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.74
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E8C90C1B_E365_F7E2_41D7_18E9C82943A5, this.camera_82BB5B1D_EC9A_0EDB_41DA_624A34DC0AC8); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8279318E_ECA9_FDB9_41D5_BC973F0C4AF0",
   "pitch": -11.74,
   "hfov": 22.56,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -93.11
  }
 ],
 "id": "overlay_F547F8BD_E2DA_5B71_41EB_F30F0C812662",
 "data": {
  "label": "Circle 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 25.99,
   "yaw": -0.26,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EAE2003C_E141_991C_41CF_920F278E9C7B_1_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.6
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_ED4F5164_E141_7B2C_41CB_BAE8006AA571, this.camera_828E4B3A_EC9A_0ED9_41E7_B09A2D86E932); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8279718E_ECA9_FDB9_41BF_4EA63906D1DE",
   "pitch": -26.6,
   "hfov": 25.99,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -0.26
  }
 ],
 "id": "overlay_F50BD266_E2DA_2F12_41DB_4B62FA0D90EC",
 "data": {
  "label": "Circle 01c"
 }
},
{
 "inertia": false,
 "id": "panorama_EAE2003C_E141_991C_41CF_920F278E9C7B_tcap0",
 "angle": -21,
 "distance": 50,
 "rotate": false,
 "hfov": 36,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_EADDC172_E141_BB25_41D8_E09A626FB8FD_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.28,
   "yaw": 178.68,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EFE15D2B_E466_0AFF_41D4_0DCE456C6586_1_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.25
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F5217E84_E4A4_50E6_41B1_B7D2D7D82D72, this.camera_85609383_EC9A_7DA8_41C3_F9D2F25EA89E); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_82746197_ECA9_FDD7_41E1_8086D0A73A1E",
   "pitch": -2.25,
   "hfov": 6.28,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 178.68
  }
 ],
 "id": "overlay_F624B12D_E46A_3AFB_41A0_CB6A7C7BF94E",
 "data": {
  "label": "Circle 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 34.98,
   "yaw": 60.04,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EFE15D2B_E466_0AFF_41D4_0DCE456C6586_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.11
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8274D197_ECA9_FDD7_41D6_8A866C035F77",
   "pitch": -9.11,
   "hfov": 34.98,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 60.04
  }
 ],
 "id": "overlay_F6B03377_E46A_3D57_41BE_13227BC1B4C2",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.97,
   "yaw": 178.25,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EFE15D2B_E466_0AFF_41D4_0DCE456C6586_1_HS_2_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.73
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F5213C55_E4A4_D066_416D_85F4BFC80191, this.camera_85821337_EC9A_7EE8_41EB_73CF0DBDA589); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_82753197_ECA9_FDD7_41E6_F588DA2055A5",
   "pitch": -5.73,
   "hfov": 9.97,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 178.25
  }
 ],
 "id": "overlay_F1E75375_E466_1D6B_41BA_AF3B2F7C7A50",
 "data": {
  "label": "Circle 01c"
 }
},
{
 "inertia": false,
 "id": "panorama_EFE15D2B_E466_0AFF_41D4_0DCE456C6586_tcap0",
 "angle": -21,
 "distance": 50,
 "rotate": false,
 "hfov": 36,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_EADDC172_E141_BB25_41D8_E09A626FB8FD_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.8,
   "yaw": 163.04,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5392FBD_E4A4_7027_41E3_AB0AD55108CB_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.58
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F5217E84_E4A4_50E6_41B1_B7D2D7D82D72, this.camera_8319FE11_EC9A_06AB_41E7_DDB99C28595E); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_82708192_ECA9_FDA9_41D8_86C144487442",
   "pitch": -2.58,
   "hfov": 12.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 163.04
  }
 ],
 "id": "overlay_F6033E1D_E466_06DB_41EC_4F88AEF84156",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "inertia": false,
 "id": "panorama_F5392FBD_E4A4_7027_41E3_AB0AD55108CB_tcap0",
 "angle": -21,
 "distance": 50,
 "rotate": false,
 "hfov": 36,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_EADDC172_E141_BB25_41D8_E09A626FB8FD_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.76,
   "yaw": -127.73,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5392FBD_E4A4_7027_41E3_AB0AD55108CB_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.94
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showWindow(this.window_CA487C11_E4AE_0AAB_41E9_8BD550529C57, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_82711192_ECA9_FDA9_41EC_55D302E7362D",
   "pitch": -1.94,
   "hfov": 7.76,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -127.73
  }
 ],
 "id": "overlay_CA5DDC62_E4AE_0B69_41BA_6AB6AA5C046F",
 "data": {
  "label": "Info Red 02"
 }
},
{
 "rotationX": 5.26,
 "blending": 0,
 "id": "overlay_DBF87475_E5FE_7B6B_41A1_11753D657A7E",
 "roll": -0.66,
 "loop": true,
 "image": {
  "levels": [
   {
    "url": "media/overlay_DBF87475_E5FE_7B6B_41A1_11753D657A7E_t.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 768
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -0.71,
 "useHandCursor": true,
 "click": "this.openLink('https://api.whatsapp.com/send?phone=595981408400&text=Hola,%20me%20interesa%20el%20espacio%20publicitario%20en%20el%20Paseo%20Digital%20del%20Colegio%20Adventista.', '_blank')",
 "yaw": -156.12,
 "autoplay": true,
 "vfov": 10.11,
 "rotationY": -24.77,
 "class": "VideoPanoramaOverlay",
 "enabledInCardboard": true,
 "distance": 50,
 "hfov": 17.56,
 "data": {
  "label": "Video"
 },
 "videoVisibleOnStop": false,
 "video": {
  "width": 1024,
  "mp4Url": "media/video_DA3322B5_E59A_1FE8_41BA_BC17D10E3272.mp4",
  "class": "VideoResource",
  "height": 768
 }
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_CAB6FC10_E4AE_0AA9_41DF_C64B8324337E",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "10%",
 "minWidth": 0,
 "paddingTop": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText66937"
 },
 "shadow": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 19.05,
   "yaw": -133.15,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EADC6654_E140_996D_41E8_8F536A929374_1_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.84
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EF3E255F_E364_5063_41EA_23F03465E467, this.camera_8546C3D0_EC9A_7DA8_41E4_FE8BE4C3E4C6); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8242A189_ECA9_FDB8_41B2_3463BB62CE64",
   "pitch": -13.84,
   "hfov": 19.05,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -133.15
  }
 ],
 "id": "overlay_F7CBE172_E2FE_2DF3_41E1_F65B9886673A",
 "data": {
  "label": "Circle 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.56,
   "yaw": -160.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EADC6654_E140_996D_41E8_8F536A929374_1_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.16
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EADDA963_E141_EB2B_41DB_CD069D3B479A, this.camera_85273411_EC9A_7AAB_41E8_058819399B3B); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8242F189_ECA9_FDB8_41E9_C394D2F2E737",
   "pitch": -6.16,
   "hfov": 10.56,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -160.57
  }
 ],
 "id": "overlay_F6D9C912_E2FA_7D33_41D2_D5FB9F8BDD8F",
 "data": {
  "label": "Circle 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.45,
   "yaw": -115.59,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EADC6654_E140_996D_41E8_8F536A929374_1_HS_2_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.74
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EADDBD3C_E141_6B1D_41C2_3B8C0C9C91C2, this.camera_853AC45C_EC9A_7B59_41EA_27CDD3DC1751); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_82433189_ECA9_FDB8_41E5_EF00A8C63F1C",
   "pitch": -7.74,
   "hfov": 10.45,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -115.59
  }
 ],
 "id": "overlay_F62520E8_E2FA_EB1F_41A1_23940BBBA5C8",
 "data": {
  "label": "Circle 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4,
   "yaw": -121.78,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EADC6654_E140_996D_41E8_8F536A929374_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.09
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_82438189_ECA9_FDB8_41B2_45B44A6907C8",
   "pitch": 2.09,
   "hfov": 4,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -121.78
  }
 ],
 "id": "overlay_CE96D08B_E4FA_1BBF_41E4_68A1C14D8348",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "inertia": false,
 "id": "panorama_EADC6654_E140_996D_41E8_8F536A929374_tcap0",
 "angle": -21,
 "distance": 50,
 "rotate": false,
 "hfov": 36,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_EADDC172_E141_BB25_41D8_E09A626FB8FD_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "rotationX": -6.48,
 "blending": 0,
 "id": "overlay_DBF00944_E5FA_0AA9_41E9_44DFA7804CF8",
 "roll": -0.31,
 "loop": true,
 "image": {
  "levels": [
   {
    "url": "media/overlay_DBF00944_E5FA_0AA9_41E9_44DFA7804CF8_t.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 768
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 7.53,
 "useHandCursor": true,
 "click": "this.openLink('https://api.whatsapp.com/send?phone=595981408400&text=Hola,%20me%20interesa%20el%20espacio%20publicitario%20en%20el%20Paseo%20Digital%20del%20Colegio%20Adventista.', '_blank')",
 "yaw": -45.59,
 "autoplay": true,
 "vfov": 16.06,
 "rotationY": -3.63,
 "class": "VideoPanoramaOverlay",
 "enabledInCardboard": true,
 "distance": 50,
 "hfov": 29.97,
 "data": {
  "label": "Video"
 },
 "videoVisibleOnStop": false,
 "video": {
  "width": 1024,
  "mp4Url": "media/video_DA3322B5_E59A_1FE8_41BA_BC17D10E3272.mp4",
  "class": "VideoResource",
  "height": 768
 }
},
{
 "rotationX": -8.17,
 "blending": 0,
 "id": "overlay_A45089BD_E5FA_0DDB_41C5_E2D613A0FAD7",
 "roll": -4.26,
 "loop": true,
 "image": {
  "levels": [
   {
    "url": "media/overlay_A45089BD_E5FA_0DDB_41C5_E2D613A0FAD7_t.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 768
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 6.34,
 "useHandCursor": true,
 "click": "this.openLink('https://api.whatsapp.com/send?phone=595981408400&text=Hola,%20me%20interesa%20el%20espacio%20publicitario%20en%20el%20Paseo%20Digital%20del%20Colegio%20Adventista.', '_blank')",
 "yaw": -15,
 "autoplay": true,
 "vfov": 14.36,
 "rotationY": 27.6,
 "class": "VideoPanoramaOverlay",
 "enabledInCardboard": true,
 "distance": 50,
 "hfov": 26.27,
 "data": {
  "label": "Video"
 },
 "videoVisibleOnStop": false,
 "video": {
  "width": 1024,
  "mp4Url": "media/video_DA3322B5_E59A_1FE8_41BA_BC17D10E3272.mp4",
  "class": "VideoResource",
  "height": 768
 }
},
{
 "rotationX": -6.66,
 "blending": 0,
 "id": "overlay_A34966EC_E5FE_0778_41E3_315A9FC84AC1",
 "roll": 3.33,
 "loop": true,
 "image": {
  "levels": [
   {
    "url": "media/overlay_A34966EC_E5FE_0778_41E3_315A9FC84AC1_t.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 768
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 6.83,
 "useHandCursor": true,
 "click": "this.openLink('https://api.whatsapp.com/send?phone=595981408400&text=Hola,%20me%20interesa%20el%20espacio%20publicitario%20en%20el%20Paseo%20Digital%20del%20Colegio%20Adventista.', '_blank')",
 "yaw": -74.66,
 "autoplay": true,
 "vfov": 13.73,
 "rotationY": -31.68,
 "class": "VideoPanoramaOverlay",
 "enabledInCardboard": true,
 "distance": 50,
 "hfov": 25.03,
 "data": {
  "label": "Video"
 },
 "videoVisibleOnStop": false,
 "video": {
  "width": 1024,
  "mp4Url": "media/video_DA3322B5_E59A_1FE8_41BA_BC17D10E3272.mp4",
  "class": "VideoResource",
  "height": 768
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 28.99,
   "yaw": 0.25,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5217E84_E4A4_50E6_41B1_B7D2D7D82D72_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.48
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F6165FE8_E4A4_502E_41CE_D0E472165F33, this.camera_86DE653D_EC9A_7ADB_41DA_E23973FF229D); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_827BF18E_ECA9_FDB9_41E3_7699225AEA0D",
   "pitch": -9.48,
   "hfov": 28.99,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 0.25
  }
 ],
 "id": "overlay_EB956235_E47A_1EE8_41E0_E360FEBF7BA5",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 25.5,
   "yaw": 58.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5217E84_E4A4_50E6_41B1_B7D2D7D82D72_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.73
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F5392FBD_E4A4_7027_41E3_AB0AD55108CB, this.camera_8651860A_EC9A_06B9_41E7_9F8F17FC1EE3); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_827C618E_ECA9_FDB9_41CD_869BCA9A1F20",
   "pitch": -9.73,
   "hfov": 25.5,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 58.79
  }
 ],
 "id": "overlay_EBF15B92_E47A_0DA8_41D9_1AC256EAACC2",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.38,
   "yaw": -62.95,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5217E84_E4A4_50E6_41B1_B7D2D7D82D72_1_HS_2_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.24
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EFE15D2B_E466_0AFF_41D4_0DCE456C6586, this.camera_8693C5CB_EC9A_05BF_41D2_602A35D78A4C); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_827CB192_ECA9_FDA9_41D8_6950439DCFC7",
   "pitch": -4.24,
   "hfov": 6.38,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -62.95
  }
 ],
 "id": "overlay_EBF94DBC_E466_05D8_41C5_D10AE2700275",
 "data": {
  "label": "Circle 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.63,
   "yaw": -62.83,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5217E84_E4A4_50E6_41B1_B7D2D7D82D72_1_HS_3_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.92
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F5213C55_E4A4_D066_416D_85F4BFC80191, this.camera_8670D5EC_EC9A_0579_41D5_97F6869E6F95); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_827D1192_ECA9_FDA9_41DB_003554855930",
   "pitch": -7.92,
   "hfov": 9.63,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -62.83
  }
 ],
 "id": "overlay_F787B429_E46A_1AFB_41E5_FB0F123E5FBB",
 "data": {
  "label": "Circle 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.97,
   "yaw": 124.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5217E84_E4A4_50E6_41B1_B7D2D7D82D72_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.59
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E8F154F9_E364_F02F_41E0_7ADE7EBBD519, this.camera_851B34A7_EC9A_7BF7_41CD_259EDA69ACA1); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_827D8192_ECA9_FDA9_41E7_1EBF2088DA37",
   "pitch": -6.59,
   "hfov": 15.97,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 124.98
  }
 ],
 "id": "overlay_FB17B85C_E49E_0B58_41CC_CC00723232AC",
 "data": {
  "label": "Circle Arrow 02 Right"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 30.51,
   "yaw": 176.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5217E84_E4A4_50E6_41B1_B7D2D7D82D72_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.11
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E9C4F462_E46B_FB69_41EA_EBF76426CC46, this.camera_8615663C_EC9A_06D9_41EB_AFA32FF43E74); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_827DE192_ECA9_FDA9_41E9_00E48BDBDE93",
   "pitch": -9.11,
   "hfov": 30.51,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 176.61
  }
 ],
 "id": "overlay_C4CEE7D7_E49E_0557_41DD_07DB98332BB9",
 "data": {
  "label": "Circle Arrow 06"
 }
},
{
 "inertia": false,
 "id": "panorama_F5217E84_E4A4_50E6_41B1_B7D2D7D82D72_tcap0",
 "angle": -21,
 "distance": 50,
 "rotate": false,
 "hfov": 36,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_EADDC172_E141_BB25_41D8_E09A626FB8FD_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.27,
   "yaw": -77.04,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5217E84_E4A4_50E6_41B1_B7D2D7D82D72_1_HS_6_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 25
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.39
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5217E84_E4A4_50E6_41B1_B7D2D7D82D72_1_HS_6_0.png",
      "width": 257,
      "class": "ImageResourceLevel",
      "height": 404
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.39,
   "hfov": 9.27,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -77.04
  }
 ],
 "id": "overlay_BC0381A7_ECA6_1DF7_41D8_B8AA95C1C61E",
 "data": {
  "label": "Laboratorio\u000d        de\u000dInform\u00e1tica"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 24.61,
   "yaw": 58.62,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5217E84_E4A4_50E6_41B1_B7D2D7D82D72_1_HS_7_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 24
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.54
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F5392FBD_E4A4_7027_41E3_AB0AD55108CB, this.camera_8634D623_EC9A_06EF_41E7_CF9A76788E57); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5217E84_E4A4_50E6_41B1_B7D2D7D82D72_1_HS_7_0.png",
      "width": 692,
      "class": "ImageResourceLevel",
      "height": 1063
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.54,
   "hfov": 24.61,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 58.62
  }
 ],
 "id": "overlay_BEAA8925_ECAA_0AEB_41C4_DE4D9ED6B94A",
 "data": {
  "label": "       6to Grado"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.6,
   "yaw": -76.86,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5217E84_E4A4_50E6_41B1_B7D2D7D82D72_1_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.32
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_827EF192_ECA9_FDA9_41E5_BBD7F53CE2A1",
   "pitch": -0.32,
   "hfov": 3.6,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -76.86
  }
 ],
 "id": "overlay_BDE0BC7E_ECAA_0B59_41D2_AB5BF8DBCA51",
 "data": {
  "label": "Arrow 04"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 26.21,
   "yaw": 0.31,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5217E84_E4A4_50E6_41B1_B7D2D7D82D72_1_HS_9_0_map.gif",
      "width": 15,
      "class": "ImageResourceLevel",
      "height": 23
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.94
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F6165FE8_E4A4_502E_41CE_D0E472165F33, this.camera_86BCD583_EC9A_05AF_41E1_EA9495B52351); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5217E84_E4A4_50E6_41B1_B7D2D7D82D72_1_HS_9_0.png",
      "width": 735,
      "class": "ImageResourceLevel",
      "height": 1063
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.94,
   "hfov": 26.21,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 0.31
  }
 ],
 "id": "overlay_BEC2E0FB_ECAA_1B5F_41EB_150CEF5A1A58",
 "data": {
  "label": "       5to Grado"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.86,
   "yaw": 175.43,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5217E84_E4A4_50E6_41B1_B7D2D7D82D72_1_HS_10_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 23
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.79
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E9C4F462_E46B_FB69_41EA_EBF76426CC46, this.camera_87EB7655_EC9A_06AB_41B1_D219A1ADD9AA); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5217E84_E4A4_50E6_41B1_B7D2D7D82D72_1_HS_10_0.png",
      "width": 610,
      "class": "ImageResourceLevel",
      "height": 914
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.79,
   "hfov": 21.86,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 175.43
  }
 ],
 "id": "overlay_8C04031A_ECAE_1ED9_41E8_26F648C4E247",
 "data": {
  "label": "     2do Piso"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.53,
   "yaw": 125.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5217E84_E4A4_50E6_41B1_B7D2D7D82D72_1_HS_11_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 18
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.63
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E8F154F9_E364_F02F_41E0_7ADE7EBBD519, this.camera_86FB44ED_EC9A_7B7B_41E4_B9180E4326C2); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5217E84_E4A4_50E6_41B1_B7D2D7D82D72_1_HS_11_0.png",
      "width": 488,
      "class": "ImageResourceLevel",
      "height": 550
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.63,
   "hfov": 17.53,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 125.02
  }
 ],
 "id": "overlay_B60C05C6_ECAA_05A9_41E1_1D3117F3E169",
 "data": {
  "label": "   Planta Baja"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 20.22,
   "yaw": -162.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F6165FE8_E4A4_502E_41CE_D0E472165F33_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.47
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F5217E84_E4A4_50E6_41B1_B7D2D7D82D72, this.camera_810CC9DC_EC9A_0D59_41D3_DAE8B8E4DD64); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_82721192_ECA9_FDA9_41AB_64BFA7D13DE1",
   "pitch": -6.47,
   "hfov": 20.22,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -162.79
  }
 ],
 "id": "overlay_F4C8305F_E466_7B57_41D8_B8F1C17835EF",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "inertia": false,
 "id": "panorama_F6165FE8_E4A4_502E_41CE_D0E472165F33_tcap0",
 "angle": -21,
 "distance": 50,
 "rotate": false,
 "hfov": 36,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_EADDC172_E141_BB25_41D8_E09A626FB8FD_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.76,
   "yaw": 105.4,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F6165FE8_E4A4_502E_41CE_D0E472165F33_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.45
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showWindow(this.window_CAF4B162_E4AA_FD69_41DC_3A34FD4A7802, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_8272A192_ECA9_FDA9_41EA_BAA2FC3291FE",
   "pitch": -2.45,
   "hfov": 7.76,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 105.4
  }
 ],
 "id": "overlay_CA8081C6_E4AA_FDA9_41C0_0188801528AB",
 "data": {
  "label": "Info Red 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.12,
   "yaw": 102.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5214712_E4A4_51E2_41E0_B73B9A6D712C_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.52
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F521389D_E4A4_30E7_419D_206A40017412, this.camera_8483102E_EC9A_7AF9_41E9_A451AA41DDCA); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_826A9197_ECA9_FDD7_41DA_3F9C6763889C",
   "pitch": -6.52,
   "hfov": 14.12,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 102.22
  }
 ],
 "id": "overlay_FD2F4132_E4AA_3AE9_41DB_00A26395237F",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "inertia": false,
 "id": "panorama_F5214712_E4A4_51E2_41E0_B73B9A6D712C_tcap0",
 "angle": -21,
 "distance": 50,
 "rotate": false,
 "hfov": 36,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_EADDC172_E141_BB25_41D8_E09A626FB8FD_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "rotationX": -0.41,
 "blending": 0,
 "id": "overlay_A4232B9C_E5FA_0DD9_41E3_1571D255AF09",
 "roll": -0.87,
 "loop": true,
 "image": {
  "levels": [
   {
    "url": "media/overlay_A4232B9C_E5FA_0DD9_41E3_1571D255AF09_t.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 768
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 0.6,
 "useHandCursor": true,
 "click": "this.openLink('https://api.whatsapp.com/send?phone=595981408400&text=Hola,%20me%20interesa%20el%20espacio%20publicitario%20en%20el%20Paseo%20Digital%20del%20Colegio%20Adventista.', '_blank')",
 "yaw": 11.63,
 "autoplay": true,
 "vfov": 5.32,
 "rotationY": 2.83,
 "class": "VideoPanoramaOverlay",
 "enabledInCardboard": true,
 "distance": 50,
 "hfov": 9.33,
 "data": {
  "label": "Video"
 },
 "videoVisibleOnStop": false,
 "video": {
  "width": 1024,
  "mp4Url": "media/video_DA3322B5_E59A_1FE8_41BA_BC17D10E3272.mp4",
  "class": "VideoResource",
  "height": 768
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 25.32,
   "yaw": 130.53,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EADCE602_E147_B8E5_41E0_A3348388DA41_1_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.61
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EA80C6E4_E147_992C_41D3_588476BDC207, this.camera_82890CE7_EC9A_0B77_41DE_54E4E260DED0); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_824ED189_ECA9_FDB8_41D9_4D709C860838",
   "pitch": -18.61,
   "hfov": 25.32,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 130.53
  }
 ],
 "id": "overlay_F0C69BB7_E2EA_7D71_41D4_616740F03169",
 "data": {
  "label": "Circle 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.57,
   "yaw": 137.21,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EADCE602_E147_B8E5_41E0_A3348388DA41_1_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.16
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EADC0494_E147_99EC_41E6_6E85636B3ABA, this.camera_829EFD01_EC9A_0AAB_41DE_1AC594DD55EE); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_824F2189_ECA9_FDB8_41C9_5BFA09D33558",
   "pitch": -10.16,
   "hfov": 9.57,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 137.21
  }
 ],
 "id": "overlay_F08EB27E_E2EA_2FF3_41EB_F700645B35E9",
 "data": {
  "label": "Circle 01c"
 }
},
{
 "inertia": false,
 "id": "panorama_EADCE602_E147_B8E5_41E0_A3348388DA41_tcap0",
 "angle": -21,
 "distance": 50,
 "rotate": false,
 "hfov": 36,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_EADDC172_E141_BB25_41D8_E09A626FB8FD_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.81,
   "yaw": 83.29,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EADCE602_E147_B8E5_41E0_A3348388DA41_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.16
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_D9171239_E5BA_3EDB_4198_5B1739633D10, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_B51594E0_E5EA_1B69_418F_9F8B95BF11F0, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_824F8189_ECA9_FDB8_41EB_DF7AC0CECA69",
   "pitch": -9.16,
   "hfov": 4.81,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 83.29
  }
 ],
 "id": "overlay_DFA4D41F_E5A6_1AD7_4183_FA9FDE99F1F4",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 25.89,
   "yaw": 179.87,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_ED4F5164_E141_7B2C_41CB_BAE8006AA571_1_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.24
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EAE2003C_E141_991C_41CF_920F278E9C7B, this.camera_87CFB673_EC9A_076F_41E0_4AD82A05DA94); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_827A818E_ECA9_FDB9_41D6_3D66120EA2D3",
   "pitch": -24.24,
   "hfov": 25.89,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 179.87
  }
 ],
 "id": "overlay_FAA5CA1D_E2DA_5F36_41D6_C32D383C4274",
 "data": {
  "label": "Circle 01c"
 }
},
{
 "inertia": false,
 "id": "panorama_ED4F5164_E141_7B2C_41CB_BAE8006AA571_tcap0",
 "angle": -21,
 "distance": 50,
 "rotate": false,
 "hfov": 36,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_EADDC172_E141_BB25_41D8_E09A626FB8FD_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.76,
   "yaw": 84.05,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_ED4F5164_E141_7B2C_41CB_BAE8006AA571_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.95
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showWindow(this.window_CA895450_E4AE_3AA8_41CF_A346C39ADE25, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_827B118E_ECA9_FDB9_41E8_B4B0394DCB28",
   "pitch": -0.95,
   "hfov": 7.76,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 84.05
  }
 ],
 "id": "overlay_CA9D64AD_E4AE_3BF8_4193_F0D6F9F6B292",
 "data": {
  "label": "Info Red 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.15,
   "yaw": -54.43,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E8C90C1B_E365_F7E2_41D7_18E9C82943A5_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.71
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E8FADA72_E364_F022_41C2_C29F7A235EAF, this.camera_8257ED59_EC9A_055B_41EB_5EA066819A44); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8279218E_ECA9_FDB9_41E5_3F8C23E34056",
   "pitch": -3.71,
   "hfov": 15.15,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -54.43
  }
 ],
 "id": "overlay_E8D6EC1B_E365_F7E2_41C7_CBEBC6ABF3BD",
 "data": {
  "label": "Arrow 04"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 18.85,
   "yaw": -125.4,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E8C90C1B_E365_F7E2_41D7_18E9C82943A5_1_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.18
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EAE2003C_E141_991C_41CF_920F278E9C7B, this.camera_82268D76_EC9A_0569_41CF_B535A77ED462); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8279718E_ECA9_FDB9_41D2_73B46287C72A",
   "pitch": -11.18,
   "hfov": 18.85,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -125.4
  }
 ],
 "id": "overlay_E8D6FC1B_E365_F7E2_41E7_E692F109D0C1",
 "data": {
  "label": "Circle 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.52,
   "yaw": -38.58,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E8C90C1B_E365_F7E2_41D7_18E9C82943A5_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.18
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E8F154F9_E364_F02F_41E0_7ADE7EBBD519, this.camera_82452D3D_EC9A_0ADB_41CD_1E42CFA3965B); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8278518E_ECA9_FDB9_41B8_B719D3AEFAD3",
   "pitch": -1.18,
   "hfov": 9.52,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -38.58
  }
 ],
 "id": "overlay_E8D6CC1B_E365_F7E2_41E2_AD6EDB6AD847",
 "data": {
  "label": "Arrow 04"
 }
},
{
 "inertia": false,
 "id": "panorama_E8C90C1B_E365_F7E2_41D7_18E9C82943A5_tcap0",
 "angle": -21,
 "distance": 50,
 "rotate": false,
 "hfov": 36,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_EADDC172_E141_BB25_41D8_E09A626FB8FD_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.34,
   "yaw": 31.82,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EADDC172_E141_BB25_41D8_E09A626FB8FD_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.48
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EADC6D16_E147_A8ED_41E7_7A006A29B117, this.camera_874186E6_EC9A_0769_41DE_E6E40DE1898B); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_82AB3170_ECA9_FD69_41C9_E525939ADFFD",
   "pitch": -3.48,
   "hfov": 12.34,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 31.82
  }
 ],
 "id": "overlay_F142A306_E141_78ED_41D3_02B8BE49A67D",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "bleachingDistance": 0.4,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 55.83,
 "bleaching": 0.7,
 "id": "overlay_F98C50C2_E36A_2B12_41A6_DF205040F8CF",
 "yaw": -56.4
},
{
 "inertia": false,
 "id": "panorama_EADDC172_E141_BB25_41D8_E09A626FB8FD_tcap0",
 "angle": 31,
 "distance": 50,
 "rotate": false,
 "hfov": 36,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_EADDC172_E141_BB25_41D8_E09A626FB8FD_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "progressBarBorderSize": 0,
 "id": "MapViewer",
 "playbackBarHeadShadowHorizontalLength": 0,
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "class": "ViewerArea",
 "toolTipFontStyle": "normal",
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 1,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 1,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "borderSize": 0,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 2,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 500,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "paddingRight": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#000000",
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "toolTipFontSize": 12,
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Floor Plan"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.32,
   "yaw": 134.01,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EAF0B794_E147_67ED_41D1_DF56AF0E8AFE_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.35
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EA8920BB_E140_B91B_41E9_D14906604A6B, this.camera_82004C47_EC9A_0AB7_419C_B9446DD76A5E); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_825F917F_ECA9_FD58_41AB_E18282AF585B",
   "pitch": -6.35,
   "hfov": 12.32,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 134.01
  }
 ],
 "id": "overlay_F762CDC9_E141_6B64_41DA_D4C236D939A1",
 "data": {
  "label": "Arrow 04"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.63,
   "yaw": 172.4,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EAF0B794_E147_67ED_41D1_DF56AF0E8AFE_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.48
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EA8920BB_E140_B91B_41E9_D14906604A6B, this.camera_8217DC63_EC9A_0B6F_418F_170DDAD10FF0); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_825FF17F_ECA9_FD58_41D4_6DEC26C723E9",
   "pitch": -4.48,
   "hfov": 9.63,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 172.4
  }
 ],
 "id": "overlay_F5B7C88C_E143_69FC_41E7_B418B837F2CC",
 "data": {
  "label": "Arrow 04"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.88,
   "yaw": 53.96,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EAF0B794_E147_67ED_41D1_DF56AF0E8AFE_1_HS_2_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.38
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EADDA963_E141_EB2B_41DB_CD069D3B479A, this.camera_825DABF1_EC9A_0D6B_41B0_0B8352968514); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8250417F_ECA9_FD58_41EA_D098F857A3F2",
   "pitch": -7.38,
   "hfov": 14.88,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 53.96
  }
 ],
 "id": "overlay_F754FC23_E140_A924_41E5_6BEFA8B01800",
 "data": {
  "label": "Circle 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.66,
   "yaw": 154.9,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EAF0B794_E147_67ED_41D1_DF56AF0E8AFE_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.47
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E8FADA72_E364_F022_41C2_C29F7A235EAF, this.camera_827E9BAD_EC9A_0DFB_41D1_4FA6DC20F6C1); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8250A17F_ECA9_FD58_41C4_FAC15DB08F1D",
   "pitch": -1.47,
   "hfov": 7.66,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 154.9
  }
 ],
 "id": "overlay_F4D5176E_E2EA_3513_41E1_80EAD81B091D",
 "data": {
  "label": "Arrow 04"
 }
},
{
 "bleachingDistance": 0.4,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 38,
 "bleaching": 0.7,
 "id": "overlay_F98D2F45_E36A_F511_41E4_FAACA5724618",
 "yaw": -52.38
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.7,
   "yaw": -139.24,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EAF0B794_E147_67ED_41D1_DF56AF0E8AFE_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.02
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_825F917F_ECA9_FD58_41EB_73AA23E7A3BA",
   "pitch": -3.02,
   "hfov": 11.7,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -139.24
  }
 ],
 "id": "overlay_F92C6018_E4BE_3AD8_41E7_557732DFA184",
 "data": {
  "label": "Circle Arrow 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.37,
   "yaw": 133.62,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EAF0B794_E147_67ED_41D1_DF56AF0E8AFE_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 14.61
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_825FF17F_ECA9_FD58_41E3_C80349A4F729",
   "pitch": 14.61,
   "hfov": 4.37,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 133.62
  }
 ],
 "id": "overlay_FBFA22A3_E4A6_1FEF_41D5_32EA723641A7",
 "data": {
  "label": "Arrow 04"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.89,
   "yaw": 139.86,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EAF0B794_E147_67ED_41D1_DF56AF0E8AFE_1_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.63
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F521389D_E4A4_30E7_419D_206A40017412, this.camera_8223DC0E_EC9A_0AB9_4174_D0748244655E); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8250617F_ECA9_FD58_41E2_BF16F8F2C4E6",
   "pitch": 6.63,
   "hfov": 4.89,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 139.86
  }
 ],
 "id": "overlay_FBB6BF67_E4A6_0577_41EB_2FB84AC57313",
 "data": {
  "label": "Arrow 04"
 }
},
{
 "inertia": false,
 "id": "panorama_EAF0B794_E147_67ED_41D1_DF56AF0E8AFE_tcap0",
 "angle": -21,
 "distance": 50,
 "rotate": false,
 "hfov": 36,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_EADDC172_E141_BB25_41D8_E09A626FB8FD_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.68,
   "yaw": -87.62,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EAF0B794_E147_67ED_41D1_DF56AF0E8AFE_1_HS_7_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.25
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_DFA3DD2D_E5BA_0AFB_41CE_0161BF92F0DD, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_B52354C2_E5EA_1BA9_41DB_0CC132368D99, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8.68,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EAF0B794_E147_67ED_41D1_DF56AF0E8AFE_1_HS_7_0.png",
      "width": 247,
      "class": "ImageResourceLevel",
      "height": 209
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.25,
   "yaw": -87.62
  }
 ],
 "id": "overlay_DF7923A1_E5BA_7DEB_41BB_BE70D90D70B8",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.92,
   "yaw": -5.62,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EAF0B794_E147_67ED_41D1_DF56AF0E8AFE_1_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.54
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_DFBE5525_E5BE_1AEB_41D4_C8D38EFF8A1C, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_B52444C3_E5EA_1BAF_41E8_37759FFBF6F4, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 2.92,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EAF0B794_E147_67ED_41D1_DF56AF0E8AFE_1_HS_8_0.png",
      "width": 81,
      "class": "ImageResourceLevel",
      "height": 83
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.54,
   "yaw": -5.62
  }
 ],
 "id": "overlay_DE997B85_E5BE_0DA8_41D3_1AA52A699987",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.87,
   "yaw": -2.54,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EAF0B794_E147_67ED_41D1_DF56AF0E8AFE_1_HS_9_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.92
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_DE814D19_E5BE_0AD8_41E8_315B83D193D4, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_B52584C4_E5EA_1BA9_41B3_DE91574219BC, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 2.87,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EAF0B794_E147_67ED_41D1_DF56AF0E8AFE_1_HS_9_0.png",
      "width": 81,
      "class": "ImageResourceLevel",
      "height": 83
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.92,
   "yaw": -2.54
  }
 ],
 "id": "overlay_DFBFA835_E5BE_0AEB_41E7_E60DE88D189C",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.19,
   "yaw": 5.63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EAF0B794_E147_67ED_41D1_DF56AF0E8AFE_1_HS_10_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.51
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_DEA413A8_E5BE_3DF9_41E8_D053101E9707, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_B526D4C4_E5EA_1BB7_41E0_EE60088D36B8, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 4.19,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EAF0B794_E147_67ED_41D1_DF56AF0E8AFE_1_HS_10_0.png",
      "width": 117,
      "class": "ImageResourceLevel",
      "height": 121
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.51,
   "yaw": 5.63
  }
 ],
 "id": "overlay_DFC1D5D6_E5BE_05A9_41DB_DBFD87193296",
 "data": {
  "label": "Image"
 }
},
{
 "rotationX": -34.87,
 "blending": 0,
 "id": "overlay_DBF286E9_E5EA_0778_41C2_FB96CD1A9D54",
 "roll": -11.56,
 "loop": true,
 "image": {
  "levels": [
   {
    "url": "media/overlay_DBF286E9_E5EA_0778_41C2_FB96CD1A9D54_t.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 768
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 30.24,
 "useHandCursor": true,
 "click": "this.openLink('https://api.whatsapp.com/send?phone=595981408400&text=Hola,%20me%20interesa%20el%20espacio%20publicitario%20en%20el%20Paseo%20Digital%20del%20Colegio%20Adventista.', '_blank')",
 "yaw": 61.8,
 "autoplay": true,
 "vfov": 19.85,
 "rotationY": 17.81,
 "class": "VideoPanoramaOverlay",
 "enabledInCardboard": true,
 "distance": 50,
 "hfov": 25.52,
 "data": {
  "label": "Video"
 },
 "videoVisibleOnStop": false,
 "video": {
  "width": 1024,
  "mp4Url": "media/video_DA3322B5_E59A_1FE8_41BA_BC17D10E3272.mp4",
  "class": "VideoResource",
  "height": 768
 }
},
{
 "rotationX": 61.73,
 "blending": 0,
 "id": "overlay_A584DB2A_E5E6_0EF9_41E4_DF2C44C30FA5",
 "roll": -0.32,
 "loop": true,
 "image": {
  "levels": [
   {
    "url": "media/overlay_A584DB2A_E5E6_0EF9_41E4_DF2C44C30FA5_t.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 768
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 28.74,
 "useHandCursor": true,
 "click": "this.openLink('https://api.whatsapp.com/send?phone=595981408400&text=Hola,%20me%20interesa%20el%20espacio%20publicitario%20en%20el%20Paseo%20Digital%20del%20Colegio%20Adventista.', '_blank')",
 "yaw": 127.86,
 "autoplay": true,
 "vfov": 37.27,
 "rotationY": -1.68,
 "class": "VideoPanoramaOverlay",
 "enabledInCardboard": true,
 "distance": 50,
 "hfov": 30,
 "data": {
  "label": "Video"
 },
 "videoVisibleOnStop": false,
 "video": {
  "width": 1024,
  "mp4Url": "media/video_DA3322B5_E59A_1FE8_41BA_BC17D10E3272.mp4",
  "class": "VideoResource",
  "height": 768
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.8,
   "yaw": -139.42,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EAF0B794_E147_67ED_41D1_DF56AF0E8AFE_1_HS_11_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 18
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.91
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EAF0B794_E147_67ED_41D1_DF56AF0E8AFE_1_HS_11_0.png",
      "width": 411,
      "class": "ImageResourceLevel",
      "height": 473
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.91,
   "hfov": 14.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -139.42
  }
 ],
 "id": "overlay_B81E4944_EC9A_0AA9_41DC_00FF1DE0CF23",
 "data": {
  "label": "Acceso al 1er Piso"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.7,
   "yaw": 53.92,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EAF0B794_E147_67ED_41D1_DF56AF0E8AFE_1_HS_12_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.86
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EAF0B794_E147_67ED_41D1_DF56AF0E8AFE_1_HS_12_0.png",
      "width": 410,
      "class": "ImageResourceLevel",
      "height": 219
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.86,
   "hfov": 14.7,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 53.92
  }
 ],
 "id": "overlay_BA2C4D66_EC9A_0569_41E0_14CAF5C17E17",
 "data": {
  "label": "    Polideportivo"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.67,
   "yaw": 154.87,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EAF0B794_E147_67ED_41D1_DF56AF0E8AFE_1_HS_13_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 19
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.68
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E8FADA72_E364_F022_41C2_C29F7A235EAF, this.camera_824C8BCE_EC9A_0DB9_41D8_549AE17C5842); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EAF0B794_E147_67ED_41D1_DF56AF0E8AFE_1_HS_13_0.png",
      "width": 268,
      "class": "ImageResourceLevel",
      "height": 332
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.68,
   "hfov": 9.67,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 154.87
  }
 ],
 "id": "overlay_B81DAAE7_EC9E_0F77_41E8_5C8E3E8CBBAE",
 "data": {
  "label": "  Preescolar"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.26,
   "yaw": 133.9,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EAF0B794_E147_67ED_41D1_DF56AF0E8AFE_1_HS_14_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.85
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EA8920BB_E140_B91B_41E9_D14906604A6B, this.camera_83E49C80_EC9A_0BA9_41C7_FF85F64E74CA); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EAF0B794_E147_67ED_41D1_DF56AF0E8AFE_1_HS_14_0.png",
      "width": 397,
      "class": "ImageResourceLevel",
      "height": 359
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.85,
   "hfov": 14.26,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 133.9
  }
 ],
 "id": "overlay_B8277D34_EC9E_0AE8_41E2_444668D7BE4C",
 "data": {
  "label": " Comedor sin Sillas"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.71,
   "yaw": 172.23,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EAF0B794_E147_67ED_41D1_DF56AF0E8AFE_1_HS_15_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.68
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E8F154F9_E364_F02F_41E0_7ADE7EBBD519, this.camera_82756B91_EC9A_0DAB_41EB_AA92844B409F); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EAF0B794_E147_67ED_41D1_DF56AF0E8AFE_1_HS_15_0.png",
      "width": 409,
      "class": "ImageResourceLevel",
      "height": 386
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.68,
   "hfov": 14.71,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 172.23
  }
 ],
 "id": "overlay_BCF0E86B_EC9A_0B7F_41CF_D4CB24277034",
 "data": {
  "label": " Entrada a Comedor"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.33,
   "yaw": 139.82,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EAF0B794_E147_67ED_41D1_DF56AF0E8AFE_1_HS_16_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 18
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.79
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F521389D_E4A4_30E7_419D_206A40017412, this.camera_8230FC2A_EC9A_0AF9_41E8_2B087DBDAB44); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EAF0B794_E147_67ED_41D1_DF56AF0E8AFE_1_HS_16_0.png",
      "width": 205,
      "class": "ImageResourceLevel",
      "height": 235
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.79,
   "hfov": 7.33,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 139.82
  }
 ],
 "id": "overlay_B85C4151_EC9B_FAAB_41E7_13375ACDF592",
 "data": {
  "label": "   Laboratorio\u000d   Inform\u00e1tica"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.39,
   "yaw": 133.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EAF0B794_E147_67ED_41D1_DF56AF0E8AFE_1_HS_17_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 15.67
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EAF0B794_E147_67ED_41D1_DF56AF0E8AFE_1_HS_17_0.png",
      "width": 213,
      "class": "ImageResourceLevel",
      "height": 186
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 15.67,
   "hfov": 7.39,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 133.61
  }
 ],
 "id": "overlay_B852EAEF_EC9A_0F78_41DC_2614158EB6A1",
 "data": {
  "label": "Pasillo 2do Piso"
 }
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_CAFED8A6_E4AA_0BE9_41E8_613CAADB976E",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "10%",
 "minWidth": 0,
 "paddingTop": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText66937"
 },
 "shadow": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 20.74,
   "yaw": -38.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E9C2B1AC_E46A_1DF9_41D2_1E8C48B2DC22_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.59
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E9C4108D_E46A_3BBB_41E4_FCB0E78FC031, this.camera_8705971D_EC9A_06DB_41A6_A077F6371DF3); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_826FC19C_ECA9_FDD9_41A4_E4F8C2015D12",
   "pitch": -13.59,
   "hfov": 20.74,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -38.79
  }
 ],
 "id": "overlay_C67CA76E_E4E6_0579_41E6_DB075EC109FA",
 "data": {
  "label": "Arrow 04"
 }
},
{
 "inertia": false,
 "id": "panorama_E9C2B1AC_E46A_1DF9_41D2_1E8C48B2DC22_tcap0",
 "angle": -21,
 "distance": 50,
 "rotate": false,
 "hfov": 36,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_EADDC172_E141_BB25_41D8_E09A626FB8FD_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 22.22,
   "yaw": -134.31,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E9C5C3B9_E46A_3DDB_41B2_81F19F4D0621_1_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.28
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E9C1D3F7_E46A_1D57_4197_60D58E87487C, this.camera_84F77E28_EC9A_06F9_41E6_3B34620E2636); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8263019C_ECA9_FDD9_41CD_66455CEB475F",
   "pitch": -19.28,
   "hfov": 22.22,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -134.31
  }
 ],
 "id": "overlay_C03C30C9_E4E9_FBBB_41DE_51D94687731B",
 "data": {
  "label": "Circle 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.36,
   "yaw": 1.09,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E9C5C3B9_E46A_3DDB_41B2_81F19F4D0621_1_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.19
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E9C5B2DE_E46A_1F59_41E8_91B64D35D990, this.camera_84C0BE48_EC9A_06B9_41E3_F5EADE210A58); this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8263719C_ECA9_FDD9_41A8_B326C7AA7A71",
   "pitch": -10.19,
   "hfov": 12.36,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 1.09
  }
 ],
 "id": "overlay_C0BDA347_E4EA_1EB7_41E1_72BF4988C79C",
 "data": {
  "label": "Circle 01c"
 }
},
{
 "inertia": false,
 "id": "panorama_E9C5C3B9_E46A_3DDB_41B2_81F19F4D0621_tcap0",
 "angle": -21,
 "distance": 50,
 "rotate": false,
 "hfov": 36,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_EADDC172_E141_BB25_41D8_E09A626FB8FD_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "rotationX": -12.97,
 "blending": 0,
 "id": "overlay_A5D976F0_E5E6_0769_41E7_D622A979402B",
 "roll": 2.29,
 "loop": true,
 "image": {
  "levels": [
   {
    "url": "media/overlay_A5D976F0_E5E6_0769_41E7_D622A979402B_t.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 768
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 5.81,
 "useHandCursor": true,
 "click": "this.openLink('https://api.whatsapp.com/send?phone=595981408400&text=Hola,%20me%20interesa%20el%20espacio%20publicitario%20en%20el%20Paseo%20Digital%20del%20Colegio%20Adventista.', '_blank')",
 "yaw": 19.79,
 "autoplay": true,
 "vfov": 7.93,
 "rotationY": -12.5,
 "class": "VideoPanoramaOverlay",
 "enabledInCardboard": true,
 "distance": 50,
 "hfov": 10.18,
 "data": {
  "label": "Video"
 },
 "videoVisibleOnStop": false,
 "video": {
  "width": 1024,
  "mp4Url": "media/video_DA3322B5_E59A_1FE8_41BA_BC17D10E3272.mp4",
  "class": "VideoResource",
  "height": 768
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.26,
   "yaw": -126.54,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EADC6D16_E147_A8ED_41E7_7A006A29B117_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.94
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EADDC172_E141_BB25_41D8_E09A626FB8FD, this.camera_8783D6AF_EC9A_07F7_41EA_B5B8F5B06B08); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_82ACB170_ECA9_FD69_41E5_F63DB9FF7E82",
   "pitch": -4.94,
   "hfov": 15.26,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -126.54
  }
 ],
 "id": "overlay_F3C771BC_E140_9B1D_41E8_EC5CA641426A",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.53,
   "yaw": -22.71,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EADC6D16_E147_A8ED_41E7_7A006A29B117_1_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.29
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E8E42205_E364_33E7_41E6_A73F2DB39F27, this.camera_87AC3696_EC9A_07A9_41B5_0B6E32D7C038); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_82ACF170_ECA9_FD69_41EA_05C00E359341",
   "pitch": -11.29,
   "hfov": 9.53,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -22.71
  }
 ],
 "id": "overlay_F3B3BB39_E147_6F24_41B4_7E5D9C4978A4",
 "data": {
  "label": "Circle 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.47,
   "yaw": 61.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EADC6D16_E147_A8ED_41E7_7A006A29B117_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.83
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E8F154F9_E364_F02F_41E0_7ADE7EBBD519, this.camera_8760D6CD_EC9A_07BB_41D7_9A307EE55777); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_82AD4170_ECA9_FD69_41D1_61451C6A6F5A",
   "pitch": -4.83,
   "hfov": 12.47,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 61.94
  }
 ],
 "id": "overlay_F3A1FDF1_E147_6B27_41D7_651F6439A865",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "inertia": false,
 "id": "panorama_EADC6D16_E147_A8ED_41E7_7A006A29B117_tcap0",
 "angle": -21,
 "distance": 50,
 "rotate": false,
 "hfov": 36,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_EADDC172_E141_BB25_41D8_E09A626FB8FD_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.51,
   "yaw": 171.17,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EADC6D16_E147_A8ED_41E7_7A006A29B117_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.84
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showWindow(this.window_CABC5972_E4BA_0D68_41DA_F5FC042CE2B0, null, true); this.pauseGlobalAudios('window_CABC5972_E4BA_0D68_41DA_F5FC042CE2B0')",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 7.51,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EADC6D16_E147_A8ED_41E7_7A006A29B117_1_HS_3_0.png",
      "width": 209,
      "class": "ImageResourceLevel",
      "height": 209
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.84,
   "yaw": 171.17
  }
 ],
 "id": "overlay_CAB3873F_E4BA_06D7_41E3_29BD45AC3274",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.11,
   "yaw": -179.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EADC6D16_E147_A8ED_41E7_7A006A29B117_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.01
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_DE85E94F_E5A6_0AB7_41D9_5C2FBD73C64E, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_B532B4A4_E5EA_1BE9_41AE_186311B3D1C5, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 3.11,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EADC6D16_E147_A8ED_41E7_7A006A29B117_1_HS_5_0.png",
      "width": 86,
      "class": "ImageResourceLevel",
      "height": 89
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.01,
   "yaw": -179.34
  }
 ],
 "id": "overlay_DE7C81DD_E5A6_7D5B_41D0_4BD719D7638B",
 "data": {
  "label": "Image"
 }
},
{
 "rotationX": -9.84,
 "blending": 0,
 "id": "overlay_D992A990_E59A_0DA9_41E7_68747EEC02D0",
 "roll": 7.69,
 "loop": true,
 "image": {
  "levels": [
   {
    "url": "media/overlay_D992A990_E59A_0DA9_41E7_68747EEC02D0_t.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 768
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 6.94,
 "useHandCursor": true,
 "click": "this.openLink('https://api.whatsapp.com/send?phone=595981408400&text=Hola,%20me%20interesa%20el%20espacio%20publicitario%20en%20el%20Paseo%20Digital%20del%20Colegio%20Adventista.', '_blank')",
 "yaw": -79.64,
 "autoplay": true,
 "vfov": 29.3,
 "rotationY": -52.75,
 "class": "VideoPanoramaOverlay",
 "enabledInCardboard": true,
 "distance": 50,
 "hfov": 49.34,
 "data": {
  "label": "Video"
 },
 "videoVisibleOnStop": false,
 "video": {
  "width": 1024,
  "mp4Url": "media/video_DA3322B5_E59A_1FE8_41BA_BC17D10E3272.mp4",
  "class": "VideoResource",
  "height": 768
 }
},
{
 "rotationX": -9.97,
 "blending": 0,
 "id": "overlay_DA69570E_E5E6_06B9_41C6_F3F22CF359F4",
 "roll": -8.56,
 "loop": true,
 "image": {
  "levels": [
   {
    "url": "media/overlay_DA69570E_E5E6_06B9_41C6_F3F22CF359F4_t.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 768
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 5.52,
 "useHandCursor": true,
 "click": "this.openLink('https://api.whatsapp.com/send?phone=595981408400&text=Hola,%20me%20interesa%20el%20espacio%20publicitario%20en%20el%20Paseo%20Digital%20del%20Colegio%20Adventista.', '_blank')",
 "yaw": 25.79,
 "autoplay": true,
 "vfov": 29.93,
 "rotationY": 51.3,
 "class": "VideoPanoramaOverlay",
 "enabledInCardboard": true,
 "distance": 50,
 "hfov": 48.16,
 "data": {
  "label": "Video"
 },
 "videoVisibleOnStop": false,
 "video": {
  "width": 1024,
  "mp4Url": "media/video_DA3322B5_E59A_1FE8_41BA_BC17D10E3272.mp4",
  "class": "VideoResource",
  "height": 768
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.31,
   "yaw": 61.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EADC6D16_E147_A8ED_41E7_7A006A29B117_1_HS_6_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 20
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.97
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EADC6D16_E147_A8ED_41E7_7A006A29B117_1_HS_6_0.png",
      "width": 370,
      "class": "ImageResourceLevel",
      "height": 465
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.97,
   "hfov": 13.31,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 61.98
  }
 ],
 "id": "overlay_ACB924B5_E59A_1BE8_41E0_42E91CD2A703",
 "data": {
  "label": "     Comedor"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.68,
   "yaw": -22.81,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EADC6D16_E147_A8ED_41E7_7A006A29B117_1_HS_7_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.9
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EADC6D16_E147_A8ED_41E7_7A006A29B117_1_HS_7_0.png",
      "width": 300,
      "class": "ImageResourceLevel",
      "height": 181
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.9,
   "hfov": 10.68,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -22.81
  }
 ],
 "id": "overlay_A8DC4D04_E59A_0AA8_41B5_6ED6DAD416C7",
 "data": {
  "label": "     Direcci\u00f3n"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.35,
   "yaw": -126.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EADC6D16_E147_A8ED_41E7_7A006A29B117_1_HS_8_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 21
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.96
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EADC6D16_E147_A8ED_41E7_7A006A29B117_1_HS_8_0.png",
      "width": 399,
      "class": "ImageResourceLevel",
      "height": 535
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.96,
   "hfov": 14.35,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -126.61
  }
 ],
 "id": "overlay_A965FF73_E466_056F_41EB_8CE306DD2A76",
 "data": {
  "label": "       Calle"
 }
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_CAF7744F_E4AE_3AB8_41E2_E0AB3935C6F6",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "10%",
 "minWidth": 0,
 "paddingTop": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText66937"
 },
 "shadow": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 20.76,
   "yaw": -163.04,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E8B9812A_E364_302D_41E2_DFDB9823113D_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.46
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E8FADA72_E364_F022_41C2_C29F7A235EAF, this.camera_8724A6FF_EC9A_0757_41CA_B05986351B2F); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8247918E_ECA9_FDB9_41EA_A9BD445A2D82",
   "pitch": -5.46,
   "hfov": 20.76,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -163.04
  }
 ],
 "id": "overlay_F2818F80_E36D_D0DE_41D2_1841F0EFE08E",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.71,
   "yaw": 5.18,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E8B9812A_E364_302D_41E2_DFDB9823113D_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.72
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showWindow(this.window_C872055D_E4E6_055B_4182_67323F375807, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_8247F18E_ECA9_FDB9_41E3_0A9E30B311F3",
   "pitch": 6.72,
   "hfov": 7.71,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 5.18
  }
 ],
 "id": "overlay_CF5A3E6C_E4FA_0779_41BD_6186776B90CD",
 "data": {
  "label": "Info Red 02"
 }
},
{
 "inertia": false,
 "id": "panorama_E8B9812A_E364_302D_41E2_DFDB9823113D_tcap0",
 "angle": -21,
 "distance": 50,
 "rotate": false,
 "hfov": 36,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_EADDC172_E141_BB25_41D8_E09A626FB8FD_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "rotationX": 6.82,
 "blending": 0,
 "id": "overlay_DBECDC0D_E5FE_0ABB_41E4_53C114976E73",
 "roll": -2.33,
 "loop": true,
 "image": {
  "levels": [
   {
    "url": "media/overlay_DBECDC0D_E5FE_0ABB_41E4_53C114976E73_t.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 768
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 2.69,
 "useHandCursor": true,
 "click": "this.openLink('https://api.whatsapp.com/send?phone=595981408400&text=Hola,%20me%20interesa%20el%20espacio%20publicitario%20en%20el%20Paseo%20Digital%20del%20Colegio%20Adventista.', '_blank')",
 "yaw": 59.1,
 "autoplay": true,
 "vfov": 15.19,
 "rotationY": -55.89,
 "class": "VideoPanoramaOverlay",
 "enabledInCardboard": true,
 "distance": 50,
 "hfov": 26.15,
 "data": {
  "label": "Video"
 },
 "videoVisibleOnStop": false,
 "video": {
  "width": 1024,
  "mp4Url": "media/video_DA3322B5_E59A_1FE8_41BA_BC17D10E3272.mp4",
  "class": "VideoResource",
  "height": 768
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.93,
   "yaw": 173.1,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5213C55_E4A4_D066_416D_85F4BFC80191_1_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.4
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F5217E84_E4A4_50E6_41B1_B7D2D7D82D72, this.camera_83C03E0A_EC9A_06B9_41DA_AE272F625C97); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8273D192_ECA9_FDA9_41E3_591D9E38B7E1",
   "pitch": -7.4,
   "hfov": 9.93,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 173.1
  }
 ],
 "id": "overlay_F04F718E_E46A_7DB8_41E5_899C1A34BEBB",
 "data": {
  "label": "Circle 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.91,
   "yaw": -6.53,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5213C55_E4A4_D066_416D_85F4BFC80191_1_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.49
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EFE15D2B_E466_0AFF_41D4_0DCE456C6586, this.camera_83DCFE2B_EC9A_06FF_41A6_FB9DFC667330); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_82743192_ECA9_FDA9_41D0_2FEE9416FDDC",
   "pitch": -8.49,
   "hfov": 9.91,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -6.53
  }
 ],
 "id": "overlay_F0A14564_E466_0569_41DF_3B7019293D78",
 "data": {
  "label": "Circle 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.17,
   "yaw": -30.87,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5213C55_E4A4_D066_416D_85F4BFC80191_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.62
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F521389D_E4A4_30E7_419D_206A40017412, this.camera_8219CDCE_EC9A_05B9_41B9_2A0774E6834E); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_82749192_ECA9_FDA9_41EB_53A193647A4F",
   "pitch": -1.62,
   "hfov": 6.17,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -30.87
  }
 ],
 "id": "overlay_F3B7D8E8_E49E_0B79_41D7_77047CAF5DE3",
 "data": {
  "label": "Arrow 04"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.07,
   "yaw": -39.3,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5213C55_E4A4_D066_416D_85F4BFC80191_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 10.61
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F52171BD_E4A4_5027_41E5_9EE998F7E297, this.camera_83F4BDEB_EC9A_057F_41EB_CFC26F14336D); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_82750192_ECA9_FDA9_41CA_7A14D416EFEC",
   "pitch": 10.61,
   "hfov": 6.07,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -39.3
  }
 ],
 "id": "overlay_F3213A2D_E49A_0EF8_41E5_AEFA5C233618",
 "data": {
  "label": "Arrow 04"
 }
},
{
 "inertia": false,
 "id": "panorama_F5213C55_E4A4_D066_416D_85F4BFC80191_tcap0",
 "angle": -21,
 "distance": 50,
 "rotate": false,
 "hfov": 36,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_EADDC172_E141_BB25_41D8_E09A626FB8FD_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 27.95,
   "yaw": -64.62,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EF3E255F_E364_5063_41EA_23F03465E467_1_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.02
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EADDBD3C_E141_6B1D_41C2_3B8C0C9C91C2, this.camera_82EE6A41_EC9A_0EAB_41EA_5C6088C757B6); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_82408189_ECA9_FDB8_41DF_01558ED0A0C3",
   "pitch": -15.02,
   "hfov": 27.95,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -64.62
  }
 ],
 "id": "overlay_EF3E655F_E364_5063_41D4_798DFFB4F944",
 "data": {
  "label": "Circle 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.29,
   "yaw": -150.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EF3E255F_E364_5063_41EA_23F03465E467_1_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.08
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EADDA963_E141_EB2B_41DB_CD069D3B479A, this.camera_82E46A23_EC9A_0EEF_41D6_711578287C5B); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8240E189_ECA9_FDB8_41E2_223933B71519",
   "pitch": -9.08,
   "hfov": 15.29,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -150.57
  }
 ],
 "id": "overlay_EF3E555F_E364_5063_41D7_3A82FDF4936D",
 "data": {
  "label": "Circle 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.87,
   "yaw": 75.62,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EF3E255F_E364_5063_41EA_23F03465E467_1_HS_2_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.25
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EADC6654_E140_996D_41E8_8F536A929374, this.camera_81101A01_EC9A_0EAB_41D7_EB8E5479C5A0); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_82413189_ECA9_FDB8_4185_CC18BC623CD1",
   "pitch": -14.25,
   "hfov": 15.87,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 75.62
  }
 ],
 "id": "overlay_EF39B55F_E364_5063_41E5_E130BE9D5E31",
 "data": {
  "label": "Circle 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.51,
   "yaw": -86.8,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EF3E255F_E364_5063_41EA_23F03465E467_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.84
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_82419189_ECA9_FDB8_41DC_305EFA359850",
   "pitch": 4.84,
   "hfov": 7.51,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -86.8
  }
 ],
 "id": "overlay_CD68A008_E4FA_FAB9_41EB_D7CC520DB65C",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "inertia": false,
 "id": "panorama_EF3E255F_E364_5063_41EA_23F03465E467_tcap0",
 "angle": -21,
 "distance": 50,
 "rotate": false,
 "hfov": 36,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_EADDC172_E141_BB25_41D8_E09A626FB8FD_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.06,
   "yaw": -1.13,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E9C4F462_E46B_FB69_41EA_EBF76426CC46_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.95
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E9C1D3F7_E46A_1D57_4197_60D58E87487C, this.camera_817B28FE_EC9A_0B59_41DA_ECF707FFE2D9); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_826B8197_ECA9_FDD7_419E_119E925493EC",
   "pitch": -1.95,
   "hfov": 15.06,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -1.13
  }
 ],
 "id": "overlay_C53B33E0_E49A_1D69_41EC_7ED77A58602B",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 34.63,
   "yaw": 100.24,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E9C4F462_E46B_FB69_41EA_EBF76426CC46_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.12
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E9C4108D_E46A_3BBB_41E4_FCB0E78FC031, this.camera_814B1936_EC9A_0AE9_41AE_74BDF4B233C3); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_826C019C_ECA9_FDD9_41A3_C22940BA0BAA",
   "pitch": -12.12,
   "hfov": 34.63,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 100.24
  }
 ],
 "id": "overlay_C5F9D426_E49A_1AE9_41E9_7204095E0324",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 18.31,
   "yaw": -160.03,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E9C4F462_E46B_FB69_41EA_EBF76426CC46_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.45
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F5217E84_E4A4_50E6_41B1_B7D2D7D82D72, this.camera_8124796C_EC9A_0D79_41DD_A1A9E63E28F4); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_826C819C_ECA9_FDD9_41D3_D59C9155BA32",
   "pitch": -3.45,
   "hfov": 18.31,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -160.03
  }
 ],
 "id": "overlay_C99987F4_E4E6_0568_41EC_4C36F40D6BBD",
 "data": {
  "label": "Circle Arrow 02 Right"
 }
},
{
 "inertia": false,
 "id": "panorama_E9C4F462_E46B_FB69_41EA_EBF76426CC46_tcap0",
 "angle": -21,
 "distance": 50,
 "rotate": false,
 "hfov": 36,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_EADDC172_E141_BB25_41D8_E09A626FB8FD_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 33.93,
   "yaw": 99.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E9C4F462_E46B_FB69_41EA_EBF76426CC46_1_HS_3_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 21
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.15
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E9C4108D_E46A_3BBB_41E4_FCB0E78FC031, this.camera_81524951_EC9A_0AAB_41C4_D51822ECC238); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E9C4F462_E46B_FB69_41EA_EBF76426CC46_1_HS_3_0.png",
      "width": 957,
      "class": "ImageResourceLevel",
      "height": 1296
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.15,
   "hfov": 33.93,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 99.27
  }
 ],
 "id": "overlay_B3AB2B8E_ECAA_0DB9_41DF_36CA51BAEB06",
 "data": {
  "label": "      Biblioteca"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.51,
   "yaw": -160.51,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E9C4F462_E46B_FB69_41EA_EBF76426CC46_1_HS_4_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 23
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.35
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F5217E84_E4A4_50E6_41B1_B7D2D7D82D72, this.camera_812EC987_EC9A_0DB6_41D8_4C68C6634CD1); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E9C4F462_E46B_FB69_41EA_EBF76426CC46_1_HS_4_0.png",
      "width": 430,
      "class": "ImageResourceLevel",
      "height": 632
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.35,
   "hfov": 15.51,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -160.51
  }
 ],
 "id": "overlay_B7303ABD_ECAA_0FDB_41DF_5EEAF99FC900",
 "data": {
  "label": " 1er Piso"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.55,
   "yaw": -1.21,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E9C4F462_E46B_FB69_41EA_EBF76426CC46_1_HS_5_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 23
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.38
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E9C1D3F7_E46A_1D57_4197_60D58E87487C, this.camera_8141991B_EC9A_0ADF_41E0_88D5409D87D2); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E9C4F462_E46B_FB69_41EA_EBF76426CC46_1_HS_5_0.png",
      "width": 431,
      "class": "ImageResourceLevel",
      "height": 632
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.38,
   "hfov": 15.55,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -1.21
  }
 ],
 "id": "overlay_B5B5EDF4_ECA6_0569_41AE_2D8AA64BFA34",
 "data": {
  "label": "Auditorio"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 23.72,
   "yaw": 179.99,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EA80C6E4_E147_992C_41D3_588476BDC207_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.35
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EADDBD3C_E141_6B1D_41C2_3B8C0C9C91C2, this.camera_98F9B74F_EC9A_06B7_41E8_F8CDA0CB79F4); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_82499184_ECA9_FDA8_41D6_B0AE30D67866",
   "pitch": -9.35,
   "hfov": 23.72,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 179.99
  }
 ],
 "id": "overlay_ED044473_E2E6_EBF1_41E6_23677F909FC9",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.23,
   "yaw": -73.33,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EA80C6E4_E147_992C_41D3_588476BDC207_1_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.89
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EADC0494_E147_99EC_41E6_6E85636B3ABA, this.camera_98DEB763_EC9A_056F_41BF_BEE9AF3928CF); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8249F184_ECA9_FDA8_41E7_8AA0C5B95DE3",
   "pitch": -16.89,
   "hfov": 14.23,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -73.33
  }
 ],
 "id": "overlay_F3B7E82E_E2E9_FB13_41C3_95A665EC5A22",
 "data": {
  "label": "Circle 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.99,
   "yaw": 91.49,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EA80C6E4_E147_992C_41D3_588476BDC207_1_HS_2_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.86
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EADCE602_E147_B8E5_41E0_A3348388DA41, this.camera_871B0731_EC9A_06EB_41C7_1F07C7F5A91D); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_824A5184_ECA9_FDA8_41D5_2D03CF107B86",
   "pitch": -19.86,
   "hfov": 13.99,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 91.49
  }
 ],
 "id": "overlay_F2BE7393_E2EA_ED31_41E2_B0C5A7EED295",
 "data": {
  "label": "Circle 01c"
 }
},
{
 "inertia": false,
 "id": "panorama_EA80C6E4_E147_992C_41D3_588476BDC207_tcap0",
 "angle": -21,
 "distance": 50,
 "rotate": false,
 "hfov": 36,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_EADDC172_E141_BB25_41D8_E09A626FB8FD_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.58,
   "yaw": 146.04,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EA80C6E4_E147_992C_41D3_588476BDC207_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.41
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_DC15C8AD_E5AE_0BFB_41BC_B6486BCD8164, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_B51AD4CD_E5EA_1BBB_41E7_F7AFEFD195B8, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_824AD184_ECA9_FDA8_41E8_94647A87F16A",
   "pitch": -1.41,
   "hfov": 2.58,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 146.04
  }
 ],
 "id": "overlay_D2A5BEFA_E5AE_0759_41E9_88AE1FBDA2DC",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.58,
   "yaw": 136.7,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EA80C6E4_E147_992C_41D3_588476BDC207_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.61
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_DC01BADB_E5AE_0F5F_41E6_41FDAE1145C0, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_B51C14CD_E5EA_1BBB_41C5_4F97E2D4F385, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_824B2184_ECA9_FDA8_41C5_5DCE2D7488E5",
   "pitch": -1.61,
   "hfov": 2.58,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 136.7
  }
 ],
 "id": "overlay_DD209DC3_E5AE_05AF_41C5_5FE2F305E6FE",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.56,
   "yaw": 131.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EA80C6E4_E147_992C_41D3_588476BDC207_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.17
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_DD9DF9F1_E5AA_0D6B_4197_B9AABB43D065, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_B51D04CE_E5EA_1BB9_41E6_A292A59F60F9, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_824B7184_ECA9_FDA8_41B8_607C19BE8A48",
   "pitch": -7.17,
   "hfov": 2.56,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 131.27
  }
 ],
 "id": "overlay_D2EDFEBA_E5AE_07D9_41EC_9A36DE2094C6",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.46,
   "yaw": -0.07,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EA80C6E4_E147_992C_41D3_588476BDC207_1_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.99
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_DF14DA02_E5AA_0EA9_41E1_63BE602FBBC7, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_B51E24D4_E5EA_1BA9_41D2_C855347DCBAA, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_824BE184_ECA9_FDA8_41EA_91323E077436",
   "pitch": -8.99,
   "hfov": 3.46,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -0.07
  }
 ],
 "id": "overlay_DDFCC1D4_E5AA_1DA9_41DE_CE9E100A02BE",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.09,
   "yaw": -138.06,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EA80C6E4_E147_992C_41D3_588476BDC207_1_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.5
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_D287ACCB_E5AA_0BBF_41E6_2D957052D5AD, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_B51F44D5_E5EA_1BAB_41E8_0937E2005069, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_824C4184_ECA9_FDA8_41D9_F36BA53A5D34",
   "pitch": -13.5,
   "hfov": 3.09,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -138.06
  }
 ],
 "id": "overlay_DC0F0FA6_E5AA_05E9_41E5_C09D7DE04185",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 1.82,
   "yaw": 48.86,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EA80C6E4_E147_992C_41D3_588476BDC207_1_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.2
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_DFF13C75_E5A6_0B6B_41E1_5FCDB3B8F3E7, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_B51F24D6_E5EA_1BA9_41C7_3FA436FD82E8, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_824CA184_ECA9_FDA8_41D0_C8F153CF058D",
   "pitch": -10.2,
   "hfov": 1.82,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 48.86
  }
 ],
 "id": "overlay_DE578037_E5A6_3AD7_41D0_CE7891A52FA9",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "inertia": false,
 "id": "panorama_E9C6E272_E46A_7F69_41D0_A0613D7F1112_tcap0",
 "angle": -21,
 "distance": 50,
 "rotate": false,
 "hfov": 36,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_EADDC172_E141_BB25_41D8_E09A626FB8FD_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.76,
   "yaw": 134.9,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E9C6E272_E46A_7F69_41D0_A0613D7F1112_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.21
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showWindow(this.window_CAFB68A7_E4AA_0BF7_41AB_3F84FB32DBDF, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_82767197_ECA9_FDD7_41CD_FE13B3E38325",
   "pitch": -0.21,
   "hfov": 7.76,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 134.9
  }
 ],
 "id": "overlay_CA87C903_E4AA_0AAF_41E1_485BFE10BEAF",
 "data": {
  "label": "Info Red 02"
 }
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "backgroundOpacity": 0,
 "width": 58,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "transparencyActive": true,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "data": {
  "name": "IconButton HS "
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "backgroundOpacity": 0,
 "width": 58,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "transparencyActive": true,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "data": {
  "name": "IconButton GYRO"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxWidth": 49,
 "id": "IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA",
 "backgroundOpacity": 0,
 "maxHeight": 37,
 "right": 67,
 "width": 49,
 "class": "IconButton",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA_rollover.png",
 "propagateClick": false,
 "verticalAlign": "middle",
 "bottom": 9,
 "height": 37,
 "minWidth": 1,
 "mode": "push",
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA.png",
 "data": {
  "name": "IconButton VR"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "backgroundOpacity": 0,
 "width": 58,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 58,
 "minWidth": 1,
 "mode": "push",
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "data": {
  "name": "IconButton VR"
 },
 "shadow": false,
 "visible": false,
 "cursor": "hand"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.35,
   "yaw": -172.41,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EADC0494_E147_99EC_41E6_6E85636B3ABA_1_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.3
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EA80C6E4_E147_992C_41D3_588476BDC207, this.camera_84A8CFAA_EC9A_05F9_41E7_E20A4B273C57); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_824DA189_ECA9_FDB8_41DD_4EEE0E414DBE",
   "pitch": -15.3,
   "hfov": 14.35,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -172.41
  }
 ],
 "id": "overlay_F0E2413E_E2E9_ED73_41C1_828328E82BD8",
 "data": {
  "label": "Circle 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.45,
   "yaw": -175.86,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EADC0494_E147_99EC_41E6_6E85636B3ABA_1_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.14
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EADCE602_E147_B8E5_41E0_A3348388DA41, this.camera_84D36F8C_EC9A_05B9_41D2_C3B00BF91A55); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_824DF189_ECA9_FDB8_41E2_3BECE0CD5074",
   "pitch": -10.14,
   "hfov": 10.45,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -175.86
  }
 ],
 "id": "overlay_F0BFF651_E2EE_5731_41E4_24882AF2BC1A",
 "data": {
  "label": "Circle 01c"
 }
},
{
 "inertia": false,
 "id": "panorama_EADC0494_E147_99EC_41E6_6E85636B3ABA_tcap0",
 "angle": -21,
 "distance": 50,
 "rotate": false,
 "hfov": 36,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_EADDC172_E141_BB25_41D8_E09A626FB8FD_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.7,
   "yaw": -127.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EADC0494_E147_99EC_41E6_6E85636B3ABA_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.82
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_DC61FB58_E5AA_0D58_41E6_AB80B9F13949, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_B510B4D7_E5EA_1B57_41C1_1C2C6AC480BF, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_824E6189_ECA9_FDB8_41E1_4CECB8A7DC2F",
   "pitch": -11.82,
   "hfov": 2.7,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -127.22
  }
 ],
 "id": "overlay_DDC3AC6E_E5AA_0B79_41E7_705C323AF90C",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.68,
   "yaw": -65.63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EADC0494_E147_99EC_41E6_6E85636B3ABA_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.74
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_DDA1676F_E5AA_0577_41C5_13DBF9C09495, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_B511C4D8_E5EA_1B59_41E1_82546B30D62E, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_824ED189_ECA9_FDB8_41E6_75958044D58B",
   "pitch": -13.74,
   "hfov": 2.68,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -65.63
  }
 ],
 "id": "overlay_DD1914A6_E5AA_FBE9_41E0_63AFA57F6F4E",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.75,
   "yaw": -112.24,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EADC0494_E147_99EC_41E6_6E85636B3ABA_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.2
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_DDB67E6D_E5AA_077B_41EB_FC229823E01C, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_B512F4D8_E5EA_1B59_41E2_FEC5F340DE29, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_824F3189_ECA9_FDB8_41A2_9060D4703131",
   "pitch": 4.2,
   "hfov": 2.75,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -112.24
  }
 ],
 "id": "overlay_D2F52133_E5AA_1AE8_41D0_DD237D27A7DD",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.74,
   "yaw": -26.25,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EADC0494_E147_99EC_41E6_6E85636B3ABA_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.86
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_A6FCD7B0_E5A6_05E9_41BF_9AE914564AF3, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_B513E4DE_E5EA_1B59_41E2_65C0B4F16EB5, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_824F8189_ECA9_FDB8_41BE_8AB7A69ED45E",
   "pitch": -6.86,
   "hfov": 2.74,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -26.25
  }
 ],
 "id": "overlay_A7212136_E5A6_3AE9_41E2_E3EA5BE95896",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "map": {
  "width": 59,
  "x": 376.76,
  "offsetY": 0,
  "image": {
   "levels": [
    {
     "url": "media/map_D021BC9C_F1CC_DED3_41DF_BD35CA2B988A_HS_0_map.gif",
     "width": 23,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 108.82,
  "class": "HotspotMapOverlayMap",
  "height": 41,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 376.76,
  "y": 108.82,
  "width": 59,
  "image": {
   "levels": [
    {
     "url": "media/map_D021BC9C_F1CC_DED3_41DF_BD35CA2B988A_HS_0.png",
     "width": 59,
     "class": "ImageResourceLevel",
     "height": 41
    }
   ],
   "class": "ImageResource"
  },
  "class": "HotspotMapOverlayImage",
  "height": 41
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_EEEE2C28_F1CD_5DF3_41E7_1CAE88E1FC7A",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "map": {
  "width": 59,
  "x": 369.16,
  "offsetY": 0,
  "image": {
   "levels": [
    {
     "url": "media/map_D021BC9C_F1CC_DED3_41DF_BD35CA2B988A_HS_1_map.gif",
     "width": 23,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 244.4,
  "class": "HotspotMapOverlayMap",
  "height": 41,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 369.16,
  "y": 244.4,
  "width": 59,
  "image": {
   "levels": [
    {
     "url": "media/map_D021BC9C_F1CC_DED3_41DF_BD35CA2B988A_HS_1.png",
     "width": 59,
     "class": "ImageResourceLevel",
     "height": 41
    }
   ],
   "class": "ImageResource"
  },
  "class": "HotspotMapOverlayImage",
  "height": 41
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_D29EA0C8_F1CF_A6B3_41DF_889C3DAF1829",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "map": {
  "width": 59,
  "x": 514.86,
  "offsetY": 0,
  "image": {
   "levels": [
    {
     "url": "media/map_D021BC9C_F1CC_DED3_41DF_BD35CA2B988A_HS_2_map.gif",
     "width": 23,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 244.4,
  "class": "HotspotMapOverlayMap",
  "height": 41,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 514.86,
  "y": 244.4,
  "width": 59,
  "image": {
   "levels": [
    {
     "url": "media/map_D021BC9C_F1CC_DED3_41DF_BD35CA2B988A_HS_2.png",
     "width": 59,
     "class": "ImageResourceLevel",
     "height": 41
    }
   ],
   "class": "ImageResource"
  },
  "class": "HotspotMapOverlayImage",
  "height": 41
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_EEABF6AC_F1CF_EAF3_41CE_9ABF2C060AC8",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "map": {
  "width": 59,
  "x": 379.37,
  "offsetY": 0,
  "image": {
   "levels": [
    {
     "url": "media/map_D021BC9C_F1CC_DED3_41DF_BD35CA2B988A_HS_3_map.gif",
     "width": 23,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 327.96,
  "class": "HotspotMapOverlayMap",
  "height": 41,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 379.37,
  "y": 327.96,
  "width": 59,
  "image": {
   "levels": [
    {
     "url": "media/map_D021BC9C_F1CC_DED3_41DF_BD35CA2B988A_HS_3.png",
     "width": 59,
     "class": "ImageResourceLevel",
     "height": 41
    }
   ],
   "class": "ImageResource"
  },
  "class": "HotspotMapOverlayImage",
  "height": 41
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_D18CBD45_F1CF_5FBD_41E8_3F48F1EAD4B5",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "map": {
  "width": 59,
  "x": 567.9,
  "offsetY": 0,
  "image": {
   "levels": [
    {
     "url": "media/map_D021BC9C_F1CC_DED3_41DF_BD35CA2B988A_HS_4_map.gif",
     "width": 23,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 511.28,
  "class": "HotspotMapOverlayMap",
  "height": 41,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 567.9,
  "y": 511.28,
  "width": 59,
  "image": {
   "levels": [
    {
     "url": "media/map_D021BC9C_F1CC_DED3_41DF_BD35CA2B988A_HS_4.png",
     "width": 59,
     "class": "ImageResourceLevel",
     "height": 41
    }
   ],
   "class": "ImageResource"
  },
  "class": "HotspotMapOverlayImage",
  "height": 41
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_D0F6F9A7_F1CC_E6FD_41E1_06BE5EEFF233",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "map": {
  "width": 59,
  "x": 563,
  "offsetY": 0,
  "image": {
   "levels": [
    {
     "url": "media/map_D021BC9C_F1CC_DED3_41DF_BD35CA2B988A_HS_5_map.gif",
     "width": 23,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 329.86,
  "class": "HotspotMapOverlayMap",
  "height": 41,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 563,
  "y": 329.86,
  "width": 59,
  "image": {
   "levels": [
    {
     "url": "media/map_D021BC9C_F1CC_DED3_41DF_BD35CA2B988A_HS_5.png",
     "width": 59,
     "class": "ImageResourceLevel",
     "height": 41
    }
   ],
   "class": "ImageResource"
  },
  "class": "HotspotMapOverlayImage",
  "height": 41
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_D1642474_F1CC_AE52_41E1_C1D4C3468E97",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "map": {
  "width": 59,
  "x": 375.52,
  "offsetY": 0,
  "image": {
   "levels": [
    {
     "url": "media/map_D021BC9C_F1CC_DED3_41DF_BD35CA2B988A_HS_6_map.gif",
     "width": 23,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 652.56,
  "class": "HotspotMapOverlayMap",
  "height": 41,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 375.52,
  "y": 652.56,
  "width": 59,
  "image": {
   "levels": [
    {
     "url": "media/map_D021BC9C_F1CC_DED3_41DF_BD35CA2B988A_HS_6.png",
     "width": 59,
     "class": "ImageResourceLevel",
     "height": 41
    }
   ],
   "class": "ImageResource"
  },
  "class": "HotspotMapOverlayImage",
  "height": 41
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_D3436E2F_F1CC_BDCD_41E2_1AF8F2C464D3",
 "data": {
  "label": "Image"
 }
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_C872455D_E4E6_055B_4195_4480946DECFE",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "10%",
 "minWidth": 0,
 "paddingTop": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText66937"
 },
 "shadow": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.96,
   "yaw": -140.74,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EADDBD3C_E141_6B1D_41C2_3B8C0C9C91C2_1_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.76
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EF3E255F_E364_5063_41EA_23F03465E467, this.camera_8331FF12_EC9A_06A9_41CB_3C7EB43FDCD1); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_82577184_ECA9_FDA8_41DA_757D9E26DF64",
   "pitch": -17.76,
   "hfov": 21.96,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -140.74
  }
 ],
 "id": "overlay_ED5E2BF6_E2DA_3CF3_41C5_8F1E4907B579",
 "data": {
  "label": "Circle 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.76,
   "yaw": 1.82,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EADDBD3C_E141_6B1D_41C2_3B8C0C9C91C2_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.26
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EA80C6E4_E147_992C_41D3_588476BDC207, this.camera_84F8CF6C_EC9A_0579_41E0_80368E77530A); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8257D184_ECA9_FDA8_41E7_23F542703845",
   "pitch": 0.26,
   "hfov": 10.76,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 1.82
  }
 ],
 "id": "overlay_F2DEDCCC_E2E6_3B10_41EB_5C66F7EE525F",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.65,
   "yaw": -75.59,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EADDBD3C_E141_6B1D_41C2_3B8C0C9C91C2_1_HS_2_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.18
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EADDA963_E141_EB2B_41DB_CD069D3B479A, this.camera_84E03F4D_EC9A_06BB_41E7_EE12A194F70C); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_82481184_ECA9_FDA8_41E4_85DE0D024CAB",
   "pitch": -9.18,
   "hfov": 15.65,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -75.59
  }
 ],
 "id": "overlay_F25AAD4D_E2E6_D511_41D6_FDF65186072D",
 "data": {
  "label": "Circle 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.3,
   "yaw": -161.3,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EADDBD3C_E141_6B1D_41C2_3B8C0C9C91C2_1_HS_3_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.15
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EADC6654_E140_996D_41E8_8F536A929374, this.camera_8308FF30_EC9A_06E9_41E2_DDD866063A28); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_82486184_ECA9_FDA8_41E1_403A36FC02CC",
   "pitch": -9.15,
   "hfov": 13.3,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -161.3
  }
 ],
 "id": "overlay_FFCD81AC_E339_ED17_41E9_EA8DAD973F56",
 "data": {
  "label": "Circle 01c"
 }
},
{
 "inertia": false,
 "id": "panorama_EADDBD3C_E141_6B1D_41C2_3B8C0C9C91C2_tcap0",
 "angle": -21,
 "distance": 50,
 "rotate": false,
 "hfov": 36,
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/panorama_EADDC172_E141_BB25_41D8_E09A626FB8FD_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 }
},
{
 "rotationX": -11.84,
 "blending": 0,
 "id": "overlay_DA30CE05_E5FA_06AB_41E8_F25B34FDB072",
 "roll": -5.31,
 "loop": true,
 "image": {
  "levels": [
   {
    "url": "media/overlay_DA30CE05_E5FA_06AB_41E8_F25B34FDB072_t.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 768
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 9.05,
 "useHandCursor": true,
 "click": "this.openLink('https://api.whatsapp.com/send?phone=595981408400&text=Hola,%20me%20interesa%20el%20espacio%20publicitario%20en%20el%20Paseo%20Digital%20del%20Colegio%20Adventista.', '_blank')",
 "yaw": 120.33,
 "autoplay": true,
 "vfov": 20.09,
 "rotationY": 29.1,
 "class": "VideoPanoramaOverlay",
 "enabledInCardboard": true,
 "distance": 50,
 "hfov": 36.94,
 "data": {
  "label": "Video"
 },
 "videoVisibleOnStop": false,
 "video": {
  "width": 1024,
  "mp4Url": "media/video_DA3322B5_E59A_1FE8_41BA_BC17D10E3272.mp4",
  "class": "VideoResource",
  "height": 768
 }
},
{
 "rotationX": -10.19,
 "blending": 0,
 "id": "overlay_A5901A86_E5FA_0FA9_41B0_F69EBDB6C723",
 "roll": -8.73,
 "loop": true,
 "image": {
  "levels": [
   {
    "url": "media/overlay_A5901A86_E5FA_0FA9_41B0_F69EBDB6C723_t.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 768
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 5.67,
 "useHandCursor": true,
 "click": "this.openLink('https://api.whatsapp.com/send?phone=595981408400&text=Hola,%20me%20interesa%20el%20espacio%20publicitario%20en%20el%20Paseo%20Digital%20del%20Colegio%20Adventista.', '_blank')",
 "yaw": 145.69,
 "autoplay": true,
 "vfov": 13.58,
 "rotationY": 52.38,
 "class": "VideoPanoramaOverlay",
 "enabledInCardboard": true,
 "distance": 50,
 "hfov": 23.02,
 "data": {
  "label": "Video"
 },
 "videoVisibleOnStop": false,
 "video": {
  "width": 1024,
  "mp4Url": "media/video_DA3322B5_E59A_1FE8_41BA_BC17D10E3272.mp4",
  "class": "VideoResource",
  "height": 768
 }
},
{
 "horizontalAlign": "center",
 "maxHeight": 2,
 "maxWidth": 3000,
 "id": "Image_9511127C_9B79_D2C1_41D8_D080B87BFD84",
 "left": "0%",
 "backgroundOpacity": 0,
 "right": "0%",
 "class": "Image",
 "paddingRight": 0,
 "url": "skin/Image_9511127C_9B79_D2C1_41D8_D080B87BFD84.png",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "bottom": 53,
 "height": 2,
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_outside",
 "data": {
  "name": "white line"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_9A7696F9_9256_4198_41E2_40E7CF09A427",
 "left": "0%",
 "width": 1199,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "children": [
  "this.Button_03D37B27_0C7A_63B3_41A1_89572D8C8762",
  "this.Button_1FDDCF4A_0C0A_23FD_417A_1C14E098FDFD",
  "this.Button_1CA392FC_0C0A_2295_41A3_18DEA65FB6AD",
  "this.Button_1FE4B611_0C0A_256F_418E_EA27E66F8360",
  "this.Button_33E0F47E_11C1_A20D_419F_BB809AD89259"
 ],
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 0,
 "paddingLeft": 30,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "scrollBarWidth": 10,
 "height": 51,
 "minWidth": 1,
 "layout": "horizontal",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 3,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-button set container"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 100,
 "maxWidth": 100,
 "id": "Image_D58672B5_E4AA_1FEB_41E6_C3284163793C",
 "backgroundOpacity": 0,
 "right": "0.36%",
 "width": "3.739%",
 "class": "Image",
 "borderRadius": 0,
 "url": "skin/Image_D58672B5_E4AA_1FEB_41E6_C3284163793C.png",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "bottom": "6.96%",
 "height": "33.913%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "click": "this.openLink('https://api.whatsapp.com/send?phone=595981408400&text=Hola!%20Me%20gust%C3%B3%20el%20Paseo%20Digital%20del%20Colegio%20Adventista!', '_blank')",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image84916"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "backgroundOpacity": 0,
 "width": 110,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "overflow": "visible",
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "verticalAlign": "middle",
 "creationPolicy": "inAdvance",
 "scrollBarWidth": 10,
 "height": 110,
 "minWidth": 1,
 "layout": "horizontal",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "button menu sup"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "backgroundOpacity": 0,
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "width": "91.304%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": false,
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "height": "85.959%",
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "vertical",
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 3,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-button set"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 117,
 "maxWidth": 350,
 "id": "Image_E7B2A2F0_F0B5_AA52_41D2_6B37608AD1C2",
 "left": "0.17%",
 "backgroundOpacity": 0,
 "width": "72.965%",
 "class": "Image",
 "borderRadius": 0,
 "url": "skin/Image_E7B2A2F0_F0B5_AA52_41D2_6B37608AD1C2.png",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "height": "100%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image42399"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_386EC8AA_17CC_0B05_41A6_7EFCA2EDC23B",
 "left": "10%",
 "children": [
  "this.Container_386D38AA_17CC_0B05_4199_8338E0FE7991",
  "this.Container_386DA8AA_17CC_0B05_41A8_EBE6620047C3"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "10%",
 "shadowOpacity": 0.3,
 "shadowHorizontalLength": 0,
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "top": "5%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "5%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "horizontal",
 "shadowVerticalLength": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_386C28AA_17CC_0B05_41B7_3334E854CA29",
 "left": "10%",
 "children": [
  "this.IconButton_386C18AA_17CC_0B05_4198_1FCD97F770C0"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "10%",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 20,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "propagateClick": false,
 "minHeight": 1,
 "top": "5%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "80%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "layout": "vertical",
 "borderSize": 0,
 "paddingTop": 20,
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_3811F7E8_17DC_0505_417B_3406AEA143C9",
 "left": "15%",
 "children": [
  "this.Container_3811E7E8_17DC_0505_4189_A53F22044B22",
  "this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "shadowHorizontalLength": 0,
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "top": "7%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "7%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "vertical",
 "shadowVerticalLength": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_2792F64D_17CC_071F_415E_8686768A06D3",
 "left": "15%",
 "children": [
  "this.Container_2792E64D_17CC_071F_41B6_648718DBC7B5",
  "this.WebFrame_245FE213_17C4_1F0B_41A4_D9A473C556C8"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "shadowHorizontalLength": 0,
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "top": "7%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "7%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "vertical",
 "shadowVerticalLength": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 4,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_245BFB6E_173C_0D1A_41B3_7C2B11B7D45E",
 "left": "15%",
 "children": [
  "this.Container_245BCB6E_173C_0D1A_419A_5D9B9177800A",
  "this.MapViewer"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "shadowHorizontalLength": 0,
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "top": "7%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "7%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "vertical",
 "shadowVerticalLength": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 4,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_183FA20E_17B1_6AC3_41A6_A5FD4E159AED",
 "left": "10%",
 "children": [
  "this.Container_183F920E_17B1_6AC3_4174_65DF01CAE26A",
  "this.Container_1830320E_17B1_6AC3_41B6_E59ACE72BE82"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "10%",
 "shadowOpacity": 0.3,
 "shadowHorizontalLength": 0,
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "top": "5%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "5%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "horizontal",
 "shadowVerticalLength": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_1830920E_17B1_6AC3_41B2_4E4AC4718E27",
 "left": "10%",
 "children": [
  "this.IconButton_1830820E_17B1_6AC3_41A7_A2550D4CD4B6"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "10%",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 20,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "propagateClick": false,
 "minHeight": 1,
 "top": "5%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "80%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "layout": "vertical",
 "borderSize": 0,
 "paddingTop": 20,
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_03921F8D_0DF9_AB05_4179_670E86B12CD7",
 "left": "10%",
 "children": [
  "this.WebFrame_004362CD_0DF8_550A_41A2_E43911BDDCA2",
  "this.Button_035679DB_0DF8_570E_4181_0AB2725432EE"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 1,
 "right": "10%",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "hidden",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "top": "10%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "10%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container2450"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_8DFF3E18_ECEA_06D9_41D0_0B01BA3EBFF5",
 "left": "2%",
 "children": [
  "this.Container_8DFF0E18_ECEA_06D9_41E3_38B2083AC33E"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "2%",
 "shadowOpacity": 0.3,
 "shadowHorizontalLength": 0,
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "top": "2%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "2%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "horizontal",
 "shadowVerticalLength": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_8DFF8E18_ECEA_06D9_41DF_9CBF28F0822C",
 "left": "2%",
 "children": [
  "this.IconButton_8DFF9E18_ECEA_06D9_41CF_8A2519B5EC51"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "2%",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 10,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "propagateClick": false,
 "minHeight": 1,
 "top": "2%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "92%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "layout": "vertical",
 "borderSize": 0,
 "paddingTop": 10,
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "shadow": false
},
{
 "class": "AnimatedImageResource",
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E8E42205_E364_33E7_41E6_A73F2DB39F27_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_82A07170_ECA9_FD69_41EB_6EFFB2313B85",
 "rowCount": 5,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F52171BD_E4A4_5027_41E5_9EE998F7E297_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_8264F1A1_ECA9_FDEB_41EC_C42619788CEF",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E9C4108D_E46A_3BBB_41E4_FCB0E78FC031_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_826E619C_ECA9_FDD9_4177_6D672062F706",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E9C4108D_E46A_3BBB_41E4_FCB0E78FC031_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_826EE19C_ECA9_FDD9_41E6_0CDC376214A6",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EA8920BB_E140_B91B_41E9_D14906604A6B_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_8258517A_ECA9_FD58_41D7_5DDEC84A852F",
 "rowCount": 5,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EA8920BB_E140_B91B_41E9_D14906604A6B_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_8258A17A_ECA9_FD58_41B7_25B64EF63654",
 "rowCount": 5,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EA8920BB_E140_B91B_41E9_D14906604A6B_1_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_8258F17A_ECA9_FD58_41C6_1F3B2FAF315C",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EA8920BB_E140_B91B_41E9_D14906604A6B_1_HS_3_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_8259417A_ECA9_FD58_41DC_AFEC9F95E7E8",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EA8920BB_E140_B91B_41E9_D14906604A6B_1_HS_4_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_8259C17A_ECA9_FD58_41E1_6C61A9820EB1",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EA8920BB_E140_B91B_41E9_D14906604A6B_1_HS_5_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_825A217A_ECA9_FD58_41E0_4F970A658DA3",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EA8920BB_E140_B91B_41E9_D14906604A6B_1_HS_6_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_825A717A_ECA9_FD58_41D1_6FDF31808541",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EA8920BB_E140_B91B_41E9_D14906604A6B_1_HS_7_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_825AC17A_ECA9_FD58_41D3_120D29379552",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EA8920BB_E140_B91B_41E9_D14906604A6B_1_HS_8_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_825B217A_ECA9_FD58_41E7_81A70F8BC609",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E8F154F9_E364_F02F_41E0_7ADE7EBBD519_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_82A1B170_ECA9_FD69_41E7_7C0484FF0F1B",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E8F154F9_E364_F02F_41E0_7ADE7EBBD519_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_82A20170_ECA9_FD69_41E4_1062C018EAA7",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E8F154F9_E364_F02F_41E0_7ADE7EBBD519_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_82A26170_ECA9_FD69_41E3_3F1C5F28A88E",
 "rowCount": 5,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E8F154F9_E364_F02F_41E0_7ADE7EBBD519_1_HS_3_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_82A2B170_ECA9_FD69_41E0_E09D8BBA280C",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E8F154F9_E364_F02F_41E0_7ADE7EBBD519_1_HS_5_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_82A2F170_ECA9_FD69_41D8_AE2A6F2809DA",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E8F154F9_E364_F02F_41E0_7ADE7EBBD519_1_HS_6_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_82A34170_ECA9_FD69_41E6_12CC7DB72EDF",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E8F154F9_E364_F02F_41E0_7ADE7EBBD519_1_HS_7_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_82A3A170_ECA9_FD69_41D4_B8F9C45903B4",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E8FADA72_E364_F022_41C2_C29F7A235EAF_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_8244C189_ECA9_FDB8_41D0_4D47A154DE32",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E8FADA72_E364_F022_41C2_C29F7A235EAF_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_82452189_ECA9_FDB8_41D6_A6AF17B864D7",
 "rowCount": 5,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E8FADA72_E364_F022_41C2_C29F7A235EAF_1_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_82456189_ECA9_FDB8_41E8_C1D36524513B",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E8FADA72_E364_F022_41C2_C29F7A235EAF_1_HS_3_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_8245E18E_ECA9_FDB9_41CE_472784697580",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E8FADA72_E364_F022_41C2_C29F7A235EAF_1_HS_4_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_8246218E_ECA9_FDB9_41EA_6D94FD9879CE",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E8FADA72_E364_F022_41C2_C29F7A235EAF_1_HS_5_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_8246918E_ECA9_FDB9_41A6_F27B04B000C8",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E9C5B2DE_E46A_1F59_41E8_91B64D35D990_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_8264C1A1_ECA9_FDEB_41DC_E17FE1CE995F",
 "rowCount": 5,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E9C5B2DE_E46A_1F59_41E8_91B64D35D990_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_826521A1_ECA9_FDEB_41A6_50451793BB30",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E9C1D3F7_E46A_1D57_4197_60D58E87487C_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_8261019C_ECA9_FDD9_41AD_03AF43509E67",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E9C1D3F7_E46A_1D57_4197_60D58E87487C_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_8261719C_ECA9_FDD9_41DB_23E6CC889983",
 "rowCount": 5,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E9C1D3F7_E46A_1D57_4197_60D58E87487C_1_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_8261D19C_ECA9_FDD9_41EA_A51B74910515",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F521389D_E4A4_30E7_419D_206A40017412_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_82776197_ECA9_FDD7_41CB_1248D9A577FF",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F521389D_E4A4_30E7_419D_206A40017412_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_8277B197_ECA9_FDD7_41E6_060FB890A126",
 "rowCount": 5,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F521389D_E4A4_30E7_419D_206A40017412_1_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_82681197_ECA9_FDD7_41C5_91BCE5B8F52A",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F521389D_E4A4_30E7_419D_206A40017412_1_HS_3_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_82689197_ECA9_FDD7_41C3_995E01041764",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F521389D_E4A4_30E7_419D_206A40017412_1_HS_4_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_8268D197_ECA9_FDD7_41CC_8782DA1539EE",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F521389D_E4A4_30E7_419D_206A40017412_1_HS_5_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_82693197_ECA9_FDD7_41E0_DBA5B0A4CA8B",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F521389D_E4A4_30E7_419D_206A40017412_1_HS_6_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_82697197_ECA9_FDD7_41B7_25F5FB16FD3F",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EADDA963_E141_EB2B_41DB_CD069D3B479A_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_8254B184_ECA9_FDA8_41E5_DD3AD007D066",
 "rowCount": 5,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EADDA963_E141_EB2B_41DB_CD069D3B479A_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_82550184_ECA9_FDA8_41D5_9F3E8790E43B",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EADDA963_E141_EB2B_41DB_CD069D3B479A_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_82554184_ECA9_FDA8_41C6_B82A9F3729DA",
 "rowCount": 5,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EADDA963_E141_EB2B_41DB_CD069D3B479A_1_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_82559184_ECA9_FDA8_41E4_30E7409EC227",
 "rowCount": 5,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EADDA963_E141_EB2B_41DB_CD069D3B479A_1_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_82560184_ECA9_FDA8_41BD_6DF226D35749",
 "rowCount": 5,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EAE2003C_E141_991C_41CF_920F278E9C7B_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_8279318E_ECA9_FDB9_41D5_BC973F0C4AF0",
 "rowCount": 5,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EAE2003C_E141_991C_41CF_920F278E9C7B_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_8279718E_ECA9_FDB9_41BF_4EA63906D1DE",
 "rowCount": 5,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EFE15D2B_E466_0AFF_41D4_0DCE456C6586_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_82746197_ECA9_FDD7_41E1_8086D0A73A1E",
 "rowCount": 5,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EFE15D2B_E466_0AFF_41D4_0DCE456C6586_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_8274D197_ECA9_FDD7_41D6_8A866C035F77",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EFE15D2B_E466_0AFF_41D4_0DCE456C6586_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_82753197_ECA9_FDD7_41E6_F588DA2055A5",
 "rowCount": 5,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F5392FBD_E4A4_7027_41E3_AB0AD55108CB_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_82708192_ECA9_FDA9_41D8_86C144487442",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F5392FBD_E4A4_7027_41E3_AB0AD55108CB_1_HS_1_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "id": "AnimatedImageResource_82711192_ECA9_FDA9_41EC_55D302E7362D",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EADC6654_E140_996D_41E8_8F536A929374_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_8242A189_ECA9_FDB8_41B2_3463BB62CE64",
 "rowCount": 5,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EADC6654_E140_996D_41E8_8F536A929374_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_8242F189_ECA9_FDB8_41E9_C394D2F2E737",
 "rowCount": 5,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EADC6654_E140_996D_41E8_8F536A929374_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_82433189_ECA9_FDB8_41E5_EF00A8C63F1C",
 "rowCount": 5,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EADC6654_E140_996D_41E8_8F536A929374_1_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_82438189_ECA9_FDB8_41B2_45B44A6907C8",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F5217E84_E4A4_50E6_41B1_B7D2D7D82D72_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_827BF18E_ECA9_FDB9_41E3_7699225AEA0D",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F5217E84_E4A4_50E6_41B1_B7D2D7D82D72_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_827C618E_ECA9_FDB9_41CD_869BCA9A1F20",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F5217E84_E4A4_50E6_41B1_B7D2D7D82D72_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_827CB192_ECA9_FDA9_41D8_6950439DCFC7",
 "rowCount": 5,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F5217E84_E4A4_50E6_41B1_B7D2D7D82D72_1_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_827D1192_ECA9_FDA9_41DB_003554855930",
 "rowCount": 5,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F5217E84_E4A4_50E6_41B1_B7D2D7D82D72_1_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_827D8192_ECA9_FDA9_41E7_1EBF2088DA37",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F5217E84_E4A4_50E6_41B1_B7D2D7D82D72_1_HS_5_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_827DE192_ECA9_FDA9_41E9_00E48BDBDE93",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F5217E84_E4A4_50E6_41B1_B7D2D7D82D72_1_HS_8_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_827EF192_ECA9_FDA9_41E5_BBD7F53CE2A1",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F6165FE8_E4A4_502E_41CE_D0E472165F33_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_82721192_ECA9_FDA9_41AB_64BFA7D13DE1",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F6165FE8_E4A4_502E_41CE_D0E472165F33_1_HS_1_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "id": "AnimatedImageResource_8272A192_ECA9_FDA9_41EA_BAA2FC3291FE",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F5214712_E4A4_51E2_41E0_B73B9A6D712C_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_826A9197_ECA9_FDD7_41DA_3F9C6763889C",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EADCE602_E147_B8E5_41E0_A3348388DA41_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_824ED189_ECA9_FDB8_41D9_4D709C860838",
 "rowCount": 5,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EADCE602_E147_B8E5_41E0_A3348388DA41_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_824F2189_ECA9_FDB8_41C9_5BFA09D33558",
 "rowCount": 5,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EADCE602_E147_B8E5_41E0_A3348388DA41_1_HS_2_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_824F8189_ECA9_FDB8_41EB_DF7AC0CECA69",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_ED4F5164_E141_7B2C_41CB_BAE8006AA571_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_827A818E_ECA9_FDB9_41D6_3D66120EA2D3",
 "rowCount": 5,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_ED4F5164_E141_7B2C_41CB_BAE8006AA571_1_HS_1_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "id": "AnimatedImageResource_827B118E_ECA9_FDB9_41E8_B4B0394DCB28",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E8C90C1B_E365_F7E2_41D7_18E9C82943A5_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_8279218E_ECA9_FDB9_41E5_3F8C23E34056",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E8C90C1B_E365_F7E2_41D7_18E9C82943A5_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_8279718E_ECA9_FDB9_41D2_73B46287C72A",
 "rowCount": 5,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E8C90C1B_E365_F7E2_41D7_18E9C82943A5_1_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_8278518E_ECA9_FDB9_41B8_B719D3AEFAD3",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EADDC172_E141_BB25_41D8_E09A626FB8FD_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_82AB3170_ECA9_FD69_41C9_E525939ADFFD",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EAF0B794_E147_67ED_41D1_DF56AF0E8AFE_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_825F917F_ECA9_FD58_41AB_E18282AF585B",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EAF0B794_E147_67ED_41D1_DF56AF0E8AFE_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_825FF17F_ECA9_FD58_41D4_6DEC26C723E9",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EAF0B794_E147_67ED_41D1_DF56AF0E8AFE_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_8250417F_ECA9_FD58_41EA_D098F857A3F2",
 "rowCount": 5,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EAF0B794_E147_67ED_41D1_DF56AF0E8AFE_1_HS_3_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_8250A17F_ECA9_FD58_41C4_FAC15DB08F1D",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EAF0B794_E147_67ED_41D1_DF56AF0E8AFE_1_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_825F917F_ECA9_FD58_41EB_73AA23E7A3BA",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EAF0B794_E147_67ED_41D1_DF56AF0E8AFE_1_HS_5_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_825FF17F_ECA9_FD58_41E3_C80349A4F729",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EAF0B794_E147_67ED_41D1_DF56AF0E8AFE_1_HS_6_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_8250617F_ECA9_FD58_41E2_BF16F8F2C4E6",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E9C2B1AC_E46A_1DF9_41D2_1E8C48B2DC22_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_826FC19C_ECA9_FDD9_41A4_E4F8C2015D12",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E9C5C3B9_E46A_3DDB_41B2_81F19F4D0621_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_8263019C_ECA9_FDD9_41CD_66455CEB475F",
 "rowCount": 5,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E9C5C3B9_E46A_3DDB_41B2_81F19F4D0621_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_8263719C_ECA9_FDD9_41A8_B326C7AA7A71",
 "rowCount": 5,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EADC6D16_E147_A8ED_41E7_7A006A29B117_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_82ACB170_ECA9_FD69_41E5_F63DB9FF7E82",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EADC6D16_E147_A8ED_41E7_7A006A29B117_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_82ACF170_ECA9_FD69_41EA_05C00E359341",
 "rowCount": 5,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EADC6D16_E147_A8ED_41E7_7A006A29B117_1_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_82AD4170_ECA9_FD69_41D1_61451C6A6F5A",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E8B9812A_E364_302D_41E2_DFDB9823113D_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_8247918E_ECA9_FDB9_41EA_A9BD445A2D82",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E8B9812A_E364_302D_41E2_DFDB9823113D_1_HS_1_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "id": "AnimatedImageResource_8247F18E_ECA9_FDB9_41E3_0A9E30B311F3",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F5213C55_E4A4_D066_416D_85F4BFC80191_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_8273D192_ECA9_FDA9_41E3_591D9E38B7E1",
 "rowCount": 5,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F5213C55_E4A4_D066_416D_85F4BFC80191_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_82743192_ECA9_FDA9_41D0_2FEE9416FDDC",
 "rowCount": 5,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F5213C55_E4A4_D066_416D_85F4BFC80191_1_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_82749192_ECA9_FDA9_41EB_53A193647A4F",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F5213C55_E4A4_D066_416D_85F4BFC80191_1_HS_3_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_82750192_ECA9_FDA9_41CA_7A14D416EFEC",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EF3E255F_E364_5063_41EA_23F03465E467_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_82408189_ECA9_FDB8_41DF_01558ED0A0C3",
 "rowCount": 5,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EF3E255F_E364_5063_41EA_23F03465E467_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_8240E189_ECA9_FDB8_41E2_223933B71519",
 "rowCount": 5,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EF3E255F_E364_5063_41EA_23F03465E467_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_82413189_ECA9_FDB8_4185_CC18BC623CD1",
 "rowCount": 5,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EF3E255F_E364_5063_41EA_23F03465E467_1_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_82419189_ECA9_FDB8_41DC_305EFA359850",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E9C4F462_E46B_FB69_41EA_EBF76426CC46_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_826B8197_ECA9_FDD7_419E_119E925493EC",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E9C4F462_E46B_FB69_41EA_EBF76426CC46_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_826C019C_ECA9_FDD9_41A3_C22940BA0BAA",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E9C4F462_E46B_FB69_41EA_EBF76426CC46_1_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_826C819C_ECA9_FDD9_41D3_D59C9155BA32",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EA80C6E4_E147_992C_41D3_588476BDC207_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_82499184_ECA9_FDA8_41D6_B0AE30D67866",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EA80C6E4_E147_992C_41D3_588476BDC207_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_8249F184_ECA9_FDA8_41E7_8AA0C5B95DE3",
 "rowCount": 5,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EA80C6E4_E147_992C_41D3_588476BDC207_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_824A5184_ECA9_FDA8_41D5_2D03CF107B86",
 "rowCount": 5,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EA80C6E4_E147_992C_41D3_588476BDC207_1_HS_3_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_824AD184_ECA9_FDA8_41E8_94647A87F16A",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EA80C6E4_E147_992C_41D3_588476BDC207_1_HS_4_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_824B2184_ECA9_FDA8_41C5_5DCE2D7488E5",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EA80C6E4_E147_992C_41D3_588476BDC207_1_HS_5_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_824B7184_ECA9_FDA8_41B8_607C19BE8A48",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EA80C6E4_E147_992C_41D3_588476BDC207_1_HS_6_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_824BE184_ECA9_FDA8_41EA_91323E077436",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EA80C6E4_E147_992C_41D3_588476BDC207_1_HS_7_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_824C4184_ECA9_FDA8_41D9_F36BA53A5D34",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EA80C6E4_E147_992C_41D3_588476BDC207_1_HS_8_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_824CA184_ECA9_FDA8_41D0_C8F153CF058D",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E9C6E272_E46A_7F69_41D0_A0613D7F1112_1_HS_0_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "id": "AnimatedImageResource_82767197_ECA9_FDD7_41CD_FE13B3E38325",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EADC0494_E147_99EC_41E6_6E85636B3ABA_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_824DA189_ECA9_FDB8_41DD_4EEE0E414DBE",
 "rowCount": 5,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EADC0494_E147_99EC_41E6_6E85636B3ABA_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_824DF189_ECA9_FDB8_41E2_3BECE0CD5074",
 "rowCount": 5,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EADC0494_E147_99EC_41E6_6E85636B3ABA_1_HS_2_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_824E6189_ECA9_FDB8_41E1_4CECB8A7DC2F",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EADC0494_E147_99EC_41E6_6E85636B3ABA_1_HS_3_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_824ED189_ECA9_FDB8_41E6_75958044D58B",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EADC0494_E147_99EC_41E6_6E85636B3ABA_1_HS_4_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_824F3189_ECA9_FDB8_41A2_9060D4703131",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EADC0494_E147_99EC_41E6_6E85636B3ABA_1_HS_5_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_824F8189_ECA9_FDB8_41BE_8AB7A69ED45E",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EADDBD3C_E141_6B1D_41C2_3B8C0C9C91C2_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_82577184_ECA9_FDA8_41DA_757D9E26DF64",
 "rowCount": 5,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EADDBD3C_E141_6B1D_41C2_3B8C0C9C91C2_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_8257D184_ECA9_FDA8_41E7_23F542703845",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EADDBD3C_E141_6B1D_41C2_3B8C0C9C91C2_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_82481184_ECA9_FDA8_41E4_85DE0D024CAB",
 "rowCount": 5,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EADDBD3C_E141_6B1D_41C2_3B8C0C9C91C2_1_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_82486184_ECA9_FDA8_41E1_403A36FC02CC",
 "rowCount": 5,
 "colCount": 4
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "center",
 "id": "Button_03D37B27_0C7A_63B3_41A1_89572D8C8762",
 "backgroundOpacity": 0,
 "width": 104,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#FF361B"
 ],
 "click": "this.setComponentVisibility(this.Container_386C68AA_17CC_0B05_4191_7DAFDF1C1A4B, true, 0, null, null, false)",
 "iconHeight": 0,
 "class": "Button",
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "rollOverShadow": false,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "verticalAlign": "middle",
 "layout": "horizontal",
 "height": 40,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "INFORMACI\u00d3N",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button house info"
 },
 "shadow": false,
 "iconWidth": 0,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "center",
 "id": "Button_1FDDCF4A_0C0A_23FD_417A_1C14E098FDFD",
 "backgroundOpacity": 0,
 "width": 106,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#FF361B"
 ],
 "click": "this.setComponentVisibility(this.Container_381217E8_17DC_0505_41A2_85B8D0083AEA, true, 0, null, null, false)",
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "verticalAlign": "middle",
 "layout": "horizontal",
 "height": 40,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "PERSPECTIVAS",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button panorama list"
 },
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "center",
 "id": "Button_1CA392FC_0C0A_2295_41A3_18DEA65FB6AD",
 "backgroundOpacity": 0,
 "width": 86,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#FF361B"
 ],
 "click": "this.setComponentVisibility(this.Container_2792A64E_17CC_071D_41B0_BEA23997C067, true, 0, null, null, false)",
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "verticalAlign": "middle",
 "layout": "horizontal",
 "height": 40,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "UBICACI\u00d3N",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button location"
 },
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "center",
 "id": "Button_1FE4B611_0C0A_256F_418E_EA27E66F8360",
 "backgroundOpacity": 0,
 "width": 70,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#FF361B"
 ],
 "click": "this.setComponentVisibility(this.Container_8DFFEE18_ECEA_06D9_41DA_706F561877D5, true, 0, null, null, false)",
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "verticalAlign": "middle",
 "layout": "horizontal",
 "height": 40,
 "rollOverFontColor": "#FFFFFF",
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "REVISTA",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button floorplan"
 },
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "center",
 "id": "Button_33E0F47E_11C1_A20D_419F_BB809AD89259",
 "backgroundOpacity": 0,
 "width": 81,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#FF361B"
 ],
 "click": "this.setComponentVisibility(this.Container_1831720E_17B1_6AC3_41B2_FDD66A00A2E5, true, 0, null, null, false)",
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "verticalAlign": "middle",
 "layout": "horizontal",
 "height": 40,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "CONTACT0",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button contact"
 },
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "backgroundOpacity": 0,
 "width": 60,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 60,
 "minWidth": 1,
 "mode": "toggle",
 "transparencyActive": true,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "paddingBottom": 0,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "borderSize": 0,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "data": {
  "name": "image button menu"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "backgroundOpacity": 0,
 "width": 58,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 58,
 "minWidth": 1,
 "mode": "push",
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.shareTwitter('https://www.visitapy.com/cada')",
 "borderSize": 0,
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "data": {
  "name": "IconButton TWITTER"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "backgroundOpacity": 0,
 "width": 58,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 58,
 "minWidth": 1,
 "mode": "push",
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.shareFacebook('https://www.visitapy.com/cada')",
 "borderSize": 0,
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "data": {
  "name": "IconButton FB"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_386D38AA_17CC_0B05_4199_8338E0FE7991",
 "backgroundOpacity": 1,
 "children": [
  "this.Image_E8F488D4_F14C_A653_41CA_94DCA84FF02A"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "36.942%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "backgroundColor": [
  "#000000"
 ],
 "verticalAlign": "middle",
 "minWidth": 1,
 "layout": "absolute",
 "height": "100%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-left"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.51,
 "id": "Container_386DA8AA_17CC_0B05_41A8_EBE6620047C3",
 "backgroundOpacity": 1,
 "children": [
  "this.Container_386D98AA_17CC_0B05_41AE_A3E113DCCC00",
  "this.Container_386D88AA_17CC_0B05_41B1_9A2C832D4E62",
  "this.Container_386DC8AA_17CC_0B05_418D_1F78D6A291FF",
  "this.Button_386DE8AA_17CC_0B05_41B5_DE879E1001C4"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "60.992%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 50,
 "paddingRight": 50,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "middle",
 "minWidth": 460,
 "layout": "vertical",
 "height": "100%",
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 50,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#0069A3",
 "data": {
  "name": "-right"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 50,
 "maxWidth": 50,
 "id": "IconButton_386C18AA_17CC_0B05_4198_1FCD97F770C0",
 "backgroundOpacity": 0,
 "width": "25%",
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 40,
 "rollOverIconURL": "skin/IconButton_386C18AA_17CC_0B05_4198_1FCD97F770C0_rollover.jpg",
 "propagateClick": false,
 "height": "75%",
 "verticalAlign": "middle",
 "minWidth": 40,
 "mode": "push",
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_386C18AA_17CC_0B05_4198_1FCD97F770C0_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_386C68AA_17CC_0B05_4191_7DAFDF1C1A4B, false, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_386C18AA_17CC_0B05_4198_1FCD97F770C0.jpg",
 "data": {
  "name": "X"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_3811E7E8_17DC_0505_4189_A53F22044B22",
 "backgroundOpacity": 1,
 "children": [
  "this.HTMLText_3811C7E8_17DC_0505_4199_1B551680AC34",
  "this.IconButton_381237E8_17DC_0505_41B6_D4CE0AA1A79E"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "height": 80,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#FF361B"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "header"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "itemLabelPosition": "bottom",
 "id": "ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B",
 "backgroundOpacity": 0,
 "width": "100%",
 "selectedItemThumbnailShadowBlurRadius": 16,
 "itemBorderRadius": 0,
 "rollOverItemLabelFontSize": 16,
 "itemMinHeight": 50,
 "scrollBarMargin": 2,
 "class": "ThumbnailGrid",
 "rollOverItemLabelFontColor": "#C1280E",
 "itemVerticalAlign": "top",
 "paddingLeft": 70,
 "itemPaddingLeft": 3,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "itemOpacity": 1,
 "height": "100%",
 "playList": "this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist",
 "verticalAlign": "middle",
 "minWidth": 1,
 "itemMinWidth": 50,
 "itemBackgroundColor": [],
 "itemThumbnailOpacity": 1,
 "itemBackgroundColorRatios": [],
 "itemPaddingTop": 3,
 "borderSize": 0,
 "itemPaddingRight": 3,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "scrollBarColor": "#FF361B",
 "itemHeight": 160,
 "shadow": false,
 "selectedItemLabelFontSize": 16,
 "itemLabelTextDecoration": "none",
 "itemBackgroundOpacity": 0,
 "selectedItemLabelFontColor": "#C1280E",
 "scrollBarOpacity": 0.5,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "itemLabelFontWeight": "normal",
 "itemThumbnailHeight": 125,
 "rollOverItemThumbnailShadow": true,
 "scrollBarVisible": "rollOver",
 "itemThumbnailScaleMode": "fit_outside",
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "itemLabelFontSize": 16,
 "borderRadius": 5,
 "itemLabelGap": 7,
 "paddingRight": 70,
 "itemBackgroundColorDirection": "vertical",
 "itemThumbnailShadow": false,
 "selectedItemThumbnailShadow": true,
 "itemThumbnailWidth": 220,
 "itemLabelFontColor": "#666666",
 "itemHorizontalAlign": "center",
 "gap": 26,
 "itemMaxHeight": 1000,
 "selectedItemLabelFontWeight": "bold",
 "paddingBottom": 70,
 "itemPaddingBottom": 3,
 "itemMaxWidth": 1000,
 "paddingTop": 30,
 "itemLabelHorizontalAlign": "center",
 "itemLabelFontStyle": "normal",
 "itemWidth": 220,
 "itemMode": "normal",
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "data": {
  "name": "ThumbnailList5161"
 },
 "itemThumbnailBorderRadius": 0,
 "rollOverItemThumbnailShadowColor": "#FF361B",
 "itemLabelFontFamily": "Oswald Regular",
 "selectedItemThumbnailShadowHorizontalLength": 0
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_2792E64D_17CC_071F_41B6_648718DBC7B5",
 "backgroundOpacity": 1,
 "children": [
  "this.HTMLText_2792D64D_17CC_071F_4198_A70438B191B7",
  "this.IconButton_2792C64E_17CC_071D_41A6_23C9E23D2F14"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "height": 80,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#FF361B"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "header"
 },
 "shadow": false
},
{
 "id": "WebFrame_245FE213_17C4_1F0B_41A4_D9A473C556C8",
 "backgroundOpacity": 1,
 "width": "100%",
 "class": "WebFrame",
 "borderRadius": 0,
 "insetBorder": false,
 "paddingLeft": 0,
 "paddingRight": 0,
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1072.36563120268!2d-57.61216582710303!3d-25.304417062917672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x71d74293f517700e!2sColegio%20Adventista%20de%20Asunci%C3%B3n!5e0!3m2!1ses-419!2spy!4v1576006038833!5m2!1ses-419!2spy",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "height": "89.205%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "borderSize": 0,
 "scrollEnabled": true,
 "data": {
  "name": "WebFrame52781"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_245BCB6E_173C_0D1A_419A_5D9B9177800A",
 "backgroundOpacity": 1,
 "children": [
  "this.HTMLText_245BDB6E_173C_0D1A_41AA_78BDF4EE53FF",
  "this.IconButton_24582B6E_173C_0D1A_41AB_C451C6520A14"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "height": 80,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#FF361B"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "header"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_183F920E_17B1_6AC3_4174_65DF01CAE26A",
 "backgroundOpacity": 1,
 "children": [
  "this.Image_EDEA5FBA_F14D_5AD7_41CE_F4032C56F2D1"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "hidden",
 "width": "30%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "backgroundColor": [
  "#000000"
 ],
 "verticalAlign": "middle",
 "minWidth": 1,
 "layout": "absolute",
 "height": "100%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-left"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51,
 "id": "Container_1830320E_17B1_6AC3_41B6_E59ACE72BE82",
 "backgroundOpacity": 1,
 "children": [
  "this.Container_1830220E_17B1_6AC3_4178_5E7AD867CE60",
  "this.Container_1830020E_17B1_6AC3_4194_70380D44B9C6",
  "this.Container_1830A20E_17B1_6AC3_41B1_7B5CC3A88353"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "70%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 50,
 "paddingRight": 50,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 460,
 "layout": "vertical",
 "height": "100%",
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 20,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#0069A3",
 "data": {
  "name": "-right"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 50,
 "maxWidth": 50,
 "id": "IconButton_1830820E_17B1_6AC3_41A7_A2550D4CD4B6",
 "backgroundOpacity": 0,
 "width": "25%",
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 40,
 "rollOverIconURL": "skin/IconButton_1830820E_17B1_6AC3_41A7_A2550D4CD4B6_rollover.jpg",
 "propagateClick": false,
 "height": "75%",
 "verticalAlign": "middle",
 "minWidth": 40,
 "mode": "push",
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_1830820E_17B1_6AC3_41A7_A2550D4CD4B6_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_1831720E_17B1_6AC3_41B2_FDD66A00A2E5, false, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_1830820E_17B1_6AC3_41A7_A2550D4CD4B6.jpg",
 "data": {
  "name": "X"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "id": "WebFrame_004362CD_0DF8_550A_41A2_E43911BDDCA2",
 "left": "0%",
 "width": "99.97%",
 "backgroundOpacity": 1,
 "class": "WebFrame",
 "paddingRight": 0,
 "insetBorder": false,
 "paddingLeft": 0,
 "borderRadius": 0,
 "url": "http://cbucci.com/ads/cada/01/fullscreen_clasic_dark.html",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "top": "0%",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "height": "99.972%",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "scrollEnabled": false,
 "data": {
  "name": "WebFrame2821"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Montserrat",
 "horizontalAlign": "center",
 "data": {
  "name": "Button house info"
 },
 "id": "Button_035679DB_0DF8_570E_4181_0AB2725432EE",
 "backgroundOpacity": 0,
 "width": 110,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#BBD149"
 ],
 "right": "2.22%",
 "shadowOpacity": 0.81,
 "iconHeight": 0,
 "shadowHorizontalLength": 1,
 "class": "Button",
 "paddingRight": 0,
 "pressedBackgroundColor": [
  "#BBD149"
 ],
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "top": "2.1%",
 "verticalAlign": "middle",
 "pressedBackgroundOpacity": 1,
 "layout": "horizontal",
 "height": 40,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_004462E1_0DFB_B53A_4192_155A961E0B9D, false, 0, null, null, false); eval('player.getById(\\'resumeGlobalAudios\\')();');",
 "fontSize": "22px",
 "borderSize": 0,
 "shadowVerticalLength": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "CERRAR",
 "fontStyle": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "rollOverShadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": true,
 "iconWidth": 0,
 "shadowBlurRadius": 7,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "bold"
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_8DFF0E18_ECEA_06D9_41E3_38B2083AC33E",
 "backgroundOpacity": 1,
 "children": [
  "this.WebFrame_815EB9DA_EC9E_0D59_41D4_4970D3CBCBE3"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "backgroundColor": [
  "#000000"
 ],
 "verticalAlign": "middle",
 "minWidth": 1,
 "layout": "absolute",
 "height": "100%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "content"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_8DFF9E18_ECEA_06D9_41CF_8A2519B5EC51",
 "backgroundOpacity": 0,
 "width": "25%",
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 30,
 "rollOverIconURL": "skin/IconButton_8DFF9E18_ECEA_06D9_41CF_8A2519B5EC51_rollover.jpg",
 "propagateClick": false,
 "height": "75%",
 "verticalAlign": "middle",
 "minWidth": 40,
 "mode": "push",
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_8DFF9E18_ECEA_06D9_41CF_8A2519B5EC51_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_8DFFEE18_ECEA_06D9_41DA_706F561877D5, false, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_8DFF9E18_ECEA_06D9_41CF_8A2519B5EC51.jpg",
 "data": {
  "name": "X"
 },
 "shadow": false,
 "pressedRollOverIconURL": "skin/IconButton_8DFF9E18_ECEA_06D9_41CF_8A2519B5EC51_pressed_rollover.jpg",
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 944,
 "maxWidth": 600,
 "id": "Image_E8F488D4_F14C_A653_41CA_94DCA84FF02A",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "class": "Image",
 "borderRadius": 0,
 "url": "skin/Image_E8F488D4_F14C_A653_41CA_94DCA84FF02A.jpg",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "height": "100%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_to_height",
 "data": {
  "name": "Image47031"
 },
 "shadow": false
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_386D98AA_17CC_0B05_41AE_A3E113DCCC00",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "height": 60,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "horizontal",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79,
 "id": "Container_386D88AA_17CC_0B05_41B1_9A2C832D4E62",
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_386DF8AA_17CC_0B05_41AE_D7BDB2970D08"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 520,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 100,
 "layout": "vertical",
 "height": "100%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 30,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#E73B2C",
 "data": {
  "name": "Container text"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_386DC8AA_17CC_0B05_418D_1F78D6A291FF",
 "backgroundOpacity": 0.3,
 "width": 370,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "height": 40,
 "minWidth": 1,
 "layout": "horizontal",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Bebas Neue Bold",
 "horizontalAlign": "center",
 "data": {
  "name": "Button31015"
 },
 "id": "Button_386DE8AA_17CC_0B05_41B5_DE879E1001C4",
 "backgroundOpacity": 1,
 "width": 207,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#C1280E"
 ],
 "click": "this.openLink('http://cada.educacionadventista.com/#contato', '_blank')",
 "shadowOpacity": 0.57,
 "iconHeight": 32,
 "shadowHorizontalLength": 3,
 "class": "Button",
 "paddingRight": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingLeft": 0,
 "borderRadius": 10,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "verticalAlign": "middle",
 "layout": "horizontal",
 "height": 59,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#FF361B"
 ],
 "fontSize": "3.7vh",
 "borderSize": 0,
 "shadowVerticalLength": -3,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Contactenos",
 "fontStyle": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 1,
 "shadow": true,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_3811C7E8_17DC_0505_4199_1B551680AC34",
 "left": "0%",
 "width": "77.115%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingLeft": 80,
 "paddingRight": 0,
 "minHeight": 0,
 "propagateClick": false,
 "top": "0%",
 "scrollBarWidth": 10,
 "height": 80,
 "minWidth": 1,
 "paddingTop": 17,
 "paddingBottom": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.92vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-family:'Oswald';\"><B>PANORAMAS</B></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText54192"
 },
 "shadow": false
},
{
 "horizontalAlign": "right",
 "maxHeight": 50,
 "maxWidth": 50,
 "id": "IconButton_381237E8_17DC_0505_41B6_D4CE0AA1A79E",
 "backgroundOpacity": 0,
 "width": 50,
 "right": 15,
 "class": "IconButton",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 40,
 "rollOverIconURL": "skin/IconButton_381237E8_17DC_0505_41B6_D4CE0AA1A79E_rollover.jpg",
 "propagateClick": false,
 "top": 15,
 "verticalAlign": "top",
 "height": 50,
 "minWidth": 40,
 "mode": "push",
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_381237E8_17DC_0505_41B6_D4CE0AA1A79E_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_381217E8_17DC_0505_41A2_85B8D0083AEA, false, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_381237E8_17DC_0505_41B6_D4CE0AA1A79E.jpg",
 "data": {
  "name": "X"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_2792D64D_17CC_071F_4198_A70438B191B7",
 "left": "0%",
 "width": "77.115%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingLeft": 80,
 "paddingRight": 0,
 "minHeight": 0,
 "propagateClick": false,
 "top": "0%",
 "scrollBarWidth": 10,
 "height": 80,
 "minWidth": 1,
 "paddingTop": 17,
 "paddingBottom": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.92vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-family:'Oswald';\"><B>UBICACI\u00d3N</B></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText54192"
 },
 "shadow": false
},
{
 "horizontalAlign": "right",
 "maxHeight": 50,
 "maxWidth": 50,
 "id": "IconButton_2792C64E_17CC_071D_41A6_23C9E23D2F14",
 "backgroundOpacity": 0,
 "width": 70,
 "right": 15,
 "class": "IconButton",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 40,
 "rollOverIconURL": "skin/IconButton_2792C64E_17CC_071D_41A6_23C9E23D2F14_rollover.jpg",
 "propagateClick": false,
 "top": 15,
 "verticalAlign": "top",
 "height": 70,
 "minWidth": 40,
 "mode": "push",
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2792C64E_17CC_071D_41A6_23C9E23D2F14_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_2792A64E_17CC_071D_41B0_BEA23997C067, false, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_2792C64E_17CC_071D_41A6_23C9E23D2F14.jpg",
 "data": {
  "name": "X"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_245BDB6E_173C_0D1A_41AA_78BDF4EE53FF",
 "left": "0%",
 "width": "77.115%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingLeft": 80,
 "paddingRight": 0,
 "minHeight": 0,
 "propagateClick": false,
 "top": "0%",
 "scrollBarWidth": 10,
 "height": 80,
 "minWidth": 1,
 "paddingTop": 17,
 "paddingBottom": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.92vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-family:'Oswald';\"><B>PLANOS</B></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText54192"
 },
 "shadow": false
},
{
 "horizontalAlign": "right",
 "maxHeight": 50,
 "maxWidth": 50,
 "id": "IconButton_24582B6E_173C_0D1A_41AB_C451C6520A14",
 "backgroundOpacity": 0,
 "width": 70,
 "right": 15,
 "class": "IconButton",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 40,
 "rollOverIconURL": "skin/IconButton_24582B6E_173C_0D1A_41AB_C451C6520A14_rollover.jpg",
 "propagateClick": false,
 "top": 15,
 "verticalAlign": "top",
 "height": 70,
 "minWidth": 40,
 "mode": "push",
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_24582B6E_173C_0D1A_41AB_C451C6520A14_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_24580B6E_173C_0D1A_41B0_1B17CFD194C1, false, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_24582B6E_173C_0D1A_41AB_C451C6520A14.jpg",
 "data": {
  "name": "X"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 944,
 "maxWidth": 600,
 "id": "Image_EDEA5FBA_F14D_5AD7_41CE_F4032C56F2D1",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "class": "Image",
 "borderRadius": 0,
 "url": "skin/Image_EDEA5FBA_F14D_5AD7_41CE_F4032C56F2D1.jpg",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "height": "100%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_outside",
 "data": {
  "name": "Image50276"
 },
 "shadow": false
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_1830220E_17B1_6AC3_4178_5E7AD867CE60",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "height": 50,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "horizontal",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79,
 "id": "Container_1830020E_17B1_6AC3_4194_70380D44B9C6",
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_1830E20E_17B1_6AC3_419B_A422A7600CB2"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 520,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 100,
 "layout": "vertical",
 "height": "88.281%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 30,
 "gap": 25,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#E73B2C",
 "data": {
  "name": "-Container text"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_1830A20E_17B1_6AC3_41B1_7B5CC3A88353",
 "backgroundOpacity": 0.3,
 "width": 370,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "height": 40,
 "minWidth": 1,
 "layout": "horizontal",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "shadow": false
},
{
 "id": "WebFrame_815EB9DA_EC9E_0D59_41D4_4970D3CBCBE3",
 "backgroundOpacity": 1,
 "width": "100%",
 "right": "0%",
 "class": "WebFrame",
 "paddingRight": 0,
 "insetBorder": false,
 "paddingLeft": 0,
 "borderRadius": 0,
 "url": "https://instadv.cbucci.com/",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "bottom": "0%",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "scrollEnabled": true,
 "data": {
  "name": "WebFrame136084"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_386DF8AA_17CC_0B05_41AE_D7BDB2970D08",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 20,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ff361b;font-size:8.39vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.37vh;font-family:'Oswald';\"><B>Colegio Adventista de Asunci\u00f3n</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.92vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.92vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.92vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ff0000;font-family:'Oswald Regular';\">Una instituci\u00f3n para el regocijo intelectual, espiritual y personal de nuestros ni\u00f1os en crecimiento.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.92vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.92vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.92vh;font-family:Arial, Helvetica, sans-serif;\">La EA considera el proceso educativo de forma integral y promueve la interacci\u00f3n entre la teor\u00eda y la pr\u00e1ctica, el pensar y el hacer, la raz\u00f3n y la emoci\u00f3n, lo individual y lo colectivo, la causa y el efecto; entiende que tanto los educadores como los estudiantes pueden ense\u00f1ar y aprender.</SPAN></DIV><p STYLE=\"margin:0; line-height:4.92vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.92vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.92vh;font-family:Arial, Helvetica, sans-serif;\">La propuesta pedag\u00f3gica de la red EA es respetuosa de las pol\u00edticas y los curr\u00edculos educativos de cada pa\u00eds, con el objetivo fundamental de formar estudiantes reflexivos y creativos. Adem\u00e1s, facilita la transformaci\u00f3n del conocimiento en actitudes, mediante la resoluci\u00f3n de los problemas cotidianos de los estudiantes. Nuestra pedagog\u00eda se basa en las premisas de una educaci\u00f3n cristiana y en el compromiso de guiar todas las actividades did\u00e1cticas hacia la calidad en el proceso de ense\u00f1anza-aprendizaje y la integraci\u00f3n natural de la fe y la ense\u00f1anza.</SPAN></DIV><p STYLE=\"margin:0; line-height:4.92vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.92vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.92vh;font-family:Arial, Helvetica, sans-serif;\">Nuestro curr\u00edculo promueve la excelencia acad\u00e9mica e incluye todos los contenidos esenciales para la pr\u00e1ctica de una ciudadan\u00eda responsable. Su objetivo es desarrollar equilibradamente la vida espiritual, intelectual, f\u00edsica, social, emocional y vocacional de los estudiantes.</SPAN></DIV><p STYLE=\"margin:0; line-height:4.92vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.92vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarColor": "#FF361B",
 "data": {
  "name": "HTMLText"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_1830E20E_17B1_6AC3_419B_A422A7600CB2",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 3,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.92vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ff361b;font-family:'Oswald';\"><B>______</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.93vh;font-family:'Oswald';\"><B>Educaci\u00f3n Adventista</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.92vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.92vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ff361b;font-size:2.68vh;font-family:'Oswald Regular';\"><B>Para mayor informaci\u00f3n sobre nuestras instituciones, cursos y aranceles, contactenos por medio de los enlaces abajo.</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.68vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.92vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.92vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f3a22e;\"><A HREF=\"http://cada.educacionadventista.com/\" TARGET=\"_blank\" STYLE=\"text-decoration:none; color:inherit;\"><SPAN STYLE=\"font-size:2.68vh;font-family:'Oswald';\"><B><U>cada.educacionadventista.com</U></B></SPAN></A></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.92vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f3a22e;\"><A HREF=\"mailto:recepcion.colegioadventista@gmail.com\" TARGET=\"_blank\" STYLE=\"text-decoration:none; color:inherit;\"><SPAN STYLE=\"font-size:2.68vh;font-family:'Oswald';\"><B><U>recepcion.colegioadventista@gmail.com</U></B></SPAN></A></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.68vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.92vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.68vh;font-family:'Oswald';\"><B>Tel.: (021) 226 057</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.68vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:4.92vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.68vh;font-family:'Oswald';\"><B>Carandayty 440</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.68vh;font-family:'Oswald';\"><B>Asunci\u00f3n, Paraguay</B></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#FF361B",
 "data": {
  "name": "HTMLText"
 },
 "shadow": false
}],
 "backgroundPreloadEnabled": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "scripts": {
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getKey": function(key){  return window[key]; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "unregisterKey": function(key){  delete window[key]; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "registerKey": function(key, value){  window[key] = value; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "existsKey": function(key){  return key in window; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } }
 },
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Player468"
 },
 "mouseWheelEnabled": true,
 "shadow": false,
 "downloadEnabled": false,
 "defaultVRPointer": "laser"
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
