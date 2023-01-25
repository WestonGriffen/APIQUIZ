const username = document.querySelector('#username')
const saveScoreBtn = document.querySelector('#saveScoreBtn')
const finalScore = document.querySelector('#finalScore')
const finalTime = document.querySelector('#finalTime')
const mostRecentScore = localStorage.getItem('mostRecentScore')
const mostRecentTime = localStorage.getItem('mostRecentTime')

const highScores = JSON.parse(localStorage.getItem('highScores')) || []
const highTime = JSON.parse(localStorage.getItem('highTime')) || []

const MAX_HIGH_SCORES = 5
const MAX_HIGH_TIMES = 5

finalScore.innerText = mostRecentScore
finalTime.innerText = mostRecentTime

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value
})

saveHighScore = e => {
    e.preventDefault()

    const score = {
        score: mostRecentScore,
        name: username.value
    }

    highScores.push(score)

    highScores.sort((a,b) => {
        return b.score - a.score
    })

    highScores.splice(5)

    localStorage.setItem('highScores', JSON.stringify(highScores))
    window.location.assign('index.html')
    
    
}

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value
})

saveHighTime = e => {
    e.preventDefault()

    const score = {
        timescore: mostRecentTime,
        name: username.value
    }

    highTime.push(timescore)

    highTime.sort((c,d) => {
        return c.timescore - d.timescore
    })

    highTime.splice(5)

    localStorage.setItem('highTime', JSON.stringify(highTime))
    window.location.assign('index.html')
    
    
}