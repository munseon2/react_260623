import React from 'react'
const skillText=[
    {
        num:"1.",
        title:"꿈을 설계하고 디자인하다.",
        desc:"나는 공간을 만드는 것을 좋아한다. 어렸을 때부터 나만의 공간을 만드는 것을 좋아했고, 나만의 다락방을 좋아했다. 단 한 사람이라도 내가 만든 공간속에서 영감을 받거나 마음이 움직였으면 좋겠다. 나만의 공간을 마음껏 만들 수 있다는 것은 코딩의 엄청난 매력인 것 같다. 그 한구석에 나만의 꿈을 설계하고 개발을 하며 앞으로도 살고 싶다.",
    },{
       num:"2.",
        title:"열심히 할 수록 기회는 따라온다.",
        desc:"나는 공간을 만드는 것을 좋아한다. 어렸을 때부터 나만의 공간을 만드는 것을 좋아했고, 나만의 다락방을 좋아했다. 단 한 사람이라도 내가 만든 공간속에서 영감을 받거나 마음이 움직였으면 좋겠다. 나만의 공간을 마음껏 만들 수 있다는 것은 코딩의 엄청난 매력인 것 같다. 그 한구석에 나만의 꿈을 설계하고 개발을 하며 앞으로도 살고 싶다.", 
    },{
        num:"3.",
        title:"나에게 정직하다.",
        desc:"나는 공간을 만드는 것을 좋아한다. 어렸을 때부터 나만의 공간을 만드는 것을 좋아했고, 나만의 다락방을 좋아했다. 단 한 사람이라도 내가 만든 공간속에서 영감을 받거나 마음이 움직였으면 좋겠다. 나만의 공간을 마음껏 만들 수 있다는 것은 코딩의 엄청난 매력인 것 같다. 그 한구석에 나만의 꿈을 설계하고 개발을 하며 앞으로도 살고 싶다.",
    },
]
const Skill = () => {
    return (
        <section id='skill'>
            <div className="skill_inner">
                <h2 className='skill_title'>Challenge <em>나의 도전</em></h2>
                <article className='desc'>
                    {
                        skillText.map((skill,key)=>(
                        <div key={key}>
                        <span>{key+1}.</span>
                        <h3>{skill.title}</h3>
                        <p>{skill.desc}</p>
                        </div>
                        ))                        
                    }
                  
                       
                </article>
            </div>
        </section>
    )
}

export default Skill
