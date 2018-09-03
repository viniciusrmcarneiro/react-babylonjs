[![Codacy Badge](https://api.codacy.com/project/badge/Grade/e2a161decf69444c92ced98bc3c572c6)](https://www.codacy.com/app/viniciusrmcarneiro/react-babylonjs?utm_source=github.com&utm_medium=referral&utm_content=viniciusrmcarneiro/react-babylonjs&utm_campaign=badger)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/viniciusrmcarneiro/react-babylonjs/issues)
[![Coverage Status](https://coveralls.io/repos/github/viniciusrmcarneiro/react-babylonjs/badge.svg?branch=master)](https://coveralls.io/github/viniciusrmcarneiro/react-babylonjs?branch=master)
[![Build Status](https://travis-ci.org/viniciusrmcarneiro/react-babylonjs.svg)](https://travis-ci.org/viniciusrmcarneiro/react-babylonjs)
[![Dependency Status](https://david-dm.org/viniciusrmcarneiro/react-babylonjs.svg)](https://david-dm.org/viniciusrmcarneiro/react-babylonjs)
[![devDependencies Status](https://david-dm.org/viniciusrmcarneiro/react-babylonjs/dev-status.svg)](https://david-dm.org/viniciusrmcarneiro/react-babylonjs?type=dev)
[![npm version](https://badge.fury.io/js/react-babylonjs-3d.svg)](https://badge.fury.io/js/react-babylonjs-3d)
[![BrowserStack Status](https://www.browserstack.com/automate/badge.svg?badge_key=VDVTTXRFQVhSQ2l5eVRzSmp3RVA1TkorbmtZMXQwSEpEdzd6ZGZPZktMbz0tLTN1VklTbHUxdHd2Z0N2SWVaRFhQVnc9PQ==--4223762786c10927508895203f56eb9bb7e3b834)](https://www.browserstack.com/automate/public-build/VDVTTXRFQVhSQ2l5eVRzSmp3RVA1TkorbmtZMXQwSEpEdzd6ZGZPZktMbz0tLTN1VklTbHUxdHd2Z0N2SWVaRFhQVnc9PQ==--4223762786c10927508895203f56eb9bb7e3b834)
# react-babylonjs-3d

![Screenshot of the code bellow][screenshot1]

Look how easy it can be to create 3D objects using JSX syntax:
### index.js
```jsx
import React from "react";
import BABYLON from "babylonjs";
import ReactBabylonJS from "react-babylonjs-3d";

import App from "./app";

// you have to have a canvas element in you html
// getting the canvas element where to render the scene
const canvas = document.querySelector('canvas');

const renderer = ReactBabylonJS.createRenderer({ BABYLON, canvas });
renderer.render(<App />);
```

### app.js
```jsx
import React from "react";

const { elements: { styles } } = require("react-babylonjs-3d");

const ScenarioGround = () => (
  <ground
    name="ground1"
    width={2000}
    height={2000}
    subdivisions={2}
    position={[0, 0, 0]}
    actionManager={{
      OnPickTrigger: evt => console.log("ground pick=>", evt),
    }}
  >
);
```
```jsx
const skyMaterial = styles.standardMaterial({
  name: "skyboxMaterial",
  backFaceCulling: false,
  diffuseColor: [0, 0, 0],
  specularColor: [0, 0, 0],
});
```
```jsx
const Sky = ({ size }) => (
  <box
    name="skybox"
    size={size}
    infiniteDistance={true}
    material={skyMaterial}
  />
);
```
```jsx
class App extends React.Component {
  render() {
    return (
      <scene clearColor={[1, 1, 1]} ambientColor={[1, 0, 0]}>
        <freeCamera
          position={[0, 5, -16]}
          defaultTarget={[0, 0, 0]}
          attachControl={true}
        />

        <hemisphericLight
          name="light1"
          target={[0, 1, 0]}
          intensity={0.5}
        />

        <SkyNebule size={1000} />

        <GroundGrid />

        <sphere
          key="sphere-0"
          position={[3, 5, 0]}
          segments={16}
          diameter={2}
          actionManager={{
            OnPickTrigger: evt => console.log("sphere pick=>", evt),
          }}
        />

      </scene>
    );
  }
}

export default App;
```

## This package is under development and for now it doesn't offer much... keep reading and find out what it already can do and what it will do...

## compatibility
- WEBPACK
- HOT REALOD

## components

### arcRotateCamera (BABYLON.ArcRotateCamera)
##### props: (alpha beta radius target position attachControl)

### freeCamera (BABYLON.FreeCamera)
##### props: (name defaultTarget target position attachControl)

### hemisphericLight (BABYLON.HemisphericLight)
##### props: (name intensity target)

### box (BABYLONMesh.CreateBox)
##### props: (name size width height subdivisions material position)

### cylinder (arc sideOrientation )
##### props: (height diameterTop diameterBottom tessellation subdivisions sideOrientation faceUV frontUVs backUVs position rotation material) BABYLONMeshBuilder.CreateCylinder

### extrudeShape (BABYLONMeshBuilder.ExtrudeShape)
##### props: (shape path scale cap sideOrientation frontUVs backUVs invertUV material)

### ground (BABYLONMesh.CreateGround)
##### props: (name width height subdivisions position material)

### lines (BABYLONMeshBuilder.CreateLines)
##### props: (points colors color useVertexColor)

### sphere (BABYLONMesh.CreateSphere)
##### props: (name diameter infiniteDistance position material)

### scene (BABYLON.Scene)
##### props: (clearColor ambientColor)

## properties kinda style

### cubeTexture(BABYLON.CubeTexture)
#### props: url coordinatesMode

### shaderMaterial (BABYLON.ShaderMaterial)
#### props: name shaderPath attributes uniforms diffuseColor backFaceCulling width height boxSize edgeColor hue tileTex

### standardMaterial(BABYLON.StandardMaterial)
#### props: name backFaceCulling diffuseColor specularColor emissiveColor ambientColor reflectionTexture diffuseTexture

### texture(BABYLON.Texture)
#### props: url

## So far
The better way to get started is to clone this [repo](https://github.com/viniciusrmcarneiro/react-babylonjs-3d-example), it's a very simple example. Doing that you could focus on how you can compose your BABYLON components.

You can also have a look at the folder `examples` on this very repo.
To get this repo's examples running follow these steps:
```bash
git clone https://github.com/viniciusrmcarneiro/react-babylonjs.git
npm install
cd examples
npm install
npm start
```
Then open on the browser the address http://localhost:8080/.

The idea is to abstract away all the complexity required to create meshes, scenario, engine and ect for BabylonJS.

In order make it possible to have react like components this package uses [react-reconciler](https://www.npmjs.com/package/react-reconciler) and implements fiber's interface, pretty cool hein?


There are alot of things wating to be implemented. As this project is in it's very early stage, some very simple things are still to be implemented. So you do need any feature, just open an issue on github.

Don't be shy, if you want to help, just create a pull request.


As you can see there are a lot of missing components and properties, also there are some hard-coded properties as well.

[![https://nodei.co/npm/react-babylonjs-3d.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/react-babylonjs-3d.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/react-babylonjs-3d)

[![Node version](https://img.shields.io/node/v/react-babylonjs-3d.svg?style=flat)](https://github.com/viniciusrmcarneiro/react-babylonjs)
[![HitCount](http://hits.dwyl.com/viniciusrmcarneiro/react-babylonjs.svg)](http://hits.dwyl.com/viniciusrmcarneiro/react-babylonjs)

[screenshot1]: https://github.com/viniciusrmcarneiro/react-babylonjs/raw/master/docs/images/screenshot.png "Sky, Ground and a Sphere"
