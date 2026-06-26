import React from 'react'
// 이미지를 불러오는 것을 intro_img로 지정
import intro_img from '../assets/img/intro_img.png'

const introText={
    title:"port developer",
    desc:["talent is","found at the end of the","effort"],
}
const Intro = () => {
    return (
        <section id='intro'>
            <div className="intro_inner">
                <h2 className='intro_title'>{introText.title}</h2>
                <article className='intro_lines' aria-hidden="true">
                    {/* aria-hidden="true" : 리더기에서 읽어주지 않게 막아주는 명령 */}
                    <span className='line'></span>
                    <span className='line'></span>
                    <span className='line'></span>
                    <span className='line'></span>
                    <span className='line'></span>
                    <span className='line'></span>
                    <span className='line'></span>
                </article>
                <article className='intro_text'>
                    <div className="text">
                        <div>{introText.desc[0]}</div>
                        <div>{introText.desc[1]}</div>
                        <div>{introText.desc[2]}</div>
                    </div>
                    <div className="img">
                        <img src={intro_img} alt="인트로 이미지" />
                    </div>
                </article>
                <article className='intro_lines bottom' aria-hidden="true">
                    {/* aria-hidden="true" : 리더기에서 읽어주지 않게 막아주는 명령 */}
                    <span className='line'></span>
                    <span className='line'></span>
                    <span className='line'></span>
                    <span className='line'></span>
                    <span className='line'></span>
                    <span className='line'></span>
                    <span className='line'></span>
                </article>
            </div>
        </section>
    )
}

export default Intro
