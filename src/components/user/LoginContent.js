import { useEffect, useState } from 'react'
import anh1 from '../../assets/images/anh1.jpeg'
import anh2 from '../../assets/images/anh2.jpeg'
import anh3 from '../../assets/images/anh3.jpeg'
import anh4 from '../../assets/images/anh4.jpeg'
import anh5 from '../../assets/images/anh5.jpeg'


import './loginContent.scss'

const LoginContent = () => {
    const [imgMargin, setImgMargin] = useState(0)

    const getOpacity = (margin) => {
        if (imgMargin === margin)
            return 1
        else
            return 0.4
    }


    useEffect(() => {
        var flag = false
        const myIerveral = setInterval(() =>
            setImgMargin((prev) => {
                if (prev === -80)
                    flag = true
                if (prev === 0)
                    flag = false

                if (!flag) {
                    return prev - 20
                }
                else
                    return prev + 20

            }), 3000)
        return () => {
            clearInterval(myIerveral)
        }
    }, [])


    return (
        <>
            <h1 className='title-slideShow'>Bệnh viện đa khoa trung ương</h1>
            <div className="slideShow-Container">
                <div className='slides'>
                    <div className="mySlide" style={{ "marginLeft": `${imgMargin}%` }}>
                        <img src={anh1} alt="error" />
                    </div>
                    <div className="mySlide">
                        <img src={anh2} alt="error" />
                    </div>
                    <div className="mySlide">
                        <img src={anh3} alt="error" />
                    </div>
                    <div className="mySlide">
                        <img src={anh4} alt="error" />
                    </div>
                    <div className="mySlide">
                        <img src={anh5} alt="error" />
                    </div>
                </div>

                <div className='slides-gallery'>
                    <div className="mySlide-gallery" >
                        <img src={anh1} alt="error" style={{ "opacity": getOpacity(0) }}  onClick={()=> setImgMargin(0)}/>
                    </div>
                    <div className="mySlide-gallery">
                        <img src={anh2} alt="error" style={{ "opacity": getOpacity(-20) }} onClick={() => setImgMargin(-20)}/>
                    </div>
                    <div className="mySlide-gallery">
                        <img src={anh3} alt="error" style={{ "opacity": getOpacity(-40) }} onClick={() => setImgMargin(-40)}/>
                    </div>
                    <div className="mySlide-gallery">
                        <img src={anh4} alt="error" style={{ "opacity": getOpacity(-60) }} onClick={() => setImgMargin(-60)}/>
                    </div>
                    <div className="mySlide-gallery">
                        <img src={anh5} alt="error" style={{ "opacity": getOpacity(-80) }} onClick={() => setImgMargin(-80)}/>
                    </div>
                </div>
            </div>
        </>


    )
}
export default LoginContent