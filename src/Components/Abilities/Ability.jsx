import React from 'react'
import './Ability.css'
import { FaJava, FaHtml5, FaPython, FaCss3, FaReact, FaJs, FaRust } from "react-icons/fa";
const Ability = ({rust,
    setRust,
    js,
    setJs,
    react,
    setReact,
    Html5,
    setHtml5,
    Python,
    setPython,
    Css3,
    setCss3,
    java,
    setJava}) => {

    function handleChange(item, target) {
        item(target.checked)
    }
    React.useEffect(() => {
        if (window.localStorage.getItem("js") !== null) {
            setJs(JSON.parse(window.localStorage.getItem("js")))
        }
        if (window.localStorage.getItem("react") !== null) {
            setReact(JSON.parse(window.localStorage.getItem("react")))
        }
        if (window.localStorage.getItem("Html5") !== null) {
            setHtml5(JSON.parse(window.localStorage.getItem("Html5")))
        }
        if (window.localStorage.getItem("Python") !== null) {
            setPython(JSON.parse(window.localStorage.getItem("Python")))
        }
        if (window.localStorage.getItem("Css3") !== null) {
            setCss3(JSON.parse(window.localStorage.getItem("Css3")))
        }
        if (window.localStorage.getItem("java") !== null) {
            setJava(JSON.parse(window.localStorage.getItem("java")))
        }
        if (window.localStorage.getItem("rust") !== null) {
            setRust(JSON.parse(window.localStorage.getItem("rust")))
        }
    }, [setJs,setRust,setJava,setCss3,setPython,setHtml5,setReact])
    React.useEffect(() => {
    window.localStorage.setItem("js", js);
        window.localStorage.setItem("react", react);
        window.localStorage.setItem("Html5", Html5);
        window.localStorage.setItem("Python", Python);
        window.localStorage.setItem("Css3", Css3);
        window.localStorage.setItem("java", java);
        window.localStorage.setItem("rust", rust);
    },[js,react,Html5,rust,java,Css3,Python])
    return (
        <form>
            <label>
                <input
                    type='checkbox'
                    value='termos'
                    checked={Html5}
                    onChange={(e) => handleChange(setHtml5, e.target)}
                />
                <FaHtml5 size={30} />
            </label>
            <label>
                <input
                    type='checkbox'
                    value='termos'
                    checked={Css3}
                    onChange={(e) => handleChange(setCss3, e.target)}
                />
                <FaCss3 size={30} />
            </label>
            <label>
                <input
                    type='checkbox'
                    value='termos'
                    checked={js}
                    onChange={(e) => handleChange(setJs, e.target)}
                />
                <FaJs size={30} />
            </label>
            <label>
                <input
                    type='checkbox'
                    value='termos'
                    checked={react}
                    onChange={(e) => handleChange(setReact, e.target)}
                />
                <FaReact size={30} />
            </label>
            <label>
                <input
                    type='checkbox'
                    value='termos'
                    checked={Python}
                    onChange={(e) => handleChange(setPython, e.target)}
                />
                <FaPython size={30} />
            </label>
            <label>
                <input
                    type='checkbox'
                    value='termos'
                    checked={java}
                    onChange={(e) => handleChange(setJava, e.target)}
                />
                <FaJava size={30} />
            </label>
            <label>
                <input
                    type='checkbox'
                    value='termos'
                    checked={rust}
                    onChange={(e) => handleChange(setRust, e.target)}
                />
                <FaRust size={30} />
            </label>
        </form>
    )
}
export default Ability