import React from "react";
import { TagCloud } from 'react-tagcloud'

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


const data = [
    { value: 'JavaScript', count: 38 },
    { value: 'React', count: 30 },
    { value: 'Nodejs', count: 28 },
    { value: 'Express.js', count: 25 },
    { value: 'HTML5', count: 33 },
    { value: 'MongoDB', count: 18 },
    { value: 'CSS3', count: 20 },
]

const primaryColor = [120, 194, 173];
const secondaryColor = [243, 150, 154];

const colorPallete = [
        primaryColor,
        primaryColor,
        primaryColor,
        primaryColor,
        secondaryColor,
        secondaryColor,
        secondaryColor,
        [getRandomInt(255), getRandomInt(255), getRandomInt(255)],
        [getRandomInt(255), getRandomInt(255), getRandomInt(255)],
        [getRandomInt(255), getRandomInt(255), getRandomInt(255)],
        [getRandomInt(255), getRandomInt(255), getRandomInt(255)],
        [getRandomInt(255), getRandomInt(255), getRandomInt(255)],
        [getRandomInt(255), getRandomInt(255), getRandomInt(255)],
]

const baseClass = {
    scale: 1,
    // rotate: "45deg",
    // translate: "-50%",
    color: false
}
export function ValuesCloud({words}) {
    return (
        <p className={"w-100 d-flex"}
            style={{
                // position: "relative",
                height: "400px",
                justifyContent: "center",
                alignContent: "center",
                padding: "5%",
            }}
        >
            {
                words.map(word => {
                    let color = colorPallete[Math.floor(Math.random() * colorPallete.length)];
                    let scale = word.count / 10 / Math.random();
                    let height = getRandomInt(40);
                    let width = getRandomInt(100);
                    return (
                        <span  key={word.id}
                            style={{
                                "color": `rgb(${color})`,
                                "scale": scale > 10 ? 10 : `${scale}`,
                                // "transform": `scale(${scale})`,
                                // width: `${width}px`,
                                height: `${height}px`,
                                position: 'relative',
                                padding: `${height}px `
                        }}>
                             {word.value}
                        </span>
                    )
                })
            }
        </p>
        // <TagCloud
        //     minSize={15}
        //     maxSize={45}
        //     tags={words}
        //     shuffle={true}
        //     colorOptions={true}
        //     randomSeed={4}
        //     onClick={tag => alert(`'${tag.value}' was selected!`)}
        // />
    )
}
