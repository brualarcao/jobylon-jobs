import { IJob } from '../models/models';

export const sortBy = (array: IJob[]) => {
    return array.sort((a, b) => {
        const expOrder = ['Entry level', 'Mid level', 'Experienced'];

        const aExpIndex = expOrder.indexOf(a.experience);
        const bExpIndex = expOrder.indexOf(b.experience);

        return aExpIndex - bExpIndex;
    })
}