import React from "react";
import { NeoGraph } from "./NeoGraph";
import { Group } from '@vx/group';
import { Tree, hierarchy } from '@vx/hierarchy';
import { HierarchyPointNode } from '@vx/hierarchy/lib/types';
import { LinkHorizontal } from '@vx/shape';
import { LinearGradient } from '@vx/gradient';
import Hello from './New'
import { Sigma, RandomizeNodePositions, RelativeSize } from 'react-sigma';
let myGraph = {
    "nodes": [
        {
            "id": "n0",
            "label": "A node",
            "label": 'Mihir',
            "x": 0,
            "y": 0,
            "size": 3
        },
        {
            "id": "n1",
            "label": "Another node",
            "x": 3,
            "y": 1,
            "size": 2
        },
        {
            "id": "n2",
            "label": "And a last one",
            "x": 1,
            "y": 3,
            "size": 1
        }
    ],
    "edges": [
        {
            "id": "e0",
            "source": "n0",
            "target": "n1"
        },
        {
            "id": "e1",
            "source": "n1",
            "target": "n2"
        },
        {
            "id": "e2",
            "source": "n2",
            "target": "n0"
        }
    ]
}

const NEO4J_URI = "bolt://localhost:7687";
const NEO4J_USER = "neo4j";
const NEO4J_PASSWORD = "bagga";
const rootElement = document.querySelector('#root')
// const Map = ReactMapboxGl({
//     accessToken:
//         'pk.eyJ1IjoibWloaXJiYWdnYSIsImEiOiJja3FqM3N3dHQzY3lkMnFtdmFvbWR2OTg1In0.IFe2lzFnB16-I8d44zjOlA'
// });
const Root = hierarchy({
    name: 'root',
    children: [
        { name: 'child #1' },
        {
            name: 'child #2',
            children: [{ name: 'grandchild #1' }, { name: 'grandchild #2' }, { name: 'grandchild #3' }],
        },
    ],
});
const App = () => {
    return (
        <div className="App" style={{ fontFamily: "Quicksand" }}>

            {/* <Sigma graph={myGraph} settings={{ drawEdges: true, clone: false }}>
                <RelativeSize initialSize={15} />
                <RandomizeNodePositions />
            </Sigma> */}
            <Hello width='1350' height='1500' />
            {/* <NeoGraph
                width={1350}
                height={500}
                containerId={"id1"}
                neo4jUri={NEO4J_URI}
                neo4jUser={NEO4J_USER}
                neo4jPassword={NEO4J_PASSWORD}
                backgroundColor={"#808080"}
            /> */}
            {/* <Map
                style="mapbox://styles/mapbox/streets-v9"
                containerStyle={{
                    height: '100vh',
                    width: '100vw'
                }}
            >
                <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                    <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
                </Layer>
            </Map>; */}
        </div>
    );
};

export default App;
