
import randomSentence from 'random-sentence';

export const generateGreeting = () => ({
    type: 'SET_GREETING',
    greeting: randomSentence()
});
