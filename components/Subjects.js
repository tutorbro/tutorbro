import React from 'react'
import { logEvent } from '../utils/analytics'

const subjects = [
  {
    name: 'Mechanical Engineering',
    icon: 'mech',
    lessons: [
      'Statics',
      'Dynamics',
      'Mechanics of Material',
      'Fluid Mechanics',
      'Strength of Material',
      'Thermodynamics',
      'Integration',
      'Heat Transfer',
      'Machine Design'
    ]
  },
  {
    name: 'Mathematics',
    icon: 'math',
    lessons: [
      'Algebra',
      'Calculus I',
      'Calculus II',
      'Calculus III',
      'Deferential Equation',
      'Linear Algebra',
      'Trigonometry',
      'Applied mathematics',
      'Geometry'
    ]
  },
  {
    name: 'Computer Science',
    icon: 'cse',
    lessons: [
      'C, C++ , PHP Programming',
      'Web Designing and Development',
      'Java Programming',
      'Database Management (Oracle, SQL)',
      'MS Access',
      'Data Structure',
      'Computer Networks',
      'Unix/ Linux'
    ]
  },
  {
    name: 'Electrical Engineering',
    icon: 'ece',
    lessons: [
      'Electric Circuits',
      'Power Electronics',
      'Signal Theory',
      'Microelectronics',
      'Introduction to Power Systems',
      'Digital Signal Processing',
      'Principle of telecommunication',
      'Electrical Machines',
      'Measurements'
    ]
  },
  { name: 'Physics', icon: 'physics', lessons: [ 'Physics-I', 'Physics-II' ] },
  {
    name: 'Chemistry',
    icon: 'chemistry',
    lessons: [
      'General Chemistry',
      'Chemistry I',
      'Chemistry II',
      'Organic Chemistry'
    ]
  },
  {
    name: 'Statistics',
    icon: 'statistics',
    lessons: [ 'Business Statistics', 'Elementary Statistics' ]
  },
  {
    name: 'Other Subjects',
    icon: 'others',
    lessons: [
      'Biology',
      'Civil Engineering',
      'Electronics Engineering',
      'Essay Writing'
    ]
  }
]
export default class Subjects extends React.Component {
  done () {
    logEvent('CTA', 'Get Quote btn is clicked')
    global.msg.show('Fill this form we will send you a quote', {
      type: 'info'
    })
    global.firstInput.focus()
  }
  render () {
    return (
      <section className='subjects' id='subjects'>
        <div className='subjects__container'>
          <div className='subjects__title'>
            <div className='title__text'>Our Expertise</div>
          </div>
          <ul className='subjects__list'>
            {subjects.map(subject => {
              return (
                <li key={subject.name} className='subject'>
                  <div className='subject__title'>
                    <div className='svg'>
                      <img
                        src={
                            `https://res.cloudinary.com/tutorbro/image/upload/v1486345678/${subject.icon}.svg`
                          }
                        alt='icon'
                        />
                    </div>
                    <div className='text'>{subject.name}</div>
                  </div>
                  <ul className='subject__lessons'>
                    {subject.lessons.map(lesson => (
                      <li key={lesson} className='subject__lesson'>
                        {lesson}
                      </li>
                        ))}
                  </ul>
                  <div className='subject__cta'>
                    <div className='btns'>
                      <a
                        onClick={
                            () => logEvent('CTA', 'Call Us btn is clicked')
                          }
                        href='tel:+91-9958156558'
                        className='btn show-s'
                        >
                          Call Us
                        </a>
                      <a onClick={this.done.bind(this)} className='btn'>
                          Get A Quote
                        </a>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
        <style jsx>
          {`
            .subjects {
              background: #eee;
            }
            .subjects__container {
              max-width: 1280px;
              margin: 0 auto;
              padding: 50px 20px;
            }
            .subjects__title {
              color: #607d8b;
              text-align: center;
              font-weight: bold;
              padding: 5px;
              font-size: 32px;
              margin-bottom: 15px;
            }
            .title__text {
              display: inline-block;
              text-transform: uppercase;
            }
            .subjects__list {
              margin: 0;
              padding: 0;
              list-style-type: none;
              display: flex;
              flex-wrap: wrap;
            }
            .subject {
              width: calc(25% - 40px);
              margin: 20px;
              background: #fff;
              box-shadow: 0 24px 32px 0 rgba(60,71,81,.1);
              border-radius: 8px;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              transform: scale(1);
              transition: box-shadow .35s ease-out, transform .3s ease-out, opacity .2s ease-out;
              will-change: transform;
              cursor: pointer;
            }
            .subject:hover {
              box-shadow: 0 15px 20px rgba(0, 0, 0, 0.2);
              transform: translate(0, -5px);
            }
            .subject__title {
              display: flex;
              align-items: center;
              justify-content: center;
              flex-direction: column;
              background: #fafafa;
              padding: 10px;
              border-radius: 8px 8px 0 0;
            }
            .svg {
              width: 100px;
              height: 100px;
              border-radius: 50%;
              background: #ccc;
            }
            .svg img {
              width: 100%;
            }
            .text {
              font-size: 14px;
              font-weight: bold;
              text-align: center;
              text-transform: uppercase;
              margin-top: 10px;
            }
            .subject__lessons {
              list-style-type: circle;
              margin: 20px 0;
            }
            .btns {
              display: flex;
              flex-direction: column;
              padding: 0 30px;
              padding-bottom: 10px;
            }
            .btn {
              -webkit-appearance: none;
              cursor: pointer;
              background: #2bc186;
              border: none;
              outline: none;
              padding: 6px 24px;
              border-radius: 17px;
              color: #fff;
              line-height: 24px;
              font-weight: 600;
              font-size: 14px;
              transition: all 0.2s ease;
              margin: 10px 0;
              text-align: center;
              text-decoration: none;
            }
            .btn:hover {
              background: teal;
            }
            .show-s {
              display: none;
            }
            @media (max-width: 1200px) {
              .subjects__list {
                max-width: 800px;
                margin: 0 auto;
              }
              .subject {
                width: calc(50% - 80px);
                margin: 30px 40px;
              }
            }
            @media (max-width: 800px) {
              .subjects {
                background: #fff;
              }
              .subject {
                width: calc(320px - 20px);
                margin: 30px auto;
              }
            }
            @media (max-width: 480px) {
              .show-s {
                display: block;
              }
              .subject:hover {
                transform: scale(1);
              }
              .subject {
                box-shadow: 0 2px 4px 0 rgba(60,71,81,.1);
              }
            }
          `}
        </style>
      </section>
    )
  }
}
