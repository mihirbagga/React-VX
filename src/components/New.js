
import React from 'react'
import { Group } from '@vx/group'
import { Tree } from '@vx/hierarchy'
import { hierarchy } from 'd3-hierarchy'
import { pointRadial } from 'd3-shape'
import './style.css'
import { LegendOrdinal } from '@vx/legend';
import {
    LinkHorizontal,
    LinkVertical,
    LinkRadial,
    LinkHorizontalStep,
    LinkVerticalStep,
    LinkRadialStep,
    LinkHorizontalCurve,
    LinkVerticalCurve,
    LinkRadialCurve,
    LinkHorizontalLine,
    LinkVerticalLine,
    LinkRadialLine
} from '@vx/shape'
import { scaleOrdinal } from 'd3-scale'

const thre = scaleOrdinal({
    domain: ["Material", 'Process Order', 'Material2'],
    range: ['#9e9ac8', '#756bb1', '#54278f'],
});

const data =
{
    //"id": "494",
    "id": "8131",
    "batchNo": "3133",
    "nodeId": "8131|3133",
    //"level": 0,
    "type": "Material",
    "matDesc": "ELIXIR190,ProA",
    "children": [
        {
            //"id": "513",
            //"level": 1,
            "id": "P25",
            "type": "Process Order",
            "children": [
                {
                    //"id": "489",
                    "id": "1321",
                    "batchNo": "1540",
                    "nodeId": "1321|1540",
                    //"level": 2,
                    "type": "Material",
                    "matDesc": "SOLN,10mM SodPhos,500mM SodChlor(pH7.2)"
                },
                {
                    //"id": "492",
                    "id": "1241",
                    "batchNo": "2131",
                    "nodeId": "1241|2131",
                    //"level": 2,
                    "type": "Material",
                    "matDesc": "Transfer System 1000mm"
                },
                {
                    //"id": "493",
                    "id": "1914",
                    "batchNo": "2471",
                    "nodeId": "1914|2471",
                    //"level": 2,
                    "type": "Material",
                    "matDesc": "Tubing Assem, Silicone, 1\"IDx1 3/8\"OD, Braid R..."
                },
                {
                    //"id": "488",
                    "id": "1090",
                    "batchNo": "4059",
                    "nodeId": "1090|4059",
                    //"level": 2,
                    "type": "Material",
                    "matDesc": "Tubing Assem, Silicone, Pt-Cured, 1\"ID"
                },
                {
                    //"id": "491",
                    "id": "1086",
                    "batchNo": "8807",
                    "nodeId": "1086|8807",
                    //"level": 2,
                    "type": "Material",
                    "matDesc": "SOLN,.5M Acetic Acid"
                },
                {
                    //"id": "484",
                    "id": "8139",
                    "batchNo": "4966",
                    "nodeId": "8139|4966",
                    //"level": 2,
                    "type": "Material",
                    "matDesc": "ELIXIR190,Harvest",
                    "children": [
                        {
                            //"id": "512",
                            //"level": 3,
                            "id": "P24",
                            "type": "Process Order",
                            "children": [
                                {
                                    //"id": "457",
                                    "id": "1965",
                                    "batchNo": "6328",
                                    "nodeId": "1965|6328",
                                    //"level": 8,
                                    "type": "Material",
                                    "matDesc": "Filter 30\""
                                },
                                {
                                    //"id": "487",
                                    "id": "1151",
                                    "batchNo": "4102",
                                    "nodeId": "1151|4102",
                                    //"level": 4,
                                    "type": "Material",
                                    "matDesc": "Manifold, Zeta Plus Capsule Holder, Top\u0026Bottom..."
                                },
                                {
                                    //"id": "474",
                                    "id": "8352",
                                    "batchNo": "9969",
                                    "nodeId": "8352|9969",
                                    //"level": 4,
                                    "type": "Material",
                                    "matDesc": "ELIXIR190,10000L",
                                    "children": [
                                        {
                                            //"id": "511",
                                            //"level": 5,
                                            "id": "P23",
                                            "type": "Process Order",
                                            "children": [
                                                {
                                                    //"id": "448",
                                                    "id": "8934",
                                                    "batchNo": "2020",
                                                    "nodeId": "8934|2020",
                                                    //"level": 6,
                                                    "type": "Material",
                                                    "matDesc": "ELIXIR190,3000L",
                                                    "children": [
                                                        {
                                                            //"id": "502",
                                                            //"level": 7,
                                                            "id": "P14",
                                                            "type": "Process Order",
                                                            "children": [
                                                                {
                                                                    //"id": "445",
                                                                    "id": "1593",
                                                                    "batchNo": "8253",
                                                                    "nodeId": "1593|8253",
                                                                    //"level": 8,
                                                                    "type": "Material",
                                                                    "matDesc": "Medium, CDM1B w/C13, 2.5g/L SodBicarb",
                                                                    "children": [
                                                                        {
                                                                            //"id": "500",
                                                                            //"level": 9,
                                                                            "id": "P12",
                                                                            "type": "Process Order",
                                                                            "children": [
                                                                                {
                                                                                    //"id": "430",
                                                                                    "id": "1160",
                                                                                    "batchNo": "2553",
                                                                                    "nodeId": "1160|2553",
                                                                                    //"level": 8,
                                                                                    "type": "Material",
                                                                                    "matDesc": "Sodium Bicarbondate Powder USP"
                                                                                },
                                                                                {
                                                                                    //"id": "435",
                                                                                    "id": "1711",
                                                                                    "batchNo": "2618",
                                                                                    "nodeId": "1711|2618",
                                                                                    //"level": 8,
                                                                                    "type": "Material",
                                                                                    "matDesc": "Filter 0.2u"
                                                                                },
                                                                                {
                                                                                    //"id": "429",
                                                                                    "id": "1080",
                                                                                    "batchNo": "3289",
                                                                                    "nodeId": "1080|3289",
                                                                                    //"level": 12,
                                                                                    "type": "Material",
                                                                                    "matDesc": "Media, Soy Powder"
                                                                                },
                                                                                {
                                                                                    //"id": "433",
                                                                                    "id": "1393",
                                                                                    "batchNo": "3407",
                                                                                    "nodeId": "1393|3407",
                                                                                    //"level": 8,
                                                                                    "type": "Material",
                                                                                    "matDesc": "L-Glutamine"
                                                                                },
                                                                                {
                                                                                    //"id": "444",
                                                                                    "id": "1965",
                                                                                    "batchNo": "8815",
                                                                                    "nodeId": "1965|8815",
                                                                                    //"level": 10,
                                                                                    "type": "Material",
                                                                                    "matDesc": "Filter 30\""
                                                                                },
                                                                                {
                                                                                    //"id": "434",
                                                                                    "id": "1328",
                                                                                    "batchNo": "6081",
                                                                                    "nodeId": "1328|6081",
                                                                                    //"level": 8,
                                                                                    "type": "Material",
                                                                                    "matDesc": "Insulin, Human"
                                                                                },
                                                                                {
                                                                                    //"id": "431",
                                                                                    "id": "1975",
                                                                                    "batchNo": "5104",
                                                                                    "nodeId": "1975|5104",
                                                                                    //"level": 8,
                                                                                    "type": "Material",
                                                                                    "matDesc": "Chelate Formulation C13"
                                                                                },
                                                                                {
                                                                                    //"id": "432",
                                                                                    "id": "1351",
                                                                                    "batchNo": "9725",
                                                                                    "nodeId": "1351|9725",
                                                                                    //"level": 8,
                                                                                    "type": "Material",
                                                                                    "matDesc": "Dextrose Granular,USP"
                                                                                }
                                                                            ],
                                                                            "relationshipMap": {
                                                                                "500-433": {
                                                                                    //"id": "36",
                                                                                    "type": "Input",
                                                                                    "uom": "",
                                                                                    "qty": "452.7",
                                                                                    "startNodeId": "433",
                                                                                    "endNodeId": "500"
                                                                                },
                                                                                "500-444": {
                                                                                    //"id": "102",
                                                                                    "type": "Input",
                                                                                    "uom": "",
                                                                                    "qty": "3.0",
                                                                                    "startNodeId": "444",
                                                                                    "endNodeId": "500"
                                                                                },
                                                                                "500-434": {
                                                                                    //"id": "70",
                                                                                    "type": "Input",
                                                                                    "uom": "",
                                                                                    "qty": "7.7508",
                                                                                    "startNodeId": "434",
                                                                                    "endNodeId": "500"
                                                                                },
                                                                                "500-435": {
                                                                                    //"id": "23",
                                                                                    "type": "Input",
                                                                                    "uom": "",
                                                                                    "qty": "1.0",
                                                                                    "startNodeId": "435",
                                                                                    "endNodeId": "500"
                                                                                },
                                                                                "500-430": {
                                                                                    //"id": "20",
                                                                                    "type": "Input",
                                                                                    "uom": "",
                                                                                    "qty": "3875.1",
                                                                                    "startNodeId": "430",
                                                                                    "endNodeId": "500"
                                                                                },
                                                                                "500-431": {
                                                                                    //"id": "54",
                                                                                    "type": "Input",
                                                                                    "uom": "",
                                                                                    "qty": "1552.7",
                                                                                    "startNodeId": "431",
                                                                                    "endNodeId": "500"
                                                                                },
                                                                                "500-432": {
                                                                                    //"id": "110",
                                                                                    "type": "Input",
                                                                                    "uom": "",
                                                                                    "qty": "3100.4",
                                                                                    "startNodeId": "432",
                                                                                    "endNodeId": "500"
                                                                                },
                                                                                "500-429": {
                                                                                    //"id": "31",
                                                                                    "type": "Input",
                                                                                    "uom": "",
                                                                                    "qty": "40362.0",
                                                                                    "startNodeId": "429",
                                                                                    "endNodeId": "500"
                                                                                }
                                                                            }
                                                                        }
                                                                    ],
                                                                    "relationshipMap": {
                                                                        "445-500": {
                                                                            //"id": "132",
                                                                            "type": "Output",
                                                                            "uom": "",
                                                                            "qty": "1502.0",
                                                                            "startNodeId": "500",
                                                                            "endNodeId": "445"
                                                                        }
                                                                    }
                                                                },
                                                                {
                                                                    //"id": "441",
                                                                    "id": "8989",
                                                                    "batchNo": "8113",
                                                                    "nodeId": "8989|8113",
                                                                    //"level": 8,
                                                                    "type": "Material",
                                                                    "matDesc": "ELIXIR190,500L",
                                                                    "children": [
                                                                        {
                                                                            //"id": "499",
                                                                            //"level": 9,
                                                                            "id": "P11",
                                                                            "type": "Process Order",
                                                                            "children": [
                                                                                {
                                                                                    //"id": "416",
                                                                                    "id": "1487",
                                                                                    "batchNo": "7890",
                                                                                    "nodeId": "1487|7890",
                                                                                    //"level": 14,
                                                                                    "type": "Material",
                                                                                    "matDesc": "Sample Bag 60mL "
                                                                                },
                                                                                {
                                                                                    //"id": "443",
                                                                                    "id": "1660",
                                                                                    "batchNo": "4350",
                                                                                    "nodeId": "1660|4350",
                                                                                    //"level": 10,
                                                                                    "type": "Material",
                                                                                    "matDesc": "Storage Bag 10L"
                                                                                },
                                                                                {
                                                                                    //"id": "418",
                                                                                    "id": "1593",
                                                                                    "batchNo": "5242",
                                                                                    "nodeId": "1593|5242",
                                                                                    //"level": 14,
                                                                                    "type": "Material",
                                                                                    "matDesc": "Medium, CDM1B w/C13, 2.5g/L SodBicarb",
                                                                                    "children": [
                                                                                        {
                                                                                            //"id": "497",
                                                                                            //"level": 11,
                                                                                            "id": "P9",
                                                                                            "type": "Process Order",
                                                                                            "children": [
                                                                                                {
                                                                                                    //"id": "436",
                                                                                                    "id": "1587",
                                                                                                    "batchNo": "2208",
                                                                                                    "nodeId": "1587|2208",
                                                                                                    //"level": 8,
                                                                                                    "type": "Material",
                                                                                                    "matDesc": "Filter 0.1u"
                                                                                                },
                                                                                                {
                                                                                                    //"id": "430",
                                                                                                    "id": "1160",
                                                                                                    "batchNo": "2553",
                                                                                                    "nodeId": "1160|2553",
                                                                                                    //"level": 8,
                                                                                                    "type": "Material",
                                                                                                    "matDesc": "Sodium Bicarbondate Powder USP"
                                                                                                },
                                                                                                {
                                                                                                    //"id": "435",
                                                                                                    "id": "1711",
                                                                                                    "batchNo": "2618",
                                                                                                    "nodeId": "1711|2618",
                                                                                                    //"level": 8,
                                                                                                    "type": "Material",
                                                                                                    "matDesc": "Filter 0.2u"
                                                                                                },
                                                                                                {
                                                                                                    //"id": "433",
                                                                                                    "id": "1393",
                                                                                                    "batchNo": "3407",
                                                                                                    "nodeId": "1393|3407",
                                                                                                    //"level": 8,
                                                                                                    "type": "Material",
                                                                                                    "matDesc": "L-Glutamine"
                                                                                                },
                                                                                                {
                                                                                                    //"id": "431",
                                                                                                    "id": "1975",
                                                                                                    "batchNo": "5104",
                                                                                                    "nodeId": "1975|5104",
                                                                                                    //"level": 8,
                                                                                                    "type": "Material",
                                                                                                    "matDesc": "Chelate Formulation C13"
                                                                                                },
                                                                                                {
                                                                                                    //"id": "432",
                                                                                                    "id": "1351",
                                                                                                    "batchNo": "9725",
                                                                                                    "nodeId": "1351|9725",
                                                                                                    //"level": 8,
                                                                                                    "type": "Material",
                                                                                                    "matDesc": "Dextrose Granular,USP"
                                                                                                },
                                                                                                {
                                                                                                    //"id": "429",
                                                                                                    "id": "1080",
                                                                                                    "batchNo": "3289",
                                                                                                    "nodeId": "1080|3289",
                                                                                                    //"level": 12,
                                                                                                    "type": "Material",
                                                                                                    "matDesc": "Media, Soy Powder"
                                                                                                },
                                                                                                {
                                                                                                    //"id": "434",
                                                                                                    "id": "1328",
                                                                                                    "batchNo": "6081",
                                                                                                    "nodeId": "1328|6081",
                                                                                                    //"level": 8,
                                                                                                    "type": "Material",
                                                                                                    "matDesc": "Insulin, Human"
                                                                                                },
                                                                                                {
                                                                                                    //"id": "437",
                                                                                                    "id": "1148",
                                                                                                    "batchNo": "6409",
                                                                                                    "nodeId": "1148|6409",
                                                                                                    //"level": 12,
                                                                                                    "type": "Material",
                                                                                                    "matDesc": "Filter Maxi-Cap 0.2u"
                                                                                                }
                                                                                            ],
                                                                                            "relationshipMap": {
                                                                                                "497-430": {
                                                                                                    //"id": "22",
                                                                                                    "type": "Input",
                                                                                                    "uom": "",
                                                                                                    "qty": "1562.5",
                                                                                                    "startNodeId": "430",
                                                                                                    "endNodeId": "497"
                                                                                                },
                                                                                                "497-431": {
                                                                                                    //"id": "56",
                                                                                                    "type": "Input",
                                                                                                    "uom": "",
                                                                                                    "qty": "625.2",
                                                                                                    "startNodeId": "431",
                                                                                                    "endNodeId": "497"
                                                                                                },
                                                                                                "497-429": {
                                                                                                    //"id": "32",
                                                                                                    "type": "Input",
                                                                                                    "uom": "",
                                                                                                    "qty": "16275.0",
                                                                                                    "startNodeId": "429",
                                                                                                    "endNodeId": "497"
                                                                                                },
                                                                                                "497-436": {
                                                                                                    //"id": "11",
                                                                                                    "type": "Input",
                                                                                                    "uom": "",
                                                                                                    "qty": "4.0",
                                                                                                    "startNodeId": "436",
                                                                                                    "endNodeId": "497"
                                                                                                },
                                                                                                "497-437": {
                                                                                                    //"id": "80",
                                                                                                    "type": "Input",
                                                                                                    "uom": "",
                                                                                                    "qty": "1.0",
                                                                                                    "startNodeId": "437",
                                                                                                    "endNodeId": "497"
                                                                                                },
                                                                                                "497-432": {
                                                                                                    //"id": "112",
                                                                                                    "type": "Input",
                                                                                                    "uom": "",
                                                                                                    "qty": "1250.0",
                                                                                                    "startNodeId": "432",
                                                                                                    "endNodeId": "497"
                                                                                                },
                                                                                                "497-433": {
                                                                                                    //"id": "38",
                                                                                                    "type": "Input",
                                                                                                    "uom": "",
                                                                                                    "qty": "182.503",
                                                                                                    "startNodeId": "433",
                                                                                                    "endNodeId": "497"
                                                                                                },
                                                                                                "497-434": {
                                                                                                    //"id": "72",
                                                                                                    "type": "Input",
                                                                                                    "uom": "",
                                                                                                    "qty": "3.1265",
                                                                                                    "startNodeId": "434",
                                                                                                    "endNodeId": "497"
                                                                                                },
                                                                                                "497-435": {
                                                                                                    //"id": "25",
                                                                                                    "type": "Input",
                                                                                                    "uom": "",
                                                                                                    "qty": "1.0",
                                                                                                    "startNodeId": "435",
                                                                                                    "endNodeId": "497"
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    ],
                                                                                    "relationshipMap": {
                                                                                        "418-497": {
                                                                                            //"id": "126",
                                                                                            "type": "Output",
                                                                                            "uom": "",
                                                                                            "qty": "626.8",
                                                                                            "startNodeId": "497",
                                                                                            "endNodeId": "418"
                                                                                        }
                                                                                    }
                                                                                },
                                                                                {
                                                                                    //"id": "423",
                                                                                    "id": "1157",
                                                                                    "batchNo": "8808",
                                                                                    "nodeId": "1157|8808",
                                                                                    //"level": 12,
                                                                                    "type": "Material",
                                                                                    "matDesc": "SOLN,1M SodCarbonate",
                                                                                    "children": [
                                                                                        {
                                                                                            //"id": "496",
                                                                                            //"level": 11,
                                                                                            "id": "P8",
                                                                                            "type": "Process Order",
                                                                                            "children": [
                                                                                                {
                                                                                                    //"id": "427",
                                                                                                    "id": "1387",
                                                                                                    "batchNo": "3281",
                                                                                                    "nodeId": "1387|3281",
                                                                                                    //"level": 8,
                                                                                                    "type": "Material",
                                                                                                    "matDesc": "Cell Culture Port Plug"
                                                                                                },
                                                                                                {
                                                                                                    //"id": "424",
                                                                                                    "id": "1815",
                                                                                                    "batchNo": "6866",
                                                                                                    "nodeId": "1815|6866",
                                                                                                    //"level": 8,
                                                                                                    "type": "Material",
                                                                                                    "matDesc": "Bag 100L"
                                                                                                },
                                                                                                {
                                                                                                    //"id": "425",
                                                                                                    "id": "1659",
                                                                                                    "batchNo": "4578",
                                                                                                    "nodeId": "1659|4578",
                                                                                                    //"level": 8,
                                                                                                    "type": "Material",
                                                                                                    "matDesc": "Bag 500L"
                                                                                                },
                                                                                                {
                                                                                                    //"id": "426",
                                                                                                    "id": "1659",
                                                                                                    "batchNo": "9268",
                                                                                                    "nodeId": "1659|9268",
                                                                                                    //"level": 12,
                                                                                                    "type": "Material",
                                                                                                    "matDesc": "Bag 500L"
                                                                                                },
                                                                                                {
                                                                                                    //"id": "428",
                                                                                                    "id": "1784",
                                                                                                    "batchNo": "5617",
                                                                                                    "nodeId": "1784|5617",
                                                                                                    //"level": 8,
                                                                                                    "type": "Material",
                                                                                                    "matDesc": "SodCarbonate, Anhydrous, NF, PhEur"
                                                                                                },
                                                                                                {
                                                                                                    //"id": "422",
                                                                                                    "id": "1241",
                                                                                                    "batchNo": "5969",
                                                                                                    "nodeId": "1241|5969",
                                                                                                    //"level": 12,
                                                                                                    "type": "Material",
                                                                                                    "matDesc": "Transfer System 1000mm"
                                                                                                }
                                                                                            ],
                                                                                            "relationshipMap": {
                                                                                                "496-428": {
                                                                                                    //"id": "64",
                                                                                                    "type": "Input",
                                                                                                    "uom": "",
                                                                                                    "qty": "116600.0",
                                                                                                    "startNodeId": "428",
                                                                                                    "endNodeId": "496"
                                                                                                },
                                                                                                "496-426": {
                                                                                                    //"id": "106",
                                                                                                    "type": "Input",
                                                                                                    "uom": "",
                                                                                                    "qty": "1.0",
                                                                                                    "startNodeId": "426",
                                                                                                    "endNodeId": "496"
                                                                                                },
                                                                                                "496-427": {
                                                                                                    //"id": "30",
                                                                                                    "type": "Input",
                                                                                                    "uom": "",
                                                                                                    "qty": "4.0",
                                                                                                    "startNodeId": "427",
                                                                                                    "endNodeId": "496"
                                                                                                },
                                                                                                "496-424": {
                                                                                                    //"id": "87",
                                                                                                    "type": "Input",
                                                                                                    "uom": "",
                                                                                                    "qty": "3.0",
                                                                                                    "startNodeId": "424",
                                                                                                    "endNodeId": "496"
                                                                                                },
                                                                                                "496-425": {
                                                                                                    //"id": "47",
                                                                                                    "type": "Input",
                                                                                                    "uom": "",
                                                                                                    "qty": "1.0",
                                                                                                    "startNodeId": "425",
                                                                                                    "endNodeId": "496"
                                                                                                },
                                                                                                "496-422": {
                                                                                                    //"id": "69",
                                                                                                    "type": "Input",
                                                                                                    "uom": "",
                                                                                                    "qty": "1.0",
                                                                                                    "startNodeId": "422",
                                                                                                    "endNodeId": "496"
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    ],
                                                                                    "relationshipMap": {
                                                                                        "423-496": {
                                                                                            //"id": "134",
                                                                                            "type": "Output",
                                                                                            "uom": "",
                                                                                            "qty": "1101.0",
                                                                                            "startNodeId": "496",
                                                                                            "endNodeId": "423"
                                                                                        }
                                                                                    }
                                                                                },
                                                                                {
                                                                                    //"id": "442",
                                                                                    "id": "1471",
                                                                                    "batchNo": "6180",
                                                                                    "nodeId": "1471|6180",
                                                                                    //"level": 10,
                                                                                    "type": "Material",
                                                                                    "matDesc": "Filter Hydrophilic Cartridge 20\""
                                                                                },
                                                                                {
                                                                                    //"id": "440",
                                                                                    "id": "8583",
                                                                                    "batchNo": "6796",
                                                                                    "nodeId": "8583|6796",
                                                                                    //"level": 10,
                                                                                    "type": "Material",
                                                                                    "matDesc": "ELIXIR190,50L",
                                                                                    "children": [
                                                                                        {
                                                                                            //"id": "498",
                                                                                            //"level": 11,
                                                                                            "id": "P10",
                                                                                            "type": "Process Order",
                                                                                            "children": [
                                                                                                {
                                                                                                    //"id": "439",
                                                                                                    "id": "1241",
                                                                                                    "batchNo": "2649",
                                                                                                    "nodeId": "1241|2649",
                                                                                                    //"level": 12,
                                                                                                    "type": "Material",
                                                                                                    "matDesc": "Transfer System 1000mm"
                                                                                                },
                                                                                                {
                                                                                                    //"id": "418",
                                                                                                    "id": "1593",
                                                                                                    "batchNo": "5242",
                                                                                                    "nodeId": "1593|5242",
                                                                                                    //"level": 14,
                                                                                                    "type": "Material",
                                                                                                    "matDesc": "Medium, CDM1B w/C13, 2.5g/L SodBicarb",
                                                                                                    "children": [
                                                                                                        {
                                                                                                            //"id": "497",
                                                                                                            //"level": 11,
                                                                                                            "id": "P9",
                                                                                                            "type": "Process Order",
                                                                                                            "children": [
                                                                                                                {
                                                                                                                    //"id": "436",
                                                                                                                    "id": "1587",
                                                                                                                    "batchNo": "2208",
                                                                                                                    "nodeId": "1587|2208",
                                                                                                                    //"level": 8,
                                                                                                                    "type": "Material",
                                                                                                                    "matDesc": "Filter 0.1u"
                                                                                                                },
                                                                                                                {
                                                                                                                    //"id": "430",
                                                                                                                    "id": "1160",
                                                                                                                    "batchNo": "2553",
                                                                                                                    "nodeId": "1160|2553",
                                                                                                                    //"level": 8,
                                                                                                                    "type": "Material",
                                                                                                                    "matDesc": "Sodium Bicarbondate Powder USP"
                                                                                                                },
                                                                                                                {
                                                                                                                    //"id": "435",
                                                                                                                    "id": "1711",
                                                                                                                    "batchNo": "2618",
                                                                                                                    "nodeId": "1711|2618",
                                                                                                                    //"level": 8,
                                                                                                                    "type": "Material",
                                                                                                                    "matDesc": "Filter 0.2u"
                                                                                                                },
                                                                                                                {
                                                                                                                    //"id": "433",
                                                                                                                    "id": "1393",
                                                                                                                    "batchNo": "3407",
                                                                                                                    "nodeId": "1393|3407",
                                                                                                                    //"level": 8,
                                                                                                                    "type": "Material",
                                                                                                                    "matDesc": "L-Glutamine"
                                                                                                                },
                                                                                                                {
                                                                                                                    //"id": "431",
                                                                                                                    "id": "1975",
                                                                                                                    "batchNo": "5104",
                                                                                                                    "nodeId": "1975|5104",
                                                                                                                    //"level": 8,
                                                                                                                    "type": "Material",
                                                                                                                    "matDesc": "Chelate Formulation C13"
                                                                                                                },
                                                                                                                {
                                                                                                                    //"id": "432",
                                                                                                                    "id": "1351",
                                                                                                                    "batchNo": "9725",
                                                                                                                    "nodeId": "1351|9725",
                                                                                                                    //"level": 8,
                                                                                                                    "type": "Material",
                                                                                                                    "matDesc": "Dextrose Granular,USP"
                                                                                                                },
                                                                                                                {
                                                                                                                    //"id": "429",
                                                                                                                    "id": "1080",
                                                                                                                    "batchNo": "3289",
                                                                                                                    "nodeId": "1080|3289",
                                                                                                                    //"level": 12,
                                                                                                                    "type": "Material",
                                                                                                                    "matDesc": "Media, Soy Powder"
                                                                                                                },
                                                                                                                {
                                                                                                                    //"id": "434",
                                                                                                                    "id": "1328",
                                                                                                                    "batchNo": "6081",
                                                                                                                    "nodeId": "1328|6081",
                                                                                                                    //"level": 8,
                                                                                                                    "type": "Material",
                                                                                                                    "matDesc": "Insulin, Human"
                                                                                                                },
                                                                                                                {
                                                                                                                    //"id": "437",
                                                                                                                    "id": "1148",
                                                                                                                    "batchNo": "6409",
                                                                                                                    "nodeId": "1148|6409",
                                                                                                                    //"level": 12,
                                                                                                                    "type": "Material",
                                                                                                                    "matDesc": "Filter Maxi-Cap 0.2u"
                                                                                                                }
                                                                                                            ],
                                                                                                            "relationshipMap": {
                                                                                                                "497-430": {
                                                                                                                    //"id": "22",
                                                                                                                    "type": "Input",
                                                                                                                    "uom": "",
                                                                                                                    "qty": "1562.5",
                                                                                                                    "startNodeId": "430",
                                                                                                                    "endNodeId": "497"
                                                                                                                },
                                                                                                                "497-431": {
                                                                                                                    //"id": "56",
                                                                                                                    "type": "Input",
                                                                                                                    "uom": "",
                                                                                                                    "qty": "625.2",
                                                                                                                    "startNodeId": "431",
                                                                                                                    "endNodeId": "497"
                                                                                                                },
                                                                                                                "497-429": {
                                                                                                                    //"id": "32",
                                                                                                                    "type": "Input",
                                                                                                                    "uom": "",
                                                                                                                    "qty": "16275.0",
                                                                                                                    "startNodeId": "429",
                                                                                                                    "endNodeId": "497"
                                                                                                                },
                                                                                                                "497-436": {
                                                                                                                    //"id": "11",
                                                                                                                    "type": "Input",
                                                                                                                    "uom": "",
                                                                                                                    "qty": "4.0",
                                                                                                                    "startNodeId": "436",
                                                                                                                    "endNodeId": "497"
                                                                                                                },
                                                                                                                "497-437": {
                                                                                                                    //"id": "80",
                                                                                                                    "type": "Input",
                                                                                                                    "uom": "",
                                                                                                                    "qty": "1.0",
                                                                                                                    "startNodeId": "437",
                                                                                                                    "endNodeId": "497"
                                                                                                                },
                                                                                                                "497-432": {
                                                                                                                    //"id": "112",
                                                                                                                    "type": "Input",
                                                                                                                    "uom": "",
                                                                                                                    "qty": "1250.0",
                                                                                                                    "startNodeId": "432",
                                                                                                                    "endNodeId": "497"
                                                                                                                },
                                                                                                                "497-433": {
                                                                                                                    //"id": "38",
                                                                                                                    "type": "Input",
                                                                                                                    "uom": "",
                                                                                                                    "qty": "182.503",
                                                                                                                    "startNodeId": "433",
                                                                                                                    "endNodeId": "497"
                                                                                                                },
                                                                                                                "497-434": {
                                                                                                                    //"id": "72",
                                                                                                                    "type": "Input",
                                                                                                                    "uom": "",
                                                                                                                    "qty": "3.1265",
                                                                                                                    "startNodeId": "434",
                                                                                                                    "endNodeId": "497"
                                                                                                                },
                                                                                                                "497-435": {
                                                                                                                    //"id": "25",
                                                                                                                    "type": "Input",
                                                                                                                    "uom": "",
                                                                                                                    "qty": "1.0",
                                                                                                                    "startNodeId": "435",
                                                                                                                    "endNodeId": "497"
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    ],
                                                                                                    "relationshipMap": {
                                                                                                        "418-497": {
                                                                                                            //"id": "126",
                                                                                                            "type": "Output",
                                                                                                            "uom": "",
                                                                                                            "qty": "626.8",
                                                                                                            "startNodeId": "497",
                                                                                                            "endNodeId": "418"
                                                                                                        }
                                                                                                    }
                                                                                                },
                                                                                                {
                                                                                                    //"id": "420",
                                                                                                    "id": "8219",
                                                                                                    "batchNo": "8961",
                                                                                                    "nodeId": "8219|8961",
                                                                                                    //"level": 12,
                                                                                                    "type": "Material",
                                                                                                    "matDesc": "ELIXIR190,20L",
                                                                                                    "children": [
                                                                                                        {
                                                                                                            //"id": "495",
                                                                                                            //"level": 13,
                                                                                                            "id": "P7",
                                                                                                            "type": "Process Order",
                                                                                                            "children": [
                                                                                                                {
                                                                                                                    //"id": "417",
                                                                                                                    "id": "1647",
                                                                                                                    "batchNo": "1663",
                                                                                                                    "nodeId": "1647|1663",
                                                                                                                    //"level": 14,
                                                                                                                    "type": "Material",
                                                                                                                    "matDesc": "Sample Bag, 250mL"
                                                                                                                },
                                                                                                                {
                                                                                                                    //"id": "421",
                                                                                                                    "id": "8489",
                                                                                                                    "batchNo": "7634",
                                                                                                                    "nodeId": "8489|7634",
                                                                                                                    //"level": 14,
                                                                                                                    "type": "Material",
                                                                                                                    "matDesc": "ELIXIR190,CellBank"
                                                                                                                },
                                                                                                                {
                                                                                                                    //"id": "418",
                                                                                                                    "id": "1593",
                                                                                                                    "batchNo": "5242",
                                                                                                                    "nodeId": "1593|5242",
                                                                                                                    //"level": 14,
                                                                                                                    "type": "Material",
                                                                                                                    "matDesc": "Medium, CDM1B w/C13, 2.5g/L SodBicarb",
                                                                                                                    "children": [
                                                                                                                        {
                                                                                                                            //"id": "497",
                                                                                                                            //"level": 11,
                                                                                                                            "id": "P9",
                                                                                                                            "type": "Process Order",
                                                                                                                            "children": [
                                                                                                                                {
                                                                                                                                    //"id": "436",
                                                                                                                                    "id": "1587",
                                                                                                                                    "batchNo": "2208",
                                                                                                                                    "nodeId": "1587|2208",
                                                                                                                                    //"level": 8,
                                                                                                                                    "type": "Material",
                                                                                                                                    "matDesc": "Filter 0.1u"
                                                                                                                                },
                                                                                                                                {
                                                                                                                                    //"id": "430",
                                                                                                                                    "id": "1160",
                                                                                                                                    "batchNo": "2553",
                                                                                                                                    "nodeId": "1160|2553",
                                                                                                                                    //"level": 8,
                                                                                                                                    "type": "Material",
                                                                                                                                    "matDesc": "Sodium Bicarbondate Powder USP"
                                                                                                                                },
                                                                                                                                {
                                                                                                                                    //"id": "435",
                                                                                                                                    "id": "1711",
                                                                                                                                    "batchNo": "2618",
                                                                                                                                    "nodeId": "1711|2618",
                                                                                                                                    //"level": 8,
                                                                                                                                    "type": "Material",
                                                                                                                                    "matDesc": "Filter 0.2u"
                                                                                                                                },
                                                                                                                                {
                                                                                                                                    //"id": "433",
                                                                                                                                    "id": "1393",
                                                                                                                                    "batchNo": "3407",
                                                                                                                                    "nodeId": "1393|3407",
                                                                                                                                    //"level": 8,
                                                                                                                                    "type": "Material",
                                                                                                                                    "matDesc": "L-Glutamine"
                                                                                                                                },
                                                                                                                                {
                                                                                                                                    //"id": "431",
                                                                                                                                    "id": "1975",
                                                                                                                                    "batchNo": "5104",
                                                                                                                                    "nodeId": "1975|5104",
                                                                                                                                    //"level": 8,
                                                                                                                                    "type": "Material",
                                                                                                                                    "matDesc": "Chelate Formulation C13"
                                                                                                                                },
                                                                                                                                {
                                                                                                                                    //"id": "432",
                                                                                                                                    "id": "1351",
                                                                                                                                    "batchNo": "9725",
                                                                                                                                    "nodeId": "1351|9725",
                                                                                                                                    //"level": 8,
                                                                                                                                    "type": "Material",
                                                                                                                                    "matDesc": "Dextrose Granular,USP"
                                                                                                                                },
                                                                                                                                {
                                                                                                                                    //"id": "429",
                                                                                                                                    "id": "1080",
                                                                                                                                    "batchNo": "3289",
                                                                                                                                    "nodeId": "1080|3289",
                                                                                                                                    //"level": 12,
                                                                                                                                    "type": "Material",
                                                                                                                                    "matDesc": "Media, Soy Powder"
                                                                                                                                },
                                                                                                                                {
                                                                                                                                    //"id": "434",
                                                                                                                                    "id": "1328",
                                                                                                                                    "batchNo": "6081",
                                                                                                                                    "nodeId": "1328|6081",
                                                                                                                                    //"level": 8,
                                                                                                                                    "type": "Material",
                                                                                                                                    "matDesc": "Insulin, Human"
                                                                                                                                },
                                                                                                                                {
                                                                                                                                    //"id": "437",
                                                                                                                                    "id": "1148",
                                                                                                                                    "batchNo": "6409",
                                                                                                                                    "nodeId": "1148|6409",
                                                                                                                                    //"level": 12,
                                                                                                                                    "type": "Material",
                                                                                                                                    "matDesc": "Filter Maxi-Cap 0.2u"
                                                                                                                                }
                                                                                                                            ],
                                                                                                                            "relationshipMap": {
                                                                                                                                "497-430": {
                                                                                                                                    //"id": "22",
                                                                                                                                    "type": "Input",
                                                                                                                                    "uom": "",
                                                                                                                                    "qty": "1562.5",
                                                                                                                                    "startNodeId": "430",
                                                                                                                                    "endNodeId": "497"
                                                                                                                                },
                                                                                                                                "497-431": {
                                                                                                                                    //"id": "56",
                                                                                                                                    "type": "Input",
                                                                                                                                    "uom": "",
                                                                                                                                    "qty": "625.2",
                                                                                                                                    "startNodeId": "431",
                                                                                                                                    "endNodeId": "497"
                                                                                                                                },
                                                                                                                                "497-429": {
                                                                                                                                    //"id": "32",
                                                                                                                                    "type": "Input",
                                                                                                                                    "uom": "",
                                                                                                                                    "qty": "16275.0",
                                                                                                                                    "startNodeId": "429",
                                                                                                                                    "endNodeId": "497"
                                                                                                                                },
                                                                                                                                "497-436": {
                                                                                                                                    //"id": "11",
                                                                                                                                    "type": "Input",
                                                                                                                                    "uom": "",
                                                                                                                                    "qty": "4.0",
                                                                                                                                    "startNodeId": "436",
                                                                                                                                    "endNodeId": "497"
                                                                                                                                },
                                                                                                                                "497-437": {
                                                                                                                                    //"id": "80",
                                                                                                                                    "type": "Input",
                                                                                                                                    "uom": "",
                                                                                                                                    "qty": "1.0",
                                                                                                                                    "startNodeId": "437",
                                                                                                                                    "endNodeId": "497"
                                                                                                                                },
                                                                                                                                "497-432": {
                                                                                                                                    //"id": "112",
                                                                                                                                    "type": "Input",
                                                                                                                                    "uom": "",
                                                                                                                                    "qty": "1250.0",
                                                                                                                                    "startNodeId": "432",
                                                                                                                                    "endNodeId": "497"
                                                                                                                                },
                                                                                                                                "497-433": {
                                                                                                                                    //"id": "38",
                                                                                                                                    "type": "Input",
                                                                                                                                    "uom": "",
                                                                                                                                    "qty": "182.503",
                                                                                                                                    "startNodeId": "433",
                                                                                                                                    "endNodeId": "497"
                                                                                                                                },
                                                                                                                                "497-434": {
                                                                                                                                    //"id": "72",
                                                                                                                                    "type": "Input",
                                                                                                                                    "uom": "",
                                                                                                                                    "qty": "3.1265",
                                                                                                                                    "startNodeId": "434",
                                                                                                                                    "endNodeId": "497"
                                                                                                                                },
                                                                                                                                "497-435": {
                                                                                                                                    //"id": "25",
                                                                                                                                    "type": "Input",
                                                                                                                                    "uom": "",
                                                                                                                                    "qty": "1.0",
                                                                                                                                    "startNodeId": "435",
                                                                                                                                    "endNodeId": "497"
                                                                                                                                }
                                                                                                                            }
                                                                                                                        }
                                                                                                                    ],
                                                                                                                    "relationshipMap": {
                                                                                                                        "418-497": {
                                                                                                                            //"id": "126",
                                                                                                                            "type": "Output",
                                                                                                                            "uom": "",
                                                                                                                            "qty": "626.8",
                                                                                                                            "startNodeId": "497",
                                                                                                                            "endNodeId": "418"
                                                                                                                        }
                                                                                                                    }
                                                                                                                },
                                                                                                                {
                                                                                                                    //"id": "415",
                                                                                                                    "id": "1660",
                                                                                                                    "batchNo": "7311",
                                                                                                                    "nodeId": "1660|7311",
                                                                                                                    //"level": 14,
                                                                                                                    "type": "Material",
                                                                                                                    "matDesc": "Storage Bag 10L"
                                                                                                                },
                                                                                                                {
                                                                                                                    //"id": "419",
                                                                                                                    "id": "1824",
                                                                                                                    "batchNo": "9376",
                                                                                                                    "nodeId": "1824|9376",
                                                                                                                    //"level": 14,
                                                                                                                    "type": "Material",
                                                                                                                    "matDesc": "Centrifuge Tube, PP, Conical-Bottom, 50mL Ster..."
                                                                                                                },
                                                                                                                {
                                                                                                                    //"id": "416",
                                                                                                                    "id": "1487",
                                                                                                                    "batchNo": "7890",
                                                                                                                    "nodeId": "1487|7890",
                                                                                                                    //"level": 14,
                                                                                                                    "type": "Material",
                                                                                                                    "matDesc": "Sample Bag 60mL "
                                                                                                                }
                                                                                                            ],
                                                                                                            "relationshipMap": {
                                                                                                                "495-415": {
                                                                                                                    //"id": "89",
                                                                                                                    "type": "Input",
                                                                                                                    "uom": "",
                                                                                                                    "qty": "1.0",
                                                                                                                    "startNodeId": "415",
                                                                                                                    "endNodeId": "495"
                                                                                                                },
                                                                                                                "495-416": {
                                                                                                                    //"id": "93",
                                                                                                                    "type": "Input",
                                                                                                                    "uom": "",
                                                                                                                    "qty": "1.0",
                                                                                                                    "startNodeId": "416",
                                                                                                                    "endNodeId": "495"
                                                                                                                },
                                                                                                                "495-417": {
                                                                                                                    //"id": "6",
                                                                                                                    "type": "Input",
                                                                                                                    "uom": "",
                                                                                                                    "qty": "1.0",
                                                                                                                    "startNodeId": "417",
                                                                                                                    "endNodeId": "495"
                                                                                                                },
                                                                                                                "495-418": {
                                                                                                                    //"id": "59",
                                                                                                                    "type": "Input",
                                                                                                                    "uom": "",
                                                                                                                    "qty": "10.1",
                                                                                                                    "startNodeId": "418",
                                                                                                                    "endNodeId": "495"
                                                                                                                },
                                                                                                                "495-419": {
                                                                                                                    //"id": "108",
                                                                                                                    "type": "Input",
                                                                                                                    "uom": "",
                                                                                                                    "qty": "3.0",
                                                                                                                    "startNodeId": "419",
                                                                                                                    "endNodeId": "495"
                                                                                                                },
                                                                                                                "495-421": {
                                                                                                                    //"id": "91",
                                                                                                                    "type": "Input",
                                                                                                                    "uom": "",
                                                                                                                    "qty": "1.0",
                                                                                                                    "startNodeId": "421",
                                                                                                                    "endNodeId": "495"
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    ],
                                                                                                    "relationshipMap": {
                                                                                                        "420-495": {
                                                                                                            //"id": "135",
                                                                                                            "type": "Output",
                                                                                                            "uom": "",
                                                                                                            "qty": "10.0",
                                                                                                            "startNodeId": "495",
                                                                                                            "endNodeId": "420"
                                                                                                        }
                                                                                                    }
                                                                                                },
                                                                                                {
                                                                                                    //"id": "423",
                                                                                                    "id": "1157",
                                                                                                    "batchNo": "8808",
                                                                                                    "nodeId": "1157|8808",
                                                                                                    //"level": 12,
                                                                                                    "type": "Material",
                                                                                                    "matDesc": "SOLN,1M SodCarbonate",
                                                                                                    "children": [
                                                                                                        {
                                                                                                            //"id": "496",
                                                                                                            //"level": 11,
                                                                                                            "id": "P8",
                                                                                                            "type": "Process Order",
                                                                                                            "children": [
                                                                                                                {
                                                                                                                    //"id": "427",
                                                                                                                    "id": "1387",
                                                                                                                    "batchNo": "3281",
                                                                                                                    "nodeId": "1387|3281",
                                                                                                                    //"level": 8,
                                                                                                                    "type": "Material",
                                                                                                                    "matDesc": "Cell Culture Port Plug"
                                                                                                                },
                                                                                                                {
                                                                                                                    //"id": "424",
                                                                                                                    "id": "1815",
                                                                                                                    "batchNo": "6866",
                                                                                                                    "nodeId": "1815|6866",
                                                                                                                    //"level": 8,
                                                                                                                    "type": "Material",
                                                                                                                    "matDesc": "Bag 100L"
                                                                                                                },
                                                                                                                {
                                                                                                                    //"id": "425",
                                                                                                                    "id": "1659",
                                                                                                                    "batchNo": "4578",
                                                                                                                    "nodeId": "1659|4578",
                                                                                                                    //"level": 8,
                                                                                                                    "type": "Material",
                                                                                                                    "matDesc": "Bag 500L"
                                                                                                                },
                                                                                                                {
                                                                                                                    //"id": "426",
                                                                                                                    "id": "1659",
                                                                                                                    "batchNo": "9268",
                                                                                                                    "nodeId": "1659|9268",
                                                                                                                    //"level": 12,
                                                                                                                    "type": "Material",
                                                                                                                    "matDesc": "Bag 500L"
                                                                                                                },
                                                                                                                {
                                                                                                                    //"id": "428",
                                                                                                                    "id": "1784",
                                                                                                                    "batchNo": "5617",
                                                                                                                    "nodeId": "1784|5617",
                                                                                                                    //"level": 8,
                                                                                                                    "type": "Material",
                                                                                                                    "matDesc": "SodCarbonate, Anhydrous, NF, PhEur"
                                                                                                                },
                                                                                                                {
                                                                                                                    //"id": "422",
                                                                                                                    "id": "1241",
                                                                                                                    "batchNo": "5969",
                                                                                                                    "nodeId": "1241|5969",
                                                                                                                    //"level": 12,
                                                                                                                    "type": "Material",
                                                                                                                    "matDesc": "Transfer System 1000mm"
                                                                                                                }
                                                                                                            ],
                                                                                                            "relationshipMap": {
                                                                                                                "496-428": {
                                                                                                                    //"id": "64",
                                                                                                                    "type": "Input",
                                                                                                                    "uom": "",
                                                                                                                    "qty": "116600.0",
                                                                                                                    "startNodeId": "428",
                                                                                                                    "endNodeId": "496"
                                                                                                                },
                                                                                                                "496-426": {
                                                                                                                    //"id": "106",
                                                                                                                    "type": "Input",
                                                                                                                    "uom": "",
                                                                                                                    "qty": "1.0",
                                                                                                                    "startNodeId": "426",
                                                                                                                    "endNodeId": "496"
                                                                                                                },
                                                                                                                "496-427": {
                                                                                                                    //"id": "30",
                                                                                                                    "type": "Input",
                                                                                                                    "uom": "",
                                                                                                                    "qty": "4.0",
                                                                                                                    "startNodeId": "427",
                                                                                                                    "endNodeId": "496"
                                                                                                                },
                                                                                                                "496-424": {
                                                                                                                    //"id": "87",
                                                                                                                    "type": "Input",
                                                                                                                    "uom": "",
                                                                                                                    "qty": "3.0",
                                                                                                                    "startNodeId": "424",
                                                                                                                    "endNodeId": "496"
                                                                                                                },
                                                                                                                "496-425": {
                                                                                                                    //"id": "47",
                                                                                                                    "type": "Input",
                                                                                                                    "uom": "",
                                                                                                                    "qty": "1.0",
                                                                                                                    "startNodeId": "425",
                                                                                                                    "endNodeId": "496"
                                                                                                                },
                                                                                                                "496-422": {
                                                                                                                    //"id": "69",
                                                                                                                    "type": "Input",
                                                                                                                    "uom": "",
                                                                                                                    "qty": "1.0",
                                                                                                                    "startNodeId": "422",
                                                                                                                    "endNodeId": "496"
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    ],
                                                                                                    "relationshipMap": {
                                                                                                        "423-496": {
                                                                                                            //"id": "134",
                                                                                                            "type": "Output",
                                                                                                            "uom": "",
                                                                                                            "qty": "1101.0",
                                                                                                            "startNodeId": "496",
                                                                                                            "endNodeId": "423"
                                                                                                        }
                                                                                                    }
                                                                                                },
                                                                                                {
                                                                                                    //"id": "438",
                                                                                                    "id": "1418",
                                                                                                    "batchNo": "8735",
                                                                                                    "nodeId": "1418|8735",
                                                                                                    //"level": 12,
                                                                                                    "type": "Material",
                                                                                                    "matDesc": "Filter Hydrophilic Cartridge 10\""
                                                                                                }
                                                                                            ],
                                                                                            "relationshipMap": {
                                                                                                "498-439": {
                                                                                                    //"id": "26",
                                                                                                    "type": "Input",
                                                                                                    "uom": "",
                                                                                                    "qty": "5.0",
                                                                                                    "startNodeId": "439",
                                                                                                    "endNodeId": "498"
                                                                                                },
                                                                                                "498-418": {
                                                                                                    //"id": "57",
                                                                                                    "type": "Input",
                                                                                                    "uom": "",
                                                                                                    "qty": "40.0",
                                                                                                    "startNodeId": "418",
                                                                                                    "endNodeId": "498"
                                                                                                },
                                                                                                "498-423": {
                                                                                                    //"id": "100",
                                                                                                    "type": "Input",
                                                                                                    "uom": "",
                                                                                                    "qty": "2.0",
                                                                                                    "startNodeId": "423",
                                                                                                    "endNodeId": "498"
                                                                                                },
                                                                                                "498-420": {
                                                                                                    //"id": "103",
                                                                                                    "type": "Input",
                                                                                                    "uom": "",
                                                                                                    "qty": "10.0",
                                                                                                    "startNodeId": "420",
                                                                                                    "endNodeId": "498"
                                                                                                },
                                                                                                "498-438": {
                                                                                                    //"id": "98",
                                                                                                    "type": "Input",
                                                                                                    "uom": "",
                                                                                                    "qty": "1.0",
                                                                                                    "startNodeId": "438",
                                                                                                    "endNodeId": "498"
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    ],
                                                                                    "relationshipMap": {
                                                                                        "440-498": {
                                                                                            //"id": "130",
                                                                                            "type": "Output",
                                                                                            "uom": "",
                                                                                            "qty": "50.0",
                                                                                            "startNodeId": "498",
                                                                                            "endNodeId": "440"
                                                                                        }
                                                                                    }
                                                                                }
                                                                            ],
                                                                            "relationshipMap": {
                                                                                "499-416": {
                                                                                    //"id": "92",
                                                                                    "type": "Input",
                                                                                    "uom": "",
                                                                                    "qty": "1.0",
                                                                                    "startNodeId": "416",
                                                                                    "endNodeId": "499"
                                                                                },
                                                                                "499-418": {
                                                                                    //"id": "58",
                                                                                    "type": "Input",
                                                                                    "uom": "",
                                                                                    "qty": "450.0",
                                                                                    "startNodeId": "418",
                                                                                    "endNodeId": "499"
                                                                                },
                                                                                "499-440": {
                                                                                    //"id": "84",
                                                                                    "type": "Input",
                                                                                    "uom": "",
                                                                                    "qty": "50.0",
                                                                                    "startNodeId": "440",
                                                                                    "endNodeId": "499"
                                                                                },
                                                                                "499-442": {
                                                                                    //"id": "73",
                                                                                    "type": "Input",
                                                                                    "uom": "",
                                                                                    "qty": "1.0",
                                                                                    "startNodeId": "442",
                                                                                    "endNodeId": "499"
                                                                                },
                                                                                "499-443": {
                                                                                    //"id": "44",
                                                                                    "type": "Input",
                                                                                    "uom": "",
                                                                                    "qty": "1.0",
                                                                                    "startNodeId": "443",
                                                                                    "endNodeId": "499"
                                                                                },
                                                                                "499-423": {
                                                                                    //"id": "101",
                                                                                    "type": "Input",
                                                                                    "uom": "",
                                                                                    "qty": "5.0",
                                                                                    "startNodeId": "423",
                                                                                    "endNodeId": "499"
                                                                                }
                                                                            }
                                                                        }
                                                                    ],
                                                                    "relationshipMap": {
                                                                        "441-499": {
                                                                            //"id": "131",
                                                                            "type": "Output",
                                                                            "uom": "",
                                                                            "qty": "500.0",
                                                                            "startNodeId": "499",
                                                                            "endNodeId": "441"
                                                                        }
                                                                    }
                                                                }
                                                            ],
                                                            "relationshipMap": {
                                                                "502-441": {
                                                                    //"id": "94",
                                                                    "type": "Input",
                                                                    "uom": "",
                                                                    "qty": "500.0",
                                                                    "startNodeId": "441",
                                                                    "endNodeId": "502"
                                                                },
                                                                "502-445": {
                                                                    //"id": "95",
                                                                    "type": "Input",
                                                                    "uom": "",
                                                                    "qty": "1502.0",
                                                                    "startNodeId": "445",
                                                                    "endNodeId": "502"
                                                                }
                                                            }
                                                        }
                                                    ],
                                                    "relationshipMap": {
                                                        "448-502": {
                                                            //"id": "121",
                                                            "type": "Output",
                                                            "uom": "",
                                                            "qty": "2000.0",
                                                            "startNodeId": "502",
                                                            "endNodeId": "448"
                                                        }
                                                    }
                                                },
                                                {
                                                    //"id": "458",
                                                    "id": "1848",
                                                    "batchNo": "2031",
                                                    "nodeId": "1848|2031",
                                                    //"level": 6,
                                                    "type": "Material",
                                                    "matDesc": "Solution, 20X RCDF1 Stock",
                                                    "children": [
                                                        {
                                                            //"id": "505",
                                                            //"level": 7,
                                                            "id": "P17",
                                                            "type": "Process Order",
                                                            "children": [
                                                                {
                                                                    //"id": "450",
                                                                    "id": "1094",
                                                                    "batchNo": "1230",
                                                                    "nodeId": "1094|1230",
                                                                    //"level": 8,
                                                                    "type": "Material",
                                                                    "matDesc": "L-Cysteine Hydrochloride Monohydrate, USP, PhE..."
                                                                },
                                                                {
                                                                    //"id": "451",
                                                                    "id": "1711",
                                                                    "batchNo": "2528",
                                                                    "nodeId": "1711|2528",
                                                                    //"level": 8,
                                                                    "type": "Material",
                                                                    "matDesc": "Chelate Formulation"
                                                                },
                                                                {
                                                                    //"id": "449",
                                                                    "id": "1232",
                                                                    "batchNo": "9989",
                                                                    "nodeId": "1232|9989",
                                                                    //"level": 8,
                                                                    "type": "Material",
                                                                    "matDesc": "Media, SOY Feed, Powder"
                                                                },
                                                                {
                                                                    //"id": "457",
                                                                    "id": "1965",
                                                                    "batchNo": "6328",
                                                                    "nodeId": "1965|6328",
                                                                    //"level": 8,
                                                                    "type": "Material",
                                                                    "matDesc": "Filter 30\""
                                                                },
                                                                {
                                                                    //"id": "460",
                                                                    "id": "1220",
                                                                    "batchNo": "4632",
                                                                    "nodeId": "1220|4632",
                                                                    //"level": 8,
                                                                    "type": "Material",
                                                                    "matDesc": "L-Aspartic Acid, Multi-Compendial"
                                                                },
                                                                {
                                                                    //"id": "461",
                                                                    "id": "1220",
                                                                    "batchNo": "4909",
                                                                    "nodeId": "1220|4909",
                                                                    //"level": 8,
                                                                    "type": "Material",
                                                                    "matDesc": "L-Aspartic Acid, Multi-Compendial"
                                                                },
                                                                {
                                                                    //"id": "459",
                                                                    "id": "1232",
                                                                    "batchNo": "4130",
                                                                    "nodeId": "1232|4130",
                                                                    //"level": 8,
                                                                    "type": "Material",
                                                                    "matDesc": "Media, SOY Feed, Powder"
                                                                },
                                                                {
                                                                    //"id": "462",
                                                                    "id": "1186",
                                                                    "batchNo": "3334",
                                                                    "nodeId": "1186|3334",
                                                                    //"level": 8,
                                                                    "type": "Material",
                                                                    "matDesc": "SodHydroxide, 10N, Reagent"
                                                                }
                                                            ],
                                                            "relationshipMap": {
                                                                "505-457": {
                                                                    //"id": "76",
                                                                    "type": "Input",
                                                                    "uom": "",
                                                                    "qty": "3.0",
                                                                    "startNodeId": "457",
                                                                    "endNodeId": "505"
                                                                },
                                                                "505-449": {
                                                                    //"id": "118",
                                                                    "type": "Input",
                                                                    "uom": "",
                                                                    "qty": "16654.3",
                                                                    "startNodeId": "449",
                                                                    "endNodeId": "505"
                                                                },
                                                                "505-459": {
                                                                    //"id": "42",
                                                                    "type": "Input",
                                                                    "uom": "",
                                                                    "qty": "20215.5",
                                                                    "startNodeId": "459",
                                                                    "endNodeId": "505"
                                                                },
                                                                "505-460": {
                                                                    //"id": "48",
                                                                    "type": "Input",
                                                                    "uom": "",
                                                                    "qty": "2783.5",
                                                                    "startNodeId": "460",
                                                                    "endNodeId": "505"
                                                                },
                                                                "505-450": {
                                                                    //"id": "2",
                                                                    "type": "Input",
                                                                    "uom": "",
                                                                    "qty": "2583.6",
                                                                    "startNodeId": "450",
                                                                    "endNodeId": "505"
                                                                },
                                                                "505-461": {
                                                                    //"id": "49",
                                                                    "type": "Input",
                                                                    "uom": "",
                                                                    "qty": "5816.7",
                                                                    "startNodeId": "461",
                                                                    "endNodeId": "505"
                                                                },
                                                                "505-451": {
                                                                    //"id": "17",
                                                                    "type": "Input",
                                                                    "uom": "",
                                                                    "qty": "1723.5",
                                                                    "startNodeId": "451",
                                                                    "endNodeId": "505"
                                                                },
                                                                "505-462": {
                                                                    //"id": "33",
                                                                    "type": "Input",
                                                                    "uom": "",
                                                                    "qty": "11.61232",
                                                                    "startNodeId": "462",
                                                                    "endNodeId": "505"
                                                                }
                                                            }
                                                        }
                                                    ],
                                                    "relationshipMap": {
                                                        "458-505": {
                                                            //"id": "122",
                                                            "type": "Output",
                                                            "uom": "",
                                                            "qty": "430.7",
                                                            "startNodeId": "505",
                                                            "endNodeId": "458"
                                                        }
                                                    }
                                                },
                                                {
                                                    //"id": "466",
                                                    "id": "1159",
                                                    "batchNo": "2318",
                                                    "nodeId": "1159|2318",
                                                    //"level": 6,
                                                    "type": "Material",
                                                    "matDesc": "SOLN 75 g/L,L-Tyrosine",
                                                    "children": [
                                                        {
                                                            //"id": "507",
                                                            //"level": 7,
                                                            "id": "P19",
                                                            "type": "Process Order",
                                                            "children": [
                                                                {
                                                                    //"id": "465",
                                                                    "id": "1775",
                                                                    "batchNo": "2494",
                                                                    "nodeId": "1775|2494",
                                                                    //"level": 8,
                                                                    "type": "Material",
                                                                    "matDesc": "L-Tyrosine DiSodSalt, Dihydrate"
                                                                },
                                                                {
                                                                    //"id": "424",
                                                                    "id": "1815",
                                                                    "batchNo": "6866",
                                                                    "nodeId": "1815|6866",
                                                                    //"level": 8,
                                                                    "type": "Material",
                                                                    "matDesc": "Bag 100L"
                                                                }
                                                            ],
                                                            "relationshipMap": {
                                                                "507-424": {
                                                                    //"id": "86",
                                                                    "type": "Input",
                                                                    "uom": "",
                                                                    "qty": "1.0",
                                                                    "startNodeId": "424",
                                                                    "endNodeId": "507"
                                                                },
                                                                "507-465": {
                                                                    //"id": "14",
                                                                    "type": "Input",
                                                                    "uom": "",
                                                                    "qty": "9000.5",
                                                                    "startNodeId": "465",
                                                                    "endNodeId": "507"
                                                                }
                                                            }
                                                        }
                                                    ],
                                                    "relationshipMap": {
                                                        "466-507": {
                                                            //"id": "123",
                                                            "type": "Output",
                                                            "uom": "",
                                                            "qty": "120.6",
                                                            "startNodeId": "507",
                                                            "endNodeId": "466"
                                                        }
                                                    }
                                                },
                                                {
                                                    //"id": "481",
                                                    "id": "1560",
                                                    "batchNo": "2501",
                                                    "nodeId": "1560|2501",
                                                    //"level": 6,
                                                    "type": "Material",
                                                    "matDesc": "HyClone Antifoam"
                                                },
                                                {
                                                    //"id": "473",
                                                    "id": "1041",
                                                    "batchNo": "3044",
                                                    "nodeId": "1041|3044",
                                                    //"level": 6,
                                                    "type": "Material",
                                                    "matDesc": "SOLN,50% Dextrose"
                                                },
                                                {
                                                    //"id": "477",
                                                    "id": "1123",
                                                    "batchNo": "4329",
                                                    "nodeId": "1123|4329",
                                                    //"level": 6,
                                                    "type": "Material",
                                                    "matDesc": "Filter Hydrophilic Cartridge 30\""
                                                },
                                                {
                                                    //"id": "480",
                                                    "id": "1098",
                                                    "batchNo": "8290",
                                                    "nodeId": "1098|8290",
                                                    //"level": 6,
                                                    "type": "Material",
                                                    "matDesc": "Filter 5\" 0.2u"
                                                },
                                                {
                                                    //"id": "476",
                                                    "id": "1041",
                                                    "batchNo": "9852",
                                                    "nodeId": "1041|9852",
                                                    //"level": 6,
                                                    "type": "Material",
                                                    "matDesc": "SOLN,50% Dextrose"
                                                },
                                                {
                                                    //"id": "475",
                                                    "id": "1560",
                                                    "batchNo": "6451",
                                                    "nodeId": "1560|6451",
                                                    //"level": 6,
                                                    "type": "Material",
                                                    "matDesc": "HyClone Antifoam"
                                                },
                                                {
                                                    //"id": "468",
                                                    "id": "1179",
                                                    "batchNo": "9322",
                                                    "nodeId": "1179|9322",
                                                    //"level": 6,
                                                    "type": "Material",
                                                    "matDesc": "SOLN,60 g/L SodPhos",
                                                    "children": [
                                                        {
                                                            //"id": "509",
                                                            //"level": 7,
                                                            "id": "P21",
                                                            "type": "Process Order",
                                                            "children": [
                                                                {
                                                                    //"id": "425",
                                                                    "id": "1659",
                                                                    "batchNo": "4578",
                                                                    "nodeId": "1659|4578",
                                                                    //"level": 8,
                                                                    "type": "Material",
                                                                    "matDesc": "Bag 500L"
                                                                },
                                                                {
                                                                    //"id": "469",
                                                                    "id": "1533",
                                                                    "batchNo": "9016",
                                                                    "nodeId": "1533|9016",
                                                                    //"level": 8,
                                                                    "type": "Material",
                                                                    "matDesc": "SodPhos Dibasic USP"
                                                                }
                                                            ],
                                                            "relationshipMap": {
                                                                "509-425": {
                                                                    //"id": "46",
                                                                    "type": "Input",
                                                                    "uom": "",
                                                                    "qty": "2.0",
                                                                    "startNodeId": "425",
                                                                    "endNodeId": "509"
                                                                },
                                                                "509-469": {
                                                                    //"id": "104",
                                                                    "type": "Input",
                                                                    "uom": "",
                                                                    "qty": "30000.0",
                                                                    "startNodeId": "469",
                                                                    "endNodeId": "509"
                                                                }
                                                            }
                                                        }
                                                    ],
                                                    "relationshipMap": {
                                                        "468-509": {
                                                            //"id": "137",
                                                            "type": "Output",
                                                            "uom": "",
                                                            "qty": "500.7",
                                                            "startNodeId": "509",
                                                            "endNodeId": "468"
                                                        }
                                                    }
                                                },
                                                {
                                                    //"id": "467",
                                                    "id": "1848",
                                                    "batchNo": "6243",
                                                    "nodeId": "1848|6243",
                                                    //"level": 6,
                                                    "type": "Material",
                                                    "matDesc": "Solution, 20X RCDF1 Stock",
                                                    "children": [
                                                        {
                                                            //"id": "508",
                                                            //"level": 7,
                                                            "id": "P20",
                                                            "type": "Process Order",
                                                            "children": [
                                                                {
                                                                    //"id": "450",
                                                                    "id": "1094",
                                                                    "batchNo": "1230",
                                                                    "nodeId": "1094|1230",
                                                                    //"level": 8,
                                                                    "type": "Material",
                                                                    "matDesc": "L-Cysteine Hydrochloride Monohydrate, USP, PhE..."
                                                                },
                                                                {
                                                                    //"id": "451",
                                                                    "id": "1711",
                                                                    "batchNo": "2528",
                                                                    "nodeId": "1711|2528",
                                                                    //"level": 8,
                                                                    "type": "Material",
                                                                    "matDesc": "Chelate Formulation"
                                                                },
                                                                {
                                                                    //"id": "449",
                                                                    "id": "1232",
                                                                    "batchNo": "9989",
                                                                    "nodeId": "1232|9989",
                                                                    //"level": 8,
                                                                    "type": "Material",
                                                                    "matDesc": "Media, SOY Feed, Powder"
                                                                },
                                                                {
                                                                    //"id": "457",
                                                                    "id": "1965",
                                                                    "batchNo": "6328",
                                                                    "nodeId": "1965|6328",
                                                                    //"level": 8,
                                                                    "type": "Material",
                                                                    "matDesc": "Filter 30\""
                                                                },
                                                                {
                                                                    //"id": "462",
                                                                    "id": "1186",
                                                                    "batchNo": "3334",
                                                                    "nodeId": "1186|3334",
                                                                    //"level": 8,
                                                                    "type": "Material",
                                                                    "matDesc": "SodHydroxide, 10N, Reagent"
                                                                },
                                                                {
                                                                    //"id": "461",
                                                                    "id": "1220",
                                                                    "batchNo": "4909",
                                                                    "nodeId": "1220|4909",
                                                                    //"level": 8,
                                                                    "type": "Material",
                                                                    "matDesc": "L-Aspartic Acid, Multi-Compendial"
                                                                }
                                                            ],
                                                            "relationshipMap": {
                                                                "508-450": {
                                                                    //"id": "4",
                                                                    "type": "Input",
                                                                    "uom": "",
                                                                    "qty": "2582.2",
                                                                    "startNodeId": "450",
                                                                    "endNodeId": "508"
                                                                },
                                                                "508-461": {
                                                                    //"id": "51",
                                                                    "type": "Input",
                                                                    "uom": "",
                                                                    "qty": "8600.9",
                                                                    "startNodeId": "461",
                                                                    "endNodeId": "508"
                                                                },
                                                                "508-449": {
                                                                    //"id": "120",
                                                                    "type": "Input",
                                                                    "uom": "",
                                                                    "qty": "36550.0",
                                                                    "startNodeId": "449",
                                                                    "endNodeId": "508"
                                                                },
                                                                "508-457": {
                                                                    //"id": "77",
                                                                    "type": "Input",
                                                                    "uom": "",
                                                                    "qty": "3.0",
                                                                    "startNodeId": "457",
                                                                    "endNodeId": "508"
                                                                },
                                                                "508-451": {
                                                                    //"id": "19",
                                                                    "type": "Input",
                                                                    "uom": "",
                                                                    "qty": "1720.5",
                                                                    "startNodeId": "451",
                                                                    "endNodeId": "508"
                                                                },
                                                                "508-462": {
                                                                    //"id": "35",
                                                                    "type": "Input",
                                                                    "uom": "",
                                                                    "qty": "11.62862",
                                                                    "startNodeId": "462",
                                                                    "endNodeId": "508"
                                                                }
                                                            }
                                                        }
                                                    ],
                                                    "relationshipMap": {
                                                        "467-508": {
                                                            //"id": "129",
                                                            "type": "Output",
                                                            "uom": "",
                                                            "qty": "429.9",
                                                            "startNodeId": "508",
                                                            "endNodeId": "467"
                                                        }
                                                    }
                                                },
                                                {
                                                    //"id": "472",
                                                    "id": "1041",
                                                    "batchNo": "5769",
                                                    "nodeId": "1041|5769",
                                                    //"level": 6,
                                                    "type": "Material",
                                                    "matDesc": "SOLN,50% Dextrose"
                                                },
                                                {
                                                    //"id": "464",
                                                    "id": "1848",
                                                    "batchNo": "8339",
                                                    "nodeId": "1848|8339",
                                                    //"level": 6,
                                                    "type": "Material",
                                                    "matDesc": "Solution, 20X RCDF1 Stock",
                                                    "children": [
                                                        {
                                                            //"id": "506",
                                                            //"level": 7,
                                                            "id": "P18",
                                                            "type": "Process Order",
                                                            "children": [
                                                                {
                                                                    //"id": "450",
                                                                    "id": "1094",
                                                                    "batchNo": "1230",
                                                                    "nodeId": "1094|1230",
                                                                    //"level": 8,
                                                                    "type": "Material",
                                                                    "matDesc": "L-Cysteine Hydrochloride Monohydrate, USP, PhE..."
                                                                },
                                                                {
                                                                    //"id": "451",
                                                                    "id": "1711",
                                                                    "batchNo": "2528",
                                                                    "nodeId": "1711|2528",
                                                                    //"level": 8,
                                                                    "type": "Material",
                                                                    "matDesc": "Chelate Formulation"
                                                                },
                                                                {
                                                                    //"id": "427",
                                                                    "id": "1387",
                                                                    "batchNo": "3281",
                                                                    "nodeId": "1387|3281",
                                                                    //"level": 8,
                                                                    "type": "Material",
                                                                    "matDesc": "Cell Culture Port Plug"
                                                                },
                                                                {
                                                                    //"id": "463",
                                                                    "id": "1232",
                                                                    "batchNo": "9896",
                                                                    "nodeId": "1232|9896",
                                                                    //"level": 8,
                                                                    "type": "Material",
                                                                    "matDesc": "Media, SOY Feed, Powder"
                                                                },
                                                                {
                                                                    //"id": "449",
                                                                    "id": "1232",
                                                                    "batchNo": "9989",
                                                                    "nodeId": "1232|9989",
                                                                    //"level": 8,
                                                                    "type": "Material",
                                                                    "matDesc": "Media, SOY Feed, Powder"
                                                                },
                                                                {
                                                                    //"id": "462",
                                                                    "id": "1186",
                                                                    "batchNo": "3334",
                                                                    "nodeId": "1186|3334",
                                                                    //"level": 8,
                                                                    "type": "Material",
                                                                    "matDesc": "SodHydroxide, 10N, Reagent"
                                                                },
                                                                {
                                                                    //"id": "461",
                                                                    "id": "1220",
                                                                    "batchNo": "4909",
                                                                    "nodeId": "1220|4909",
                                                                    //"level": 8,
                                                                    "type": "Material",
                                                                    "matDesc": "L-Aspartic Acid, Multi-Compendial"
                                                                }
                                                            ],
                                                            "relationshipMap": {
                                                                "506-427": {
                                                                    //"id": "29",
                                                                    "type": "Input",
                                                                    "uom": "",
                                                                    "qty": "4.0",
                                                                    "startNodeId": "427",
                                                                    "endNodeId": "506"
                                                                },
                                                                "506-449": {
                                                                    //"id": "119",
                                                                    "type": "Input",
                                                                    "uom": "",
                                                                    "qty": "22574.6",
                                                                    "startNodeId": "449",
                                                                    "endNodeId": "506"
                                                                },
                                                                "506-450": {
                                                                    //"id": "3",
                                                                    "type": "Input",
                                                                    "uom": "",
                                                                    "qty": "2581.9",
                                                                    "startNodeId": "450",
                                                                    "endNodeId": "506"
                                                                },
                                                                "506-461": {
                                                                    //"id": "50",
                                                                    "type": "Input",
                                                                    "uom": "",
                                                                    "qty": "8613.8",
                                                                    "startNodeId": "461",
                                                                    "endNodeId": "506"
                                                                },
                                                                "506-463": {
                                                                    //"id": "114",
                                                                    "type": "Input",
                                                                    "uom": "",
                                                                    "qty": "13975.4",
                                                                    "startNodeId": "463",
                                                                    "endNodeId": "506"
                                                                },
                                                                "506-451": {
                                                                    //"id": "18",
                                                                    "type": "Input",
                                                                    "uom": "",
                                                                    "qty": "1721.5",
                                                                    "startNodeId": "451",
                                                                    "endNodeId": "506"
                                                                },
                                                                "506-462": {
                                                                    //"id": "34",
                                                                    "type": "Input",
                                                                    "uom": "",
                                                                    "qty": "11.61014",
                                                                    "startNodeId": "462",
                                                                    "endNodeId": "506"
                                                                }
                                                            }
                                                        }
                                                    ],
                                                    "relationshipMap": {
                                                        "464-506": {
                                                            //"id": "133",
                                                            "type": "Output",
                                                            "uom": "",
                                                            "qty": "430.6",
                                                            "startNodeId": "506",
                                                            "endNodeId": "464"
                                                        }
                                                    }
                                                },
                                                {
                                                    //"id": "447",
                                                    "id": "1157",
                                                    "batchNo": "5267",
                                                    "nodeId": "1157|5267",
                                                    //"level": 6,
                                                    "type": "Material",
                                                    "matDesc": "SOLN,1M SodCarbonate",
                                                    "children": [
                                                        {
                                                            //"id": "501",
                                                            //"level": 7,
                                                            "id": "P13",
                                                            "type": "Process Order",
                                                            "children": [
                                                                {
                                                                    //"id": "436",
                                                                    "id": "1587",
                                                                    "batchNo": "2208",
                                                                    "nodeId": "1587|2208",
                                                                    //"level": 8,
                                                                    "type": "Material",
                                                                    "matDesc": "Filter 0.1u"
                                                                },
                                                                {
                                                                    //"id": "428",
                                                                    "id": "1784",
                                                                    "batchNo": "5617",
                                                                    "nodeId": "1784|5617",
                                                                    //"level": 8,
                                                                    "type": "Material",
                                                                    "matDesc": "SodCarbonate, Anhydrous, NF, PhEur"
                                                                },
                                                                {
                                                                    //"id": "446",
                                                                    "id": "1587",
                                                                    "batchNo": "9541",
                                                                    "nodeId": "1587|9541",
                                                                    //"level": 8,
                                                                    "type": "Material",
                                                                    "matDesc": "Filter 0.1u"
                                                                },
                                                                {
                                                                    //"id": "425",
                                                                    "id": "1659",
                                                                    "batchNo": "4578",
                                                                    "nodeId": "1659|4578",
                                                                    //"level": 8,
                                                                    "type": "Material",
                                                                    "matDesc": "Bag 500L"
                                                                },
                                                                {
                                                                    //"id": "424",
                                                                    "id": "1815",
                                                                    "batchNo": "6866",
                                                                    "nodeId": "1815|6866",
                                                                    //"level": 8,
                                                                    "type": "Material",
                                                                    "matDesc": "Bag 100L"
                                                                }
                                                            ],
                                                            "relationshipMap": {
                                                                "501-446": {
                                                                    //"id": "109",
                                                                    "type": "Input",
                                                                    "uom": "",
                                                                    "qty": "2.0",
                                                                    "startNodeId": "446",
                                                                    "endNodeId": "501"
                                                                },
                                                                "501-424": {
                                                                    //"id": "85",
                                                                    "type": "Input",
                                                                    "uom": "",
                                                                    "qty": "3.0",
                                                                    "startNodeId": "424",
                                                                    "endNodeId": "501"
                                                                },
                                                                "501-428": {
                                                                    //"id": "63",
                                                                    "type": "Input",
                                                                    "uom": "",
                                                                    "qty": "116600.0",
                                                                    "startNodeId": "428",
                                                                    "endNodeId": "501"
                                                                },
                                                                "501-436": {
                                                                    //"id": "10",
                                                                    "type": "Input",
                                                                    "uom": "",
                                                                    "qty": "1.0",
                                                                    "startNodeId": "436",
                                                                    "endNodeId": "501"
                                                                },
                                                                "501-425": {
                                                                    //"id": "45",
                                                                    "type": "Input",
                                                                    "uom": "",
                                                                    "qty": "2.0",
                                                                    "startNodeId": "425",
                                                                    "endNodeId": "501"
                                                                }
                                                            }
                                                        }
                                                    ],
                                                    "relationshipMap": {
                                                        "447-501": {
                                                            //"id": "127",
                                                            "type": "Output",
                                                            "uom": "",
                                                            "qty": "1101.0",
                                                            "startNodeId": "501",
                                                            "endNodeId": "447"
                                                        }
                                                    }
                                                },
                                                {
                                                    //"id": "471",
                                                    "id": "1593",
                                                    "batchNo": "5938",
                                                    "nodeId": "1593|5938",
                                                    //"level": 6,
                                                    "type": "Material",
                                                    "matDesc": "Medium, CDM1B w/C13, 2.5g/L SodBicarb",
                                                    "children": [
                                                        {
                                                            //"id": "510",
                                                            //"level": 7,
                                                            "id": "P22",
                                                            "type": "Process Order",
                                                            "children": [
                                                                {
                                                                    //"id": "430",
                                                                    "id": "1160",
                                                                    "batchNo": "2553",
                                                                    "nodeId": "1160|2553",
                                                                    //"level": 8,
                                                                    "type": "Material",
                                                                    "matDesc": "Sodium Bicarbondate Powder USP"
                                                                },
                                                                {
                                                                    //"id": "435",
                                                                    "id": "1711",
                                                                    "batchNo": "2618",
                                                                    "nodeId": "1711|2618",
                                                                    //"level": 8,
                                                                    "type": "Material",
                                                                    "matDesc": "Filter 0.2u"
                                                                },
                                                                {
                                                                    //"id": "470",
                                                                    "id": "1080",
                                                                    "batchNo": "2786",
                                                                    "nodeId": "1080|2786",
                                                                    //"level": 8,
                                                                    "type": "Material",
                                                                    "matDesc": "Media, Soy Powder"
                                                                },
                                                                {
                                                                    //"id": "434",
                                                                    "id": "1328",
                                                                    "batchNo": "6081",
                                                                    "nodeId": "1328|6081",
                                                                    //"level": 8,
                                                                    "type": "Material",
                                                                    "matDesc": "Insulin, Human"
                                                                },
                                                                {
                                                                    //"id": "431",
                                                                    "id": "1975",
                                                                    "batchNo": "5104",
                                                                    "nodeId": "1975|5104",
                                                                    //"level": 8,
                                                                    "type": "Material",
                                                                    "matDesc": "Chelate Formulation C13"
                                                                },
                                                                {
                                                                    //"id": "432",
                                                                    "id": "1351",
                                                                    "batchNo": "9725",
                                                                    "nodeId": "1351|9725",
                                                                    //"level": 8,
                                                                    "type": "Material",
                                                                    "matDesc": "Dextrose Granular,USP"
                                                                },
                                                                {
                                                                    //"id": "433",
                                                                    "id": "1393",
                                                                    "batchNo": "3407",
                                                                    "nodeId": "1393|3407",
                                                                    //"level": 8,
                                                                    "type": "Material",
                                                                    "matDesc": "L-Glutamine"
                                                                },
                                                                {
                                                                    //"id": "457",
                                                                    "id": "1965",
                                                                    "batchNo": "6328",
                                                                    "nodeId": "1965|6328",
                                                                    //"level": 8,
                                                                    "type": "Material",
                                                                    "matDesc": "Filter 30\""
                                                                }
                                                            ],
                                                            "relationshipMap": {
                                                                "510-470": {
                                                                    //"id": "27",
                                                                    "type": "Input",
                                                                    "uom": "",
                                                                    "qty": "157544.7",
                                                                    "startNodeId": "470",
                                                                    "endNodeId": "510"
                                                                },
                                                                "510-431": {
                                                                    //"id": "55",
                                                                    "type": "Input",
                                                                    "uom": "",
                                                                    "qty": "6050.1",
                                                                    "startNodeId": "431",
                                                                    "endNodeId": "510"
                                                                },
                                                                "510-430": {
                                                                    //"id": "21",
                                                                    "type": "Input",
                                                                    "uom": "",
                                                                    "qty": "15127.5",
                                                                    "startNodeId": "430",
                                                                    "endNodeId": "510"
                                                                },
                                                                "510-433": {
                                                                    //"id": "37",
                                                                    "type": "Input",
                                                                    "uom": "",
                                                                    "qty": "1766.7",
                                                                    "startNodeId": "433",
                                                                    "endNodeId": "510"
                                                                },
                                                                "510-432": {
                                                                    //"id": "111",
                                                                    "type": "Input",
                                                                    "uom": "",
                                                                    "qty": "12209.2",
                                                                    "startNodeId": "432",
                                                                    "endNodeId": "510"
                                                                },
                                                                "510-435": {
                                                                    //"id": "24",
                                                                    "type": "Input",
                                                                    "uom": "",
                                                                    "qty": "1.0",
                                                                    "startNodeId": "435",
                                                                    "endNodeId": "510"
                                                                },
                                                                "510-457": {
                                                                    //"id": "78",
                                                                    "type": "Input",
                                                                    "uom": "",
                                                                    "qty": "2.0",
                                                                    "startNodeId": "457",
                                                                    "endNodeId": "510"
                                                                },
                                                                "510-434": {
                                                                    //"id": "71",
                                                                    "type": "Input",
                                                                    "uom": "",
                                                                    "qty": "30.2618",
                                                                    "startNodeId": "434",
                                                                    "endNodeId": "510"
                                                                }
                                                            }
                                                        }
                                                    ],
                                                    "relationshipMap": {
                                                        "471-510": {
                                                            //"id": "128",
                                                            "type": "Output",
                                                            "uom": "",
                                                            "qty": "6054.0",
                                                            "startNodeId": "510",
                                                            "endNodeId": "471"
                                                        }
                                                    }
                                                },
                                                {
                                                    //"id": "479",
                                                    "id": "1123",
                                                    "batchNo": "5712",
                                                    "nodeId": "1123|5712",
                                                    //"level": 6,
                                                    "type": "Material",
                                                    "matDesc": "Filter Hydrophilic Cartridge 30\""
                                                },
                                                {
                                                    //"id": "454",
                                                    "id": "1848",
                                                    "batchNo": "9086",
                                                    "nodeId": "1848|9086",
                                                    //"level": 6,
                                                    "type": "Material",
                                                    "matDesc": "Solution, 20X RCDF1 Stock",
                                                    "children": [
                                                        {
                                                            //"id": "503",
                                                            //"level": 7,
                                                            "id": "P15",
                                                            "type": "Process Order",
                                                            "children": [
                                                                {
                                                                    //"id": "453",
                                                                    "id": "1186",
                                                                    "batchNo": "1018",
                                                                    "nodeId": "1186|1018",
                                                                    //"level": 8,
                                                                    "type": "Material",
                                                                    "matDesc": "SodHydroxide, 10N, Reagent"
                                                                },
                                                                {
                                                                    //"id": "450",
                                                                    "id": "1094",
                                                                    "batchNo": "1230",
                                                                    "nodeId": "1094|1230",
                                                                    //"level": 8,
                                                                    "type": "Material",
                                                                    "matDesc": "L-Cysteine Hydrochloride Monohydrate, USP, PhE..."
                                                                },
                                                                {
                                                                    //"id": "451",
                                                                    "id": "1711",
                                                                    "batchNo": "2528",
                                                                    "nodeId": "1711|2528",
                                                                    //"level": 8,
                                                                    "type": "Material",
                                                                    "matDesc": "Chelate Formulation"
                                                                },
                                                                {
                                                                    //"id": "449",
                                                                    "id": "1232",
                                                                    "batchNo": "9989",
                                                                    "nodeId": "1232|9989",
                                                                    //"level": 8,
                                                                    "type": "Material",
                                                                    "matDesc": "Media, SOY Feed, Powder"
                                                                },
                                                                {
                                                                    //"id": "452",
                                                                    "id": "1220",
                                                                    "batchNo": "7534",
                                                                    "nodeId": "1220|7534",
                                                                    //"level": 8,
                                                                    "type": "Material",
                                                                    "matDesc": "L-Aspartic Acid, Multi-Compendial"
                                                                }
                                                            ],
                                                            "relationshipMap": {
                                                                "503-449": {
                                                                    //"id": "117",
                                                                    "type": "Input",
                                                                    "uom": "",
                                                                    "qty": "36465.5",
                                                                    "startNodeId": "449",
                                                                    "endNodeId": "503"
                                                                },
                                                                "503-452": {
                                                                    //"id": "90",
                                                                    "type": "Input",
                                                                    "uom": "",
                                                                    "qty": "8600.2",
                                                                    "startNodeId": "452",
                                                                    "endNodeId": "503"
                                                                },
                                                                "503-453": {
                                                                    //"id": "0",
                                                                    "type": "Input",
                                                                    "uom": "",
                                                                    "qty": "11.60886",
                                                                    "startNodeId": "453",
                                                                    "endNodeId": "503"
                                                                },
                                                                "503-450": {
                                                                    //"id": "1",
                                                                    "type": "Input",
                                                                    "uom": "",
                                                                    "qty": "2580.7",
                                                                    "startNodeId": "450",
                                                                    "endNodeId": "503"
                                                                },
                                                                "503-451": {
                                                                    //"id": "16",
                                                                    "type": "Input",
                                                                    "uom": "",
                                                                    "qty": "1721.7",
                                                                    "startNodeId": "451",
                                                                    "endNodeId": "503"
                                                                }
                                                            }
                                                        }
                                                    ],
                                                    "relationshipMap": {
                                                        "454-503": {
                                                            //"id": "136",
                                                            "type": "Output",
                                                            "uom": "",
                                                            "qty": "430.1",
                                                            "startNodeId": "503",
                                                            "endNodeId": "454"
                                                        }
                                                    }
                                                },
                                                {
                                                    //"id": "478",
                                                    "id": "1560",
                                                    "batchNo": "9965",
                                                    "nodeId": "1560|9965",
                                                    //"level": 6,
                                                    "type": "Material",
                                                    "matDesc": "HyClone Antifoam"
                                                }
                                            ],
                                            "relationshipMap": {
                                                "511-448": {
                                                    //"id": "7",
                                                    "type": "Input",
                                                    "uom": "",
                                                    "qty": "2000.0",
                                                    "startNodeId": "448",
                                                    "endNodeId": "511"
                                                },
                                                "511-458": {
                                                    //"id": "8",
                                                    "type": "Input",
                                                    "uom": "",
                                                    "qty": "400.0",
                                                    "startNodeId": "458",
                                                    "endNodeId": "511"
                                                },
                                                "511-447": {
                                                    //"id": "62",
                                                    "type": "Input",
                                                    "uom": "",
                                                    "qty": "400.0",
                                                    "startNodeId": "447",
                                                    "endNodeId": "511"
                                                },
                                                "511-468": {
                                                    //"id": "107",
                                                    "type": "Input",
                                                    "uom": "",
                                                    "qty": "225.0",
                                                    "startNodeId": "468",
                                                    "endNodeId": "511"
                                                },
                                                "511-479": {
                                                    //"id": "65",
                                                    "type": "Input",
                                                    "uom": "",
                                                    "qty": "1.0",
                                                    "startNodeId": "479",
                                                    "endNodeId": "511"
                                                },
                                                "511-467": {
                                                    //"id": "75",
                                                    "type": "Input",
                                                    "uom": "",
                                                    "qty": "400.0",
                                                    "startNodeId": "467",
                                                    "endNodeId": "511"
                                                },
                                                "511-478": {
                                                    //"id": "115",
                                                    "type": "Input",
                                                    "uom": "",
                                                    "qty": "2000.0",
                                                    "startNodeId": "478",
                                                    "endNodeId": "511"
                                                },
                                                "511-466": {
                                                    //"id": "12",
                                                    "type": "Input",
                                                    "uom": "",
                                                    "qty": "107.0",
                                                    "startNodeId": "466",
                                                    "endNodeId": "511"
                                                },
                                                "511-477": {
                                                    //"id": "43",
                                                    "type": "Input",
                                                    "uom": "",
                                                    "qty": "1.0",
                                                    "startNodeId": "477",
                                                    "endNodeId": "511"
                                                },
                                                "511-476": {
                                                    //"id": "113",
                                                    "type": "Input",
                                                    "uom": "",
                                                    "qty": "244.4",
                                                    "startNodeId": "476",
                                                    "endNodeId": "511"
                                                },
                                                "511-454": {
                                                    //"id": "105",
                                                    "type": "Input",
                                                    "uom": "",
                                                    "qty": "400.0",
                                                    "startNodeId": "454",
                                                    "endNodeId": "511"
                                                },
                                                "511-475": {
                                                    //"id": "81",
                                                    "type": "Input",
                                                    "uom": "",
                                                    "qty": "14000.0",
                                                    "startNodeId": "475",
                                                    "endNodeId": "511"
                                                },
                                                "511-464": {
                                                    //"id": "97",
                                                    "type": "Input",
                                                    "uom": "",
                                                    "qty": "400.0",
                                                    "startNodeId": "464",
                                                    "endNodeId": "511"
                                                },
                                                "511-473": {
                                                    //"id": "28",
                                                    "type": "Input",
                                                    "uom": "",
                                                    "qty": "244.4",
                                                    "startNodeId": "473",
                                                    "endNodeId": "511"
                                                },
                                                "511-472": {
                                                    //"id": "67",
                                                    "type": "Input",
                                                    "uom": "",
                                                    "qty": "488.8",
                                                    "startNodeId": "472",
                                                    "endNodeId": "511"
                                                },
                                                "511-471": {
                                                    //"id": "68",
                                                    "type": "Input",
                                                    "uom": "",
                                                    "qty": "6002.0",
                                                    "startNodeId": "471",
                                                    "endNodeId": "511"
                                                },
                                                "511-481": {
                                                    //"id": "15",
                                                    "type": "Input",
                                                    "uom": "",
                                                    "qty": "2500.0",
                                                    "startNodeId": "481",
                                                    "endNodeId": "511"
                                                },
                                                "511-480": {
                                                    //"id": "96",
                                                    "type": "Input",
                                                    "uom": "",
                                                    "qty": "6.0",
                                                    "startNodeId": "480",
                                                    "endNodeId": "511"
                                                }
                                            }
                                        }
                                    ],
                                    "relationshipMap": {
                                        "474-511": {
                                            //"id": "138",
                                            "type": "Output",
                                            "uom": "",
                                            "qty": "10277.0",
                                            "startNodeId": "511",
                                            "endNodeId": "474"
                                        }
                                    }
                                },
                                {
                                    //"id": "482",
                                    "id": "1241",
                                    "batchNo": "7306",
                                    "nodeId": "1241|7306",
                                    //"level": 4,
                                    "type": "Material",
                                    "matDesc": "Transfer System 1000mm"
                                },
                                {
                                    //"id": "486",
                                    "id": "1916",
                                    "batchNo": "4012",
                                    "nodeId": "1916|4012",
                                    //"level": 4,
                                    "type": "Material",
                                    "matDesc": "Filter Capsule, 16\""
                                },
                                {
                                    //"id": "485",
                                    "id": "1916",
                                    "batchNo": "5756",
                                    "nodeId": "1916|5756",
                                    //"level": 4,
                                    "type": "Material",
                                    "matDesc": "Filter Capsule, 16\""
                                },
                                {
                                    //"id": "483",
                                    "id": "1910",
                                    "batchNo": "6194",
                                    "nodeId": "1910|6194",
                                    //"level": 4,
                                    "type": "Material",
                                    "matDesc": "Tubing Assembly, 1/4\""
                                },
                                {
                                    //"id": "455",
                                    "id": "1339",
                                    "batchNo": "6458",
                                    "nodeId": "1339|6458",
                                    //"level": 4,
                                    "type": "Material",
                                    "matDesc": "Filter 10\", 0.2u"
                                }
                            ],
                            "relationshipMap": {
                                "512-455": {
                                    //"id": "83",
                                    "type": "Input",
                                    "uom": "",
                                    "qty": "2.0",
                                    "startNodeId": "455",
                                    "endNodeId": "512"
                                },
                                "512-487": {
                                    //"id": "41",
                                    "type": "Input",
                                    "uom": "",
                                    "qty": "5.0",
                                    "startNodeId": "487",
                                    "endNodeId": "512"
                                },
                                "512-457": {
                                    //"id": "79",
                                    "type": "Input",
                                    "uom": "",
                                    "qty": "9.0",
                                    "startNodeId": "457",
                                    "endNodeId": "512"
                                },
                                "512-483": {
                                    //"id": "74",
                                    "type": "Input",
                                    "uom": "",
                                    "qty": "2.0",
                                    "startNodeId": "483",
                                    "endNodeId": "512"
                                },
                                "512-486": {
                                    //"id": "39",
                                    "type": "Input",
                                    "uom": "",
                                    "qty": "7.0",
                                    "startNodeId": "486",
                                    "endNodeId": "512"
                                },
                                "512-474": {
                                    //"id": "116",
                                    "type": "Input",
                                    "uom": "",
                                    "qty": "10277.0",
                                    "startNodeId": "474",
                                    "endNodeId": "512"
                                },
                                "512-485": {
                                    //"id": "66",
                                    "type": "Input",
                                    "uom": "",
                                    "qty": "24.0",
                                    "startNodeId": "485",
                                    "endNodeId": "512"
                                },
                                "512-482": {
                                    //"id": "88",
                                    "type": "Input",
                                    "uom": "",
                                    "qty": "5.0",
                                    "startNodeId": "482",
                                    "endNodeId": "512"
                                }
                            }
                        }
                    ],
                    "relationshipMap": {
                        "484-512": {
                            //"id": "125",
                            "type": "Output",
                            "uom": "",
                            "qty": "10277.0",
                            "startNodeId": "512",
                            "endNodeId": "484"
                        }
                    }
                },
                {
                    //"id": "490",
                    "id": "1730",
                    "batchNo": "5260",
                    "nodeId": "1730|5260",
                    //"level": 2,
                    "type": "Material",
                    "matDesc": "SOLN,20mM SodPhos(pH7.2)"
                }
            ],
            "relationshipMap": {
                "513-484": {
                    //"id": "52",
                    "type": "Input",
                    "uom": "",
                    "qty": "10277.0",
                    "startNodeId": "484",
                    "endNodeId": "513"
                },
                "513-493": {
                    //"id": "13",
                    "type": "Input",
                    "uom": "",
                    "qty": "1.0",
                    "startNodeId": "493",
                    "endNodeId": "513"
                },
                "513-489": {
                    //"id": "5",
                    "type": "Input",
                    "uom": "",
                    "qty": "6000.0",
                    "startNodeId": "489",
                    "endNodeId": "513"
                },
                "513-488": {
                    //"id": "40",
                    "type": "Input",
                    "uom": "",
                    "qty": "1.0",
                    "startNodeId": "488",
                    "endNodeId": "513"
                },
                "513-492": {
                    //"id": "9",
                    "type": "Input",
                    "uom": "",
                    "qty": "2.0",
                    "startNodeId": "492",
                    "endNodeId": "513"
                },
                "513-491": {
                    //"id": "99",
                    "type": "Input",
                    "uom": "",
                    "qty": "-202.0",
                    "startNodeId": "491",
                    "endNodeId": "513"
                },
                "513-490": {
                    //"id": "60",
                    "type": "Input",
                    "uom": "",
                    "qty": "2800.0",
                    "startNodeId": "490",
                    "endNodeId": "513"
                }
            }
        }
    ],
    "relationshipMap": {
        "494-513": {
            //"id": "124",
            "type": "Output",
            "uom": "",
            "qty": "2355.0",
            "startNodeId": "513",
            "endNodeId": "494"
        }
    }
}



export default class Hello extends React.Component {
    state = {
        layout: 'cartesian',
        orientation: 'horizontal',
        linkType: 'diagonal',
        stepPercent: 1
    }

    constructor(props) {
        super(props)

    }

    render() {
        const {
            width,
            height,
            margin = {
                top: 30,
                left: 30,
                right: 30,
                bottom: 30
            }
        } = this.props
        let partners = []
        const nameLineHeight = 1.2
        const fontSize = 9

        const { layout, orientation, linkType, stepPercent } = this.state

        const innerWidth = width - margin.left - margin.right
        const innerHeight = height - margin.top - margin.bottom

        let origin
        let sizeWidth
        let sizeHeight

        if (layout === 'polar') {
            origin = {
                x: innerWidth / 2,
                y: innerHeight / 2
            }
            sizeWidth = 2 * Math.PI
            sizeHeight = Math.min(innerWidth, innerHeight) / 2
        } else {
            origin = { x: 0, y: 0 }
            if (orientation === 'vertical') {
                sizeWidth = innerWidth
                sizeHeight = innerHeight
            } else {
                sizeWidth = innerHeight
                sizeHeight = innerWidth
            }
        }

        let LinkComponent

        if (layout === 'polar') {
            if (linkType === 'step') {
                LinkComponent = LinkRadialStep
            } else if (linkType === 'curve') {
                LinkComponent = LinkRadialCurve
            } else if (linkType === 'line') {
                LinkComponent = LinkRadialLine
            } else {
                LinkComponent = LinkRadial
            }
        } else {
            if (orientation === 'vertical') {
                if (linkType === 'step') {
                    LinkComponent = LinkVerticalStep
                } else if (linkType === 'curve') {
                    LinkComponent = LinkVerticalCurve
                } else if (linkType === 'line') {
                    LinkComponent = LinkVerticalLine
                } else {
                    LinkComponent = LinkVertical
                }
            } else {
                if (linkType === 'step') {
                    LinkComponent = LinkHorizontalStep
                } else if (linkType === 'curve') {
                    LinkComponent = LinkHorizontalCurve
                } else if (linkType === 'line') {
                    LinkComponent = LinkHorizontalLine
                } else {
                    LinkComponent = LinkHorizontal
                }
            }
        }

        return (
            <div>
                <LegendOrdinal
                    scale={thre}
                    direction="row"
                    itemDirection="row"
                    labelMargin="0 20px 0 0"
                    shapeMargin="1px 0 0"
                />

                <svg width={width} height={height}>

                    {/* LinearGradient - lgFemale - Pink gradient */}

                    <rect width={width} height={height} rx={0} fill="#272b4d" />
                    <Group top={margin.top} left={margin.left} >
                        <Tree
                            root={hierarchy(data, d => (d.isExpanded ? null : d.children))}
                            size={[sizeWidth, sizeHeight]}
                            style={{}}
                            separation={(a, b) =>
                                (a.parent === b.parent ? 1 : 1) / a.depth
                            }
                        >
                            {data => (
                                <Group top={origin.y} left={origin.x} >
                                    {data.links().map((link, i) => {
                                        if (link.target.data.hasParnter) {
                                            partners.push(link.target)
                                        }
                                        if (link.target.data.noParent === true) {
                                            return null
                                        }

                                        return (
                                            <LinkComponent
                                                data={link}
                                                style={{ transform: 'translate(180,20)scale(0.9,0.9)' }}
                                                percent={+stepPercent}
                                                stroke="#374469"
                                                strokeWidth="1"
                                                fill="none"
                                                key={i}
                                                onClick={data => event => {
                                                    console.log(data)
                                                }}
                                            />
                                        )
                                    })}
                                    {/* Draw Partners Line */}
                                    {data.links().map((link, i) => {
                                        if (link.target.data.isPartner !== true) {
                                            return null
                                        }
                                        const nodePartnerId = link.target.data.partnerId

                                        const linkSource = partners.filter(partner => {
                                            return partner.data.id === nodePartnerId ? partner : null
                                        })

                                        link.source = linkSource[0]

                                        return link.source !== undefined ? (
                                            <LinkComponent
                                                data={link}
                                                percent={+stepPercent}
                                                stroke="#374469"
                                                strokeWidth="1"
                                                fill="none"
                                                key={i}
                                                onClick={data => event => {
                                                    console.log(data)
                                                }}
                                            />
                                        ) : null
                                    })}

                                    {data.descendants().map((node, key) => {
                                        const gender = node.data.type
                                        const isFemale = gender === 'Material' ? true : false
                                        const id = node.data.id || ''
                                        const nameLength = id.length
                                        const nameWords = id.split(/\s+/)
                                        console.log('hello', nameWords)

                                        let dataHover = node['data']
                                        let hoverText = []
                                        hoverText.push(dataHover)
                                        console.log(hoverText[0])

                                        const nameWordsLength = nameWords.length
                                        let nameWordMaxLength = nameWords[0].length > 0 ? nameWords[0].length : 0
                                        nameWords.map(word => {
                                            nameWordMaxLength =
                                                word.length > nameWordMaxLength
                                                    ? word.length
                                                    : nameWordMaxLength
                                            return []
                                        })
                                        const width =
                                            nameWordMaxLength <= 5 ? 40 : nameWordMaxLength * 7
                                        const height = nameWordsLength * 14

                                        /* id Positioning */
                                        const nameMidDyPosition =
                                            (fontSize / 20) * (nameWordsLength === 2 ? -1 : 1)
                                        let nameWordDyPosition =
                                            nameMidDyPosition -
                                            Math.ceil(nameWordsLength / 2) * nameLineHeight
                                        /* EO id Positioning */

                                        const circleRadius = nameLength <= 5 ? 12 : nameLength * 2

                                        let top
                                        let left
                                        if (layout === 'polar') {
                                            const [radialX, radialY] = pointRadial(node.x, node.y)
                                            top = radialY
                                            left = radialX
                                        } else {
                                            if (orientation === 'vertical') {
                                                top = node.y
                                                left = node.x
                                            } else {
                                                top = node.x
                                                left = node.y
                                            }
                                        }

                                        return (
                                            <Group top={top} left={left} key={key} >
                                                {node.data.isSource === true && (
                                                    <circle
                                                        className="tooltip"
                                                        r={circleRadius}
                                                        fill={
                                                            isFemale ? "url('#lgFemale')" : "url('#lgMale')"
                                                        }
                                                        onClick={() => {
                                                            node.data.isExpanded = !node.data.isExpanded
                                                            console.log(node)
                                                            this.forceUpdate()
                                                        }}
                                                    >
                                                        <title>Circle<br />
                                                            Circle<br />
                                                            Circle<br />
                                                        </title>
                                                    </circle>
                                                )}
                                                {node.data.isSource !== true && (
                                                    <rect
                                                        className="tooltip"
                                                        height={height}
                                                        width={width}
                                                        y={-height / 2}
                                                        x={-width / 2}
                                                        fill={
                                                            node.data.type == 'Material' ? node.data.children && node.data.children.length > 0 ?
                                                                '#ffffff' : '#000fff' : '#f0f0f0'
                                                        }
                                                        stroke={isFemale ? '#fffff' : '#26deb0'}
                                                        strokeWidth={1}
                                                        strokeDasharray={
                                                            !node.data.children && !node.data.hasParnter
                                                                ? '2,2'
                                                                : '0'
                                                        }
                                                        strokeOpacity={
                                                            !node.data.children && !node.data.hasParnter
                                                                ? 0.6
                                                                : 1
                                                        }
                                                        rx={
                                                            !node.data.children && !node.data.hasParnter
                                                                ? 10
                                                                : 0
                                                        }
                                                        className="node"
                                                        onClick={() => {
                                                            this.showOption(node)
                                                        }}
                                                    >
                                                        <title>Id : {hoverText[0].id}{"\n"}


                                                            {hoverText[0].type ? 'Type: ' + hoverText[0].type : " "}{"\n"}
                                                            {hoverText[0].batchNo ? 'Batch: ' + hoverText[0].batchNo : " "}{'\n'}
                                                            {hoverText[0].batchNo ? 'Material: ' + hoverText[0].matDesc : " "}{'\n'}




                                                        </title>
                                                    </rect>
                                                )}
                                                {console.log(nameWords)}
                                                {nameWords.map((word, key) => {
                                                    nameWordDyPosition += nameLineHeight
                                                    return (
                                                        <text
                                                            key={word + '_' + key}
                                                            dy={nameWordDyPosition + 'em'}
                                                            fontSize={fontSize}
                                                            fontFamily="Arial"
                                                            textAnchor={'middle'}
                                                            style={{ pointerEvents: 'none' }}
                                                            fill={
                                                                node.data.isSource === true
                                                                    ? '#71248e'
                                                                    : node.data.isPartner !== true
                                                                        ? node.children
                                                                            ? 'white'
                                                                            : '#26deb0'
                                                                        : '#000'
                                                            }
                                                        >
                                                            {word}
                                                        </text>
                                                    )
                                                })}
                                            </Group>
                                        )
                                    })}
                                </Group>
                            )
                            }
                        </Tree>
                    </Group>
                </svg>
            </div>
        )
    }
}