'use client';


import { Todo } from '@prisma/client';
import React from 'react';
import { TodoItem } from './TodoItem';

import { toggleTodo } from '@/todos/actions/todo-actions';

// import * as todosApi from '@/todos/helpers/todos';
// import { useRouter } from 'next/navigation';
import { TodoItemExperimental } from './TodoItemExperimental';

interface Props {
    todos?: Todo[];
}

export const TodosGrid = ({ todos = [] }: Props) => {

    // const router = useRouter();

    // const toggleTodo = async (id: string, complete: boolean) => {
    //     const updatedTodo = await todosApi.updateTodo( id, complete );
    //     console.log({updatedTodo});
    //     router.refresh();
    // }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {
                todos.map( todo => (

                    // <TodoItem key={ todo.id } todo={ todo } toggleTodo={ toggleTodo } />
                    <TodoItemExperimental key={ todo.id } todo={ todo } toggleTodo={ toggleTodo } />
                ))
            }

        </div>
    )
}
