const setters = require("../helpers/property-setters");
const transformers = require("../helpers/property-transformers");

const createComponent = ({ BABYLON, scene }, props) => {
    const component = BABYLON.Mesh.CreateGround(
        props.name,
        props.width,
        props.height,
        props.subdivisions,
        scene
    );
    return component;
};

const props = {
    width: { newComponentRequired: true },
    height: { newComponentRequired: true },
    subdivisions: { newComponentRequired: true },
    material: {
        setter: setters.propertyFromComponent("material"),
        transformer: transformers.component,
    },

    position: {
        setter: setters.property("position"),
        transformer: transformers.vector3,
    },
};

const ground = { type: "ground", createComponent, props };
module.exports = ground;