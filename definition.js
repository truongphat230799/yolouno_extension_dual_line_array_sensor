const ColorBlock = '#cb2026';
const ColorBlock2 = '#44cbc6';
const ImgUrl = 'https://ohstem-public.s3.ap-southeast-1.amazonaws.com/extensions/AITT-VN/yolobit_extension_rover/images/';

// Line Array

Blockly.Blocks['line_sensor_read_all'] = {
  init: function () {
    this.jsonInit(
      {
        "type": "line_sensor_read_all",
        "message0": Blockly.Msg.ROVER_LINE_READ_ALL_MESSAGE0,
        "args0": [
          {
            "type": "field_image",
            "src": ImgUrl + 'line.svg',
            "width": 15,
            "height": 15,
            "alt": "*",
            "flipRtl": false
          },
          {
            "type": "field_dropdown",
            "name": "S1",
            "options": [
              [
                {
                  "src": ImgUrl + 'line_finder_none_detect.png',
                  "width": 15,
                  "height": 15,
                  "alt": "none"
                },
                "0"
              ],
              [
                {
                  "src": ImgUrl + 'line_finder_detect.png',
                  "width": 15,
                  "height": 15,
                  "alt": "detect"
                },
                "1"
              ]
            ]
          },
          {
            "type": "field_dropdown",
            "name": "S2",
            "options": [
              [
                {
                  "src": ImgUrl + 'line_finder_none_detect.png',
                  "width": 15,
                  "height": 15,
                  "alt": "none"
                },
                "0"
              ],
              [
                {
                  "src": ImgUrl + 'line_finder_detect.png',
                  "width": 15,
                  "height": 15,
                  "alt": "detect"
                },
                "1"
              ]
            ]
          },
          {
            "type": "field_dropdown",
            "name": "S3",
            "options": [
              [
                {
                  "src": ImgUrl + 'line_finder_none_detect.png',
                  "width": 15,
                  "height": 15,
                  "alt": "none"
                },
                "0"
              ],
              [
                {
                  "src": ImgUrl + 'line_finder_detect.png',
                  "width": 15,
                  "height": 15,
                  "alt": "detect"
                },
                "1"
              ]
            ]
          },
          {
            "type": "field_dropdown",
            "name": "S4",
            "options": [
              [
                {
                  "src": ImgUrl + 'line_finder_none_detect.png',
                  "width": 15,
                  "height": 15,
                  "alt": "none"
                },
                "0"
              ],
              [
                {
                  "src": ImgUrl + 'line_finder_detect.png',
                  "width": 15,
                  "height": 15,
                  "alt": "detect"
                },
                "1"
              ]
            ]
          }
        ],
        "colour": ColorBlock,
        "output": "Boolean",
        "tooltip": Blockly.Msg.ROVER_LINE_READ_ALL_TOOLTIP,
        "helpUrl": Blockly.Msg.ROVER_LINE_READ_ALL_HELPURL
      }
    );
  }
};

Blockly.Python["line_sensor_read_all"] = function (block) {
  Blockly.Python.definitions_['import_line_sensor1'] = 'from line_sensor import *';
  Blockly.Python.definitions_['create_line_sensor1'] = 'line_sensor1 = LineSensorI2C()';
  var S1 = block.getFieldValue("S1");
  var S2 = block.getFieldValue("S2");
  var S3 = block.getFieldValue("S3");
  var S4 = block.getFieldValue("S4");
  // TODO: Assemble Python into code variable.
  var code = "line_sensor1.read() == (" + S1 + ", " + S2 + ", " + S3 + ", " + S4 + ")";
  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Blocks['line_sensor_read_single'] = {
  init: function () {
    this.jsonInit(
      {
        "type": "line_sensor_read_single",
        "message0": Blockly.Msg.ROVER_LINE_READ_SINGLE_MESSAGE0,
        "args0": [
          {
            "type": "field_image",
            "src": ImgUrl + 'line.svg',
            "width": 15,
            "height": 15,
            "alt": "*",
            "flipRtl": false
          },
          {
            "type": "field_dropdown",
            "name": "pin",
            "options": [
              ["S1", "0"],
              ["S2", "1"],
              ["S3", "2"],
              ["S4", "3"],
            ],
          },
        ],
        "colour": ColorBlock,
        "output": "",
        "tooltip": Blockly.Msg.ROVER_LINE_READ_SINGLE_TOOLTIP,
        "helpUrl": Blockly.Msg.ROVER_LINE_READ_SINGLE_HELPURL
      }
    );
  }
};

Blockly.Python["line_sensor_read_single"] = function (block) {
  Blockly.Python.definitions_['import_line_sensor1'] = 'from line_sensor import *';
  Blockly.Python.definitions_['create_line_sensor1'] = 'line_sensor1 = LineSensorI2C()';
  var pin = block.getFieldValue("pin");
  // TODO: Assemble Python into code variable.
  var code = "line_sensor1.read(" + pin + ")";
  return [code, Blockly.Python.ORDER_NONE];
};

// Line Array 2


// INIT

Blockly.Blocks['line_sensor2_init'] = {
  init: function () {
    this.jsonInit(
      {
        "type": "line_sensor2_read_all",
        "previousStatement": null,
        "nextStatement": null,
        "message0": "khởi tạo cảm biến dò dường 4 mắt cổng %1 và %2",
        "args0": [
          {
            type: "field_dropdown",
            name: "scl_pin2",
            options: digitalPins
          },
          {
            type: "field_dropdown",
            name: "sda_pin2",
            options: digitalPins
          }
        ],
        "colour": ColorBlock2,
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};

Blockly.Python["line_sensor2_init"] = function (block) {
  var scl_pin2 = block.getFieldValue('scl_pin2');
  var sda_pin2 = block.getFieldValue('sda_pin2');
  Blockly.Python.definitions_['import_line_sensor2'] = 'from line_sensor_stm import *';
  Blockly.Python.definitions_['create_line_sensor2'] = 'line_sensor2 = LineSensorI2C2(scl_pin2 = ' + scl_pin2+ '_PIN, sda_pin2 = ' + sda_pin2 + '_PIN)';
  
  // TODO: Assemble Python into code variable.
  var code = "";
  return code ;
};



Blockly.Blocks['line_sensor2_read_all'] = {
  init: function () {
    this.jsonInit(
      {
        "type": "line_sensor2_read_all",
        "message0": Blockly.Msg.ROVER_LINE_READ_ALL_MESSAGE0,
        "args0": [
          {
            "type": "field_image",
            "src": ImgUrl + 'line.svg',
            "width": 15,
            "height": 15,
            "alt": "*",
            "flipRtl": false
          },
          {
            "type": "field_dropdown",
            "name": "S1",
            "options": [
              [
                {
                  "src": ImgUrl + 'line_finder_none_detect.png',
                  "width": 15,
                  "height": 15,
                  "alt": "none"
                },
                "0"
              ],
              [
                {
                  "src": ImgUrl + 'line_finder_detect.png',
                  "width": 15,
                  "height": 15,
                  "alt": "detect"
                },
                "1"
              ]
            ]
          },
          {
            "type": "field_dropdown",
            "name": "S2",
            "options": [
              [
                {
                  "src": ImgUrl + 'line_finder_none_detect.png',
                  "width": 15,
                  "height": 15,
                  "alt": "none"
                },
                "0"
              ],
              [
                {
                  "src": ImgUrl + 'line_finder_detect.png',
                  "width": 15,
                  "height": 15,
                  "alt": "detect"
                },
                "1"
              ]
            ]
          },
          {
            "type": "field_dropdown",
            "name": "S3",
            "options": [
              [
                {
                  "src": ImgUrl + 'line_finder_none_detect.png',
                  "width": 15,
                  "height": 15,
                  "alt": "none"
                },
                "0"
              ],
              [
                {
                  "src": ImgUrl + 'line_finder_detect.png',
                  "width": 15,
                  "height": 15,
                  "alt": "detect"
                },
                "1"
              ]
            ]
          },
          {
            "type": "field_dropdown",
            "name": "S4",
            "options": [
              [
                {
                  "src": ImgUrl + 'line_finder_none_detect.png',
                  "width": 15,
                  "height": 15,
                  "alt": "none"
                },
                "0"
              ],
              [
                {
                  "src": ImgUrl + 'line_finder_detect.png',
                  "width": 15,
                  "height": 15,
                  "alt": "detect"
                },
                "1"
              ]
            ]
          }
        ],
        "colour": ColorBlock2,
        "output": "Boolean",
        "tooltip": Blockly.Msg.ROVER_LINE_READ_ALL_TOOLTIP,
        "helpUrl": Blockly.Msg.ROVER_LINE_READ_ALL_HELPURL
      }
    );
  }
};

Blockly.Python["line_sensor2_read_all"] = function (block) {
  var S1 = block.getFieldValue("S1");
  var S2 = block.getFieldValue("S2");
  var S3 = block.getFieldValue("S3");
  var S4 = block.getFieldValue("S4");
  // TODO: Assemble Python into code variable.
  var code = "line_sensor2.read_ss2() == (" + S1 + ", " + S2 + ", " + S3 + ", " + S4 + ")";
  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Blocks['line_sensor2_read_single'] = {
  init: function () {
    this.jsonInit(
      {
        "type": "line_sensor2_read_single",
        "message0": Blockly.Msg.ROVER_LINE_READ_SINGLE_MESSAGE0,
        "args0": [
          {
            "type": "field_image",
            "src": ImgUrl + 'line.svg',
            "width": 15,
            "height": 15,
            "alt": "*",
            "flipRtl": false
          },
          {
            "type": "field_dropdown",
            "name": "pin",
            "options": [
              ["S1", "0"],
              ["S2", "1"],
              ["S3", "2"],
              ["S4", "3"],
            ],
          },
        ],
        "colour": ColorBlock2,
        "output": "",
        "tooltip": Blockly.Msg.ROVER_LINE_READ_SINGLE_TOOLTIP,
        "helpUrl": Blockly.Msg.ROVER_LINE_READ_SINGLE_HELPURL
      }
    );
  }
};

Blockly.Python["line_sensor2_read_single"] = function (block) {
  var pin = block.getFieldValue("pin");
  // TODO: Assemble Python into code variable.
  var code = "line_sensor2.read_ss2(" + pin + ")";
  return [code, Blockly.Python.ORDER_NONE];
};