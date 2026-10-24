import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\AutorController::index
* @see app/Http/Controllers/AutorController.php:14
* @route '/autores'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/autores',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AutorController::index
* @see app/Http/Controllers/AutorController.php:14
* @route '/autores'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AutorController::index
* @see app/Http/Controllers/AutorController.php:14
* @route '/autores'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AutorController::index
* @see app/Http/Controllers/AutorController.php:14
* @route '/autores'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AutorController::index
* @see app/Http/Controllers/AutorController.php:14
* @route '/autores'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AutorController::index
* @see app/Http/Controllers/AutorController.php:14
* @route '/autores'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AutorController::index
* @see app/Http/Controllers/AutorController.php:14
* @route '/autores'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \App\Http\Controllers\AutorController::create
* @see app/Http/Controllers/AutorController.php:26
* @route '/autores/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/autores/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AutorController::create
* @see app/Http/Controllers/AutorController.php:26
* @route '/autores/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AutorController::create
* @see app/Http/Controllers/AutorController.php:26
* @route '/autores/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AutorController::create
* @see app/Http/Controllers/AutorController.php:26
* @route '/autores/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AutorController::create
* @see app/Http/Controllers/AutorController.php:26
* @route '/autores/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AutorController::create
* @see app/Http/Controllers/AutorController.php:26
* @route '/autores/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AutorController::create
* @see app/Http/Controllers/AutorController.php:26
* @route '/autores/create'
*/
createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

create.form = createForm

/**
* @see \App\Http\Controllers\AutorController::store
* @see app/Http/Controllers/AutorController.php:31
* @route '/autores'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/autores',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AutorController::store
* @see app/Http/Controllers/AutorController.php:31
* @route '/autores'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AutorController::store
* @see app/Http/Controllers/AutorController.php:31
* @route '/autores'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AutorController::store
* @see app/Http/Controllers/AutorController.php:31
* @route '/autores'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AutorController::store
* @see app/Http/Controllers/AutorController.php:31
* @route '/autores'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\AutorController::show
* @see app/Http/Controllers/AutorController.php:43
* @route '/autores/{autor}'
*/
export const show = (args: { autor: number | { codau: number } } | [autor: number | { codau: number } ] | number | { codau: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/autores/{autor}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AutorController::show
* @see app/Http/Controllers/AutorController.php:43
* @route '/autores/{autor}'
*/
show.url = (args: { autor: number | { codau: number } } | [autor: number | { codau: number } ] | number | { codau: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { autor: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'codau' in args) {
        args = { autor: args.codau }
    }

    if (Array.isArray(args)) {
        args = {
            autor: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        autor: typeof args.autor === 'object'
        ? args.autor.codau
        : args.autor,
    }

    return show.definition.url
            .replace('{autor}', parsedArgs.autor.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AutorController::show
* @see app/Http/Controllers/AutorController.php:43
* @route '/autores/{autor}'
*/
show.get = (args: { autor: number | { codau: number } } | [autor: number | { codau: number } ] | number | { codau: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AutorController::show
* @see app/Http/Controllers/AutorController.php:43
* @route '/autores/{autor}'
*/
show.head = (args: { autor: number | { codau: number } } | [autor: number | { codau: number } ] | number | { codau: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AutorController::show
* @see app/Http/Controllers/AutorController.php:43
* @route '/autores/{autor}'
*/
const showForm = (args: { autor: number | { codau: number } } | [autor: number | { codau: number } ] | number | { codau: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AutorController::show
* @see app/Http/Controllers/AutorController.php:43
* @route '/autores/{autor}'
*/
showForm.get = (args: { autor: number | { codau: number } } | [autor: number | { codau: number } ] | number | { codau: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AutorController::show
* @see app/Http/Controllers/AutorController.php:43
* @route '/autores/{autor}'
*/
showForm.head = (args: { autor: number | { codau: number } } | [autor: number | { codau: number } ] | number | { codau: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

/**
* @see \App\Http\Controllers\AutorController::edit
* @see app/Http/Controllers/AutorController.php:54
* @route '/autores/{autor}/edit'
*/
export const edit = (args: { autor: number | { codau: number } } | [autor: number | { codau: number } ] | number | { codau: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/autores/{autor}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AutorController::edit
* @see app/Http/Controllers/AutorController.php:54
* @route '/autores/{autor}/edit'
*/
edit.url = (args: { autor: number | { codau: number } } | [autor: number | { codau: number } ] | number | { codau: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { autor: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'codau' in args) {
        args = { autor: args.codau }
    }

    if (Array.isArray(args)) {
        args = {
            autor: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        autor: typeof args.autor === 'object'
        ? args.autor.codau
        : args.autor,
    }

    return edit.definition.url
            .replace('{autor}', parsedArgs.autor.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AutorController::edit
* @see app/Http/Controllers/AutorController.php:54
* @route '/autores/{autor}/edit'
*/
edit.get = (args: { autor: number | { codau: number } } | [autor: number | { codau: number } ] | number | { codau: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AutorController::edit
* @see app/Http/Controllers/AutorController.php:54
* @route '/autores/{autor}/edit'
*/
edit.head = (args: { autor: number | { codau: number } } | [autor: number | { codau: number } ] | number | { codau: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AutorController::edit
* @see app/Http/Controllers/AutorController.php:54
* @route '/autores/{autor}/edit'
*/
const editForm = (args: { autor: number | { codau: number } } | [autor: number | { codau: number } ] | number | { codau: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AutorController::edit
* @see app/Http/Controllers/AutorController.php:54
* @route '/autores/{autor}/edit'
*/
editForm.get = (args: { autor: number | { codau: number } } | [autor: number | { codau: number } ] | number | { codau: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AutorController::edit
* @see app/Http/Controllers/AutorController.php:54
* @route '/autores/{autor}/edit'
*/
editForm.head = (args: { autor: number | { codau: number } } | [autor: number | { codau: number } ] | number | { codau: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

edit.form = editForm

/**
* @see \App\Http\Controllers\AutorController::update
* @see app/Http/Controllers/AutorController.php:61
* @route '/autores/{autor}'
*/
export const update = (args: { autor: number | { codau: number } } | [autor: number | { codau: number } ] | number | { codau: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/autores/{autor}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\AutorController::update
* @see app/Http/Controllers/AutorController.php:61
* @route '/autores/{autor}'
*/
update.url = (args: { autor: number | { codau: number } } | [autor: number | { codau: number } ] | number | { codau: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { autor: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'codau' in args) {
        args = { autor: args.codau }
    }

    if (Array.isArray(args)) {
        args = {
            autor: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        autor: typeof args.autor === 'object'
        ? args.autor.codau
        : args.autor,
    }

    return update.definition.url
            .replace('{autor}', parsedArgs.autor.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AutorController::update
* @see app/Http/Controllers/AutorController.php:61
* @route '/autores/{autor}'
*/
update.put = (args: { autor: number | { codau: number } } | [autor: number | { codau: number } ] | number | { codau: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\AutorController::update
* @see app/Http/Controllers/AutorController.php:61
* @route '/autores/{autor}'
*/
update.patch = (args: { autor: number | { codau: number } } | [autor: number | { codau: number } ] | number | { codau: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\AutorController::update
* @see app/Http/Controllers/AutorController.php:61
* @route '/autores/{autor}'
*/
const updateForm = (args: { autor: number | { codau: number } } | [autor: number | { codau: number } ] | number | { codau: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AutorController::update
* @see app/Http/Controllers/AutorController.php:61
* @route '/autores/{autor}'
*/
updateForm.put = (args: { autor: number | { codau: number } } | [autor: number | { codau: number } ] | number | { codau: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AutorController::update
* @see app/Http/Controllers/AutorController.php:61
* @route '/autores/{autor}'
*/
updateForm.patch = (args: { autor: number | { codau: number } } | [autor: number | { codau: number } ] | number | { codau: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

/**
* @see \App\Http\Controllers\AutorController::destroy
* @see app/Http/Controllers/AutorController.php:73
* @route '/autores/{autor}'
*/
export const destroy = (args: { autor: number | { codau: number } } | [autor: number | { codau: number } ] | number | { codau: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/autores/{autor}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\AutorController::destroy
* @see app/Http/Controllers/AutorController.php:73
* @route '/autores/{autor}'
*/
destroy.url = (args: { autor: number | { codau: number } } | [autor: number | { codau: number } ] | number | { codau: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { autor: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'codau' in args) {
        args = { autor: args.codau }
    }

    if (Array.isArray(args)) {
        args = {
            autor: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        autor: typeof args.autor === 'object'
        ? args.autor.codau
        : args.autor,
    }

    return destroy.definition.url
            .replace('{autor}', parsedArgs.autor.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AutorController::destroy
* @see app/Http/Controllers/AutorController.php:73
* @route '/autores/{autor}'
*/
destroy.delete = (args: { autor: number | { codau: number } } | [autor: number | { codau: number } ] | number | { codau: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\AutorController::destroy
* @see app/Http/Controllers/AutorController.php:73
* @route '/autores/{autor}'
*/
const destroyForm = (args: { autor: number | { codau: number } } | [autor: number | { codau: number } ] | number | { codau: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AutorController::destroy
* @see app/Http/Controllers/AutorController.php:73
* @route '/autores/{autor}'
*/
destroyForm.delete = (args: { autor: number | { codau: number } } | [autor: number | { codau: number } ] | number | { codau: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const AutorController = { index, create, store, show, edit, update, destroy }

export default AutorController