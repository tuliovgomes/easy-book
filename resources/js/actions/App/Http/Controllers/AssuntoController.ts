import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\AssuntoController::index
* @see app/Http/Controllers/AssuntoController.php:14
* @route '/assuntos'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/assuntos',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AssuntoController::index
* @see app/Http/Controllers/AssuntoController.php:14
* @route '/assuntos'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AssuntoController::index
* @see app/Http/Controllers/AssuntoController.php:14
* @route '/assuntos'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AssuntoController::index
* @see app/Http/Controllers/AssuntoController.php:14
* @route '/assuntos'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AssuntoController::index
* @see app/Http/Controllers/AssuntoController.php:14
* @route '/assuntos'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AssuntoController::index
* @see app/Http/Controllers/AssuntoController.php:14
* @route '/assuntos'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AssuntoController::index
* @see app/Http/Controllers/AssuntoController.php:14
* @route '/assuntos'
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
* @see \App\Http\Controllers\AssuntoController::create
* @see app/Http/Controllers/AssuntoController.php:26
* @route '/assuntos/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/assuntos/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AssuntoController::create
* @see app/Http/Controllers/AssuntoController.php:26
* @route '/assuntos/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AssuntoController::create
* @see app/Http/Controllers/AssuntoController.php:26
* @route '/assuntos/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AssuntoController::create
* @see app/Http/Controllers/AssuntoController.php:26
* @route '/assuntos/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AssuntoController::create
* @see app/Http/Controllers/AssuntoController.php:26
* @route '/assuntos/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AssuntoController::create
* @see app/Http/Controllers/AssuntoController.php:26
* @route '/assuntos/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AssuntoController::create
* @see app/Http/Controllers/AssuntoController.php:26
* @route '/assuntos/create'
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
* @see \App\Http\Controllers\AssuntoController::store
* @see app/Http/Controllers/AssuntoController.php:31
* @route '/assuntos'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/assuntos',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AssuntoController::store
* @see app/Http/Controllers/AssuntoController.php:31
* @route '/assuntos'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AssuntoController::store
* @see app/Http/Controllers/AssuntoController.php:31
* @route '/assuntos'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AssuntoController::store
* @see app/Http/Controllers/AssuntoController.php:31
* @route '/assuntos'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AssuntoController::store
* @see app/Http/Controllers/AssuntoController.php:31
* @route '/assuntos'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\AssuntoController::show
* @see app/Http/Controllers/AssuntoController.php:47
* @route '/assuntos/{assunto}'
*/
export const show = (args: { assunto: number | { codas: number } } | [assunto: number | { codas: number } ] | number | { codas: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/assuntos/{assunto}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AssuntoController::show
* @see app/Http/Controllers/AssuntoController.php:47
* @route '/assuntos/{assunto}'
*/
show.url = (args: { assunto: number | { codas: number } } | [assunto: number | { codas: number } ] | number | { codas: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { assunto: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'codas' in args) {
        args = { assunto: args.codas }
    }

    if (Array.isArray(args)) {
        args = {
            assunto: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        assunto: typeof args.assunto === 'object'
        ? args.assunto.codas
        : args.assunto,
    }

    return show.definition.url
            .replace('{assunto}', parsedArgs.assunto.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AssuntoController::show
* @see app/Http/Controllers/AssuntoController.php:47
* @route '/assuntos/{assunto}'
*/
show.get = (args: { assunto: number | { codas: number } } | [assunto: number | { codas: number } ] | number | { codas: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AssuntoController::show
* @see app/Http/Controllers/AssuntoController.php:47
* @route '/assuntos/{assunto}'
*/
show.head = (args: { assunto: number | { codas: number } } | [assunto: number | { codas: number } ] | number | { codas: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AssuntoController::show
* @see app/Http/Controllers/AssuntoController.php:47
* @route '/assuntos/{assunto}'
*/
const showForm = (args: { assunto: number | { codas: number } } | [assunto: number | { codas: number } ] | number | { codas: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AssuntoController::show
* @see app/Http/Controllers/AssuntoController.php:47
* @route '/assuntos/{assunto}'
*/
showForm.get = (args: { assunto: number | { codas: number } } | [assunto: number | { codas: number } ] | number | { codas: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AssuntoController::show
* @see app/Http/Controllers/AssuntoController.php:47
* @route '/assuntos/{assunto}'
*/
showForm.head = (args: { assunto: number | { codas: number } } | [assunto: number | { codas: number } ] | number | { codas: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\AssuntoController::edit
* @see app/Http/Controllers/AssuntoController.php:58
* @route '/assuntos/{assunto}/edit'
*/
export const edit = (args: { assunto: number | { codas: number } } | [assunto: number | { codas: number } ] | number | { codas: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/assuntos/{assunto}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AssuntoController::edit
* @see app/Http/Controllers/AssuntoController.php:58
* @route '/assuntos/{assunto}/edit'
*/
edit.url = (args: { assunto: number | { codas: number } } | [assunto: number | { codas: number } ] | number | { codas: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { assunto: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'codas' in args) {
        args = { assunto: args.codas }
    }

    if (Array.isArray(args)) {
        args = {
            assunto: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        assunto: typeof args.assunto === 'object'
        ? args.assunto.codas
        : args.assunto,
    }

    return edit.definition.url
            .replace('{assunto}', parsedArgs.assunto.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AssuntoController::edit
* @see app/Http/Controllers/AssuntoController.php:58
* @route '/assuntos/{assunto}/edit'
*/
edit.get = (args: { assunto: number | { codas: number } } | [assunto: number | { codas: number } ] | number | { codas: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AssuntoController::edit
* @see app/Http/Controllers/AssuntoController.php:58
* @route '/assuntos/{assunto}/edit'
*/
edit.head = (args: { assunto: number | { codas: number } } | [assunto: number | { codas: number } ] | number | { codas: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AssuntoController::edit
* @see app/Http/Controllers/AssuntoController.php:58
* @route '/assuntos/{assunto}/edit'
*/
const editForm = (args: { assunto: number | { codas: number } } | [assunto: number | { codas: number } ] | number | { codas: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AssuntoController::edit
* @see app/Http/Controllers/AssuntoController.php:58
* @route '/assuntos/{assunto}/edit'
*/
editForm.get = (args: { assunto: number | { codas: number } } | [assunto: number | { codas: number } ] | number | { codas: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AssuntoController::edit
* @see app/Http/Controllers/AssuntoController.php:58
* @route '/assuntos/{assunto}/edit'
*/
editForm.head = (args: { assunto: number | { codas: number } } | [assunto: number | { codas: number } ] | number | { codas: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\AssuntoController::update
* @see app/Http/Controllers/AssuntoController.php:65
* @route '/assuntos/{assunto}'
*/
export const update = (args: { assunto: number | { codas: number } } | [assunto: number | { codas: number } ] | number | { codas: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/assuntos/{assunto}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\AssuntoController::update
* @see app/Http/Controllers/AssuntoController.php:65
* @route '/assuntos/{assunto}'
*/
update.url = (args: { assunto: number | { codas: number } } | [assunto: number | { codas: number } ] | number | { codas: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { assunto: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'codas' in args) {
        args = { assunto: args.codas }
    }

    if (Array.isArray(args)) {
        args = {
            assunto: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        assunto: typeof args.assunto === 'object'
        ? args.assunto.codas
        : args.assunto,
    }

    return update.definition.url
            .replace('{assunto}', parsedArgs.assunto.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AssuntoController::update
* @see app/Http/Controllers/AssuntoController.php:65
* @route '/assuntos/{assunto}'
*/
update.put = (args: { assunto: number | { codas: number } } | [assunto: number | { codas: number } ] | number | { codas: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\AssuntoController::update
* @see app/Http/Controllers/AssuntoController.php:65
* @route '/assuntos/{assunto}'
*/
update.patch = (args: { assunto: number | { codas: number } } | [assunto: number | { codas: number } ] | number | { codas: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\AssuntoController::update
* @see app/Http/Controllers/AssuntoController.php:65
* @route '/assuntos/{assunto}'
*/
const updateForm = (args: { assunto: number | { codas: number } } | [assunto: number | { codas: number } ] | number | { codas: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AssuntoController::update
* @see app/Http/Controllers/AssuntoController.php:65
* @route '/assuntos/{assunto}'
*/
updateForm.put = (args: { assunto: number | { codas: number } } | [assunto: number | { codas: number } ] | number | { codas: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AssuntoController::update
* @see app/Http/Controllers/AssuntoController.php:65
* @route '/assuntos/{assunto}'
*/
updateForm.patch = (args: { assunto: number | { codas: number } } | [assunto: number | { codas: number } ] | number | { codas: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\AssuntoController::destroy
* @see app/Http/Controllers/AssuntoController.php:81
* @route '/assuntos/{assunto}'
*/
export const destroy = (args: { assunto: number | { codas: number } } | [assunto: number | { codas: number } ] | number | { codas: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/assuntos/{assunto}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\AssuntoController::destroy
* @see app/Http/Controllers/AssuntoController.php:81
* @route '/assuntos/{assunto}'
*/
destroy.url = (args: { assunto: number | { codas: number } } | [assunto: number | { codas: number } ] | number | { codas: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { assunto: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'codas' in args) {
        args = { assunto: args.codas }
    }

    if (Array.isArray(args)) {
        args = {
            assunto: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        assunto: typeof args.assunto === 'object'
        ? args.assunto.codas
        : args.assunto,
    }

    return destroy.definition.url
            .replace('{assunto}', parsedArgs.assunto.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AssuntoController::destroy
* @see app/Http/Controllers/AssuntoController.php:81
* @route '/assuntos/{assunto}'
*/
destroy.delete = (args: { assunto: number | { codas: number } } | [assunto: number | { codas: number } ] | number | { codas: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\AssuntoController::destroy
* @see app/Http/Controllers/AssuntoController.php:81
* @route '/assuntos/{assunto}'
*/
const destroyForm = (args: { assunto: number | { codas: number } } | [assunto: number | { codas: number } ] | number | { codas: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AssuntoController::destroy
* @see app/Http/Controllers/AssuntoController.php:81
* @route '/assuntos/{assunto}'
*/
destroyForm.delete = (args: { assunto: number | { codas: number } } | [assunto: number | { codas: number } ] | number | { codas: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const AssuntoController = { index, create, store, show, edit, update, destroy }

export default AssuntoController