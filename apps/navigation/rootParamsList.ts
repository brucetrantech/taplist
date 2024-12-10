import type {
    NativeStackScreenProps,
} from '@react-navigation/native-stack';

export type RootStackParamsList = {
    newTask?: object;
    todoList?: object;
};

/**** Navigation props for the screens ****/
export type NewTaskScreenProps =
    NativeStackScreenProps<
        RootStackParamsList,
        'newTask'
    >;

export type TodoListScreenProps =
    NativeStackScreenProps<
        RootStackParamsList,
        'todoList'
    >;
