import { Task } from '@/modules/tasks/models';
import generateUniqueId from 'generate-unique-id';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TASK_KEY } from '@/commons/constants';

interface ITaskProviders {
    list: () => Promise<Array<Task>>;
    add: (data: Task) => Promise<Task>;
    update: (data: Task) => Promise<boolean>;
    delete: (uuid: string) => Promise<boolean>;
}

/** Assume that we work with local database **/
class LocalStorageTaskProvider implements ITaskProviders {
    async list (): Promise<Array<Task>> {
        try {
            const results = await AsyncStorage.getItem(TASK_KEY) || '[]';
            return JSON.parse(results);
        } catch (err) {
            console.error(err);
            return [];
        }
    }

    async add (data: Task): Promise<Task> {
        try {
            const newTask: Task = {
                ...data,
                uuid: generateUniqueId(),
            };
            const tasks = await this.list();
            const updates = [newTask, ...tasks];
            await AsyncStorage.setItem(TASK_KEY, JSON.stringify(updates));
            return newTask;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }

    async update (data: Task): Promise<boolean> {
        try {
            const tasks = await this.list();
            const updates = tasks.map(item => item.uuid === data.uuid ? data : item);
            await AsyncStorage.setItem(TASK_KEY, JSON.stringify(updates));
            return true;
        } catch (err) {
            console.error(err);
            return false;
        }
    }

    async delete (uuid: string): Promise<boolean> {
        try {
            const tasks = await this.list();
            const updates = tasks.filter(item => item.uuid !== uuid);
            await AsyncStorage.setItem(TASK_KEY, JSON.stringify(updates));
            return true;
        } catch (err) {
            console.error(err);
            return false;
        }
    }
}

/** Another case: request with API **/
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class APITaskProvider implements ITaskProviders {
    async list (): Promise<Array<Task>> {
        return await Promise.resolve([]);
    }
    async add (_data: Task): Promise<Task> {
        return await Promise.resolve({
            ..._data,
            uuid: generateUniqueId(),
        });
    }
    async update (_data: Task): Promise<boolean> {
        return await Promise.resolve(true);
    }
    async delete (_uuid: string): Promise<boolean> {
        return await Promise.resolve(true);
    }

}


export default new LocalStorageTaskProvider();
