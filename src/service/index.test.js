import { db, joinQuestionnaire, createQuestionnaire, submitQuestionnaire } from './index'
describe('index', () => {
    it('should export db', async () => {
        expect(db).toBeTruthy()
    })

    it('should export joinQuestionnaire', async () => {
        expect(joinQuestionnaire).toBeTruthy()
    })
    it('should export createQuestionnaire', async () => {
        expect(createQuestionnaire).toBeTruthy()
    })
    it('should export createQuestionnaire', async () => {
        expect(submitQuestionnaire).toBeTruthy()
    })
})