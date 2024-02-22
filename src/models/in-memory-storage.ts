import { defaultJSON, ISurveyDefinition, survey1Json, survey1Results } from "./survey";

const surveys: Array<ISurveyDefinition> = [ survey1Json ];

const results: { [index: string]: Array<any> } = {
    '1': survey1Results,
};

let nextId = 3;

export function getSurveys() {
    return ([] as Array<ISurveyDefinition>).concat(surveys);
}

export function createSurvey() {
    let newSurvey = JSON.parse(JSON.stringify(defaultJSON));
    newSurvey.id = '' + nextId++
    newSurvey.name += ' ' + newSurvey.id;
    surveys.push(newSurvey);
    return newSurvey;
}

export function getSurvey(id: string) {
    return surveys.filter(s => s.id === id)[0];
}

export function removeSurvey(id: string) {
    const survey = surveys.filter(s => s.id === id)[0];
    const index = surveys.indexOf(survey);
    if(index >= 0) {
        surveys.splice(index, 1);
    }
}

export function updateSurvey(id: string, json: any) {
    const survey = surveys.filter(s => s.id === id)[0];
    survey.json = json;
}

export function postResult(id: string, json: any) {
    if(!Array.isArray(results[id])) {
        results[id] = [];
    }
    results[id].push(json);
}

export function getResults(id: string) {
    return results[id] || [];
}
