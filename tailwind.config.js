/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      screens:{
        md:'420px',
        sm:'768px',
        lg:'976px',
        xl:'1140px'
      },

      colors:{
        veryDarkBlue:'#0c1825',
        gray:'#ddd',
        lightBlue:'#0d60d8',
        white:'#fff',
        purple:'#7913e5',
        paragraphColor:'#353535',
        grayBg:'#f9f9f9',
        lightPurple:'#f7f0ff',
        lightGray:'rgba(221, 221, 221,.3)'

      }, 

      width:{
        'xl':'2rem',
        '2xl':'20%',
        '3xl':'30%',
        '4xl':'15%',
        '6xl':'60%',
        '5xl':'50%',
        '7xl':'54%',
        '8xl':'80%',
        '9xl':'90%',
        '10xl':'100%',
        '11xl':'40%',
        '12xl':'250px',
        '13xl':'230px',
        '14xl':'70%',
        '15xl':'50px'
      },
    
      height:{
        'xl':'3px',
        '2xl':'400px',
        '3xl':'100%',
        '4xl':'80px',
        '5xl':'75vh',
        '6xl':'50px'
      },
      padding:{
        'xl':'1rem',
        '2xl':'1.5rem',
        '3xl':'2rem',
        '4xl':'2.5rem',
        '5xl':'.5rem',
        '6xl':'5rem',
        '7xl':'7rem',
        '8xl':'3rem',
        '9xl':'13rem',
        '10xl':'10rem',
        '11xl':'11rem'
      },
      borderRadius:{
        'xl':'2px',
        '2xl':'5px',
        '3xl':'10px',
        '4xl':'20px',
        '5xl':'50%'
      },
      fontWeight:{
        'xl':'400',
        '2xl':'500',
        '4xl':'600',
        '3xl':'700'
      },
      fontSize:{
        'xl':'1.3rem',
        '2xl':'1.5rem',
        '3xl':'28px',
        '4xl':'15.5px',
        '5xl':'45px',
        '6xl':'35px',
        '7xl':'12.82px',
        '8xl':'55px',
        '9xl':'16.5px',
        '10xl':'41px',
        '11xl':'65px',
        '12xl':'38px',
        '13xl':'51px',
        '14xl':'20px'
      },
      lineHeight:{
        'xl':'27.2px',
        '3xl':'36px',
        '4xl':'72px',
        '5xl':'57px',
        '6xl':'82.42px',
        '7xl':'48.08px',
        '8xl':'64.1px',
        '9xl':'30px'
      }
    },
  },
  plugins: [],
}
