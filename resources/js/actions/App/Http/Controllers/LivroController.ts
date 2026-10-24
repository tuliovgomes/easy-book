import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\LivroController::index
* @see app/Http/Controllers/LivroController.php:17
* @route '/livros'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/livros',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\LivroController::index
* @see app/Http/Controllers/LivroController.php:17
* @route '/livros'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\LivroController::index
* @see app/Http/Controllers/LivroController.php:17
* @route '/livros'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\LivroController::index
* @see app/Http/Controllers/LivroController.php:17
* @route '/livros'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\LivroController::index
* @see app/Http/Controllers/LivroController.php:17
* @route '/livros'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\LivroController::index
* @see app/Http/Controllers/LivroController.php:17
* @route '/livros'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\LivroController::index
* @see app/Http/Controllers/LivroController.php:17
* @route '/livros'
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
* @see \App\Http\Controllers\LivroController::create
* @see app/Http/Controllers/LivroController.php:29
* @route '/livros/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/livros/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\LivroController::create
* @see app/Http/Controllers/LivroController.php:29
* @route '/livros/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\LivroController::create
* @see app/Http/Controllers/LivroController.php:29
* @route '/livros/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\LivroController::create
* @see app/Http/Controllers/LivroController.php:29
* @route '/livros/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\LivroController::create
* @see app/Http/Controllers/LivroController.php:29
* @route '/livros/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\LivroController::create
* @see app/Http/Controllers/LivroController.php:29
* @route '/livros/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\LivroController::create
* @see app/Http/Controllers/LivroController.php:29
* @route '/livros/create'
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
* @see \App\Http\Controllers\LivroController::store
* @see app/Http/Controllers/LivroController.php:37
* @route '/livros'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/livros',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\LivroController::store
* @see app/Http/Controllers/LivroController.php:37
* @route '/livros'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\LivroController::store
* @see app/Http/Controllers/LivroController.php:37
* @route '/livros'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\LivroController::store
* @see app/Http/Controllers/LivroController.php:37
* @route '/livros'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\LivroController::store
* @see app/Http/Controllers/LivroController.php:37
* @route '/livros'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\LivroController::show
* @see app/Http/Controllers/LivroController.php:58
* @route '/livros/{livro}'
*/
export const show = (args: { livro: number | { codl: number } } | [livro: number | { codl: number } ] | number | { codl: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/livros/{livro}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\LivroController::show
* @see app/Http/Controllers/LivroController.php:58
* @route '/livros/{livro}'
*/
show.url = (args: { livro: number | { codl: number } } | [livro: number | { codl: number } ] | number | { codl: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { livro: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'codl' in args) {
        args = { livro: args.codl }
    }

    if (Array.isArray(args)) {
        args = {
            livro: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        livro: typeof args.livro === 'object'
        ? args.livro.codl
        : args.livro,
    }

    return show.definition.url
            .replace('{livro}', parsedArgs.livro.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\LivroController::show
* @see app/Http/Controllers/LivroController.php:58
* @route '/livros/{livro}'
*/
show.get = (args: { livro: number | { codl: number } } | [livro: number | { codl: number } ] | number | { codl: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\LivroController::show
* @see app/Http/Controllers/LivroController.php:58
* @route '/livros/{livro}'
*/
show.head = (args: { livro: number | { codl: number } } | [livro: number | { codl: number } ] | number | { codl: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\LivroController::show
* @see app/Http/Controllers/LivroController.php:58
* @route '/livros/{livro}'
*/
const showForm = (args: { livro: number | { codl: number } } | [livro: number | { codl: number } ] | number | { codl: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\LivroController::show
* @see app/Http/Controllers/LivroController.php:58
* @route '/livros/{livro}'
*/
showForm.get = (args: { livro: number | { codl: number } } | [livro: number | { codl: number } ] | number | { codl: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\LivroController::show
* @see app/Http/Controllers/LivroController.php:58
* @route '/livros/{livro}'
*/
showForm.head = (args: { livro: number | { codl: number } } | [livro: number | { codl: number } ] | number | { codl: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\LivroController::edit
* @see app/Http/Controllers/LivroController.php:67
* @route '/livros/{livro}/edit'
*/
export const edit = (args: { livro: number | { codl: number } } | [livro: number | { codl: number } ] | number | { codl: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/livros/{livro}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\LivroController::edit
* @see app/Http/Controllers/LivroController.php:67
* @route '/livros/{livro}/edit'
*/
edit.url = (args: { livro: number | { codl: number } } | [livro: number | { codl: number } ] | number | { codl: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { livro: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'codl' in args) {
        args = { livro: args.codl }
    }

    if (Array.isArray(args)) {
        args = {
            livro: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        livro: typeof args.livro === 'object'
        ? args.livro.codl
        : args.livro,
    }

    return edit.definition.url
            .replace('{livro}', parsedArgs.livro.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\LivroController::edit
* @see app/Http/Controllers/LivroController.php:67
* @route '/livros/{livro}/edit'
*/
edit.get = (args: { livro: number | { codl: number } } | [livro: number | { codl: number } ] | number | { codl: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\LivroController::edit
* @see app/Http/Controllers/LivroController.php:67
* @route '/livros/{livro}/edit'
*/
edit.head = (args: { livro: number | { codl: number } } | [livro: number | { codl: number } ] | number | { codl: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\LivroController::edit
* @see app/Http/Controllers/LivroController.php:67
* @route '/livros/{livro}/edit'
*/
const editForm = (args: { livro: number | { codl: number } } | [livro: number | { codl: number } ] | number | { codl: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\LivroController::edit
* @see app/Http/Controllers/LivroController.php:67
* @route '/livros/{livro}/edit'
*/
editForm.get = (args: { livro: number | { codl: number } } | [livro: number | { codl: number } ] | number | { codl: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\LivroController::edit
* @see app/Http/Controllers/LivroController.php:67
* @route '/livros/{livro}/edit'
*/
editForm.head = (args: { livro: number | { codl: number } } | [livro: number | { codl: number } ] | number | { codl: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\LivroController::update
* @see app/Http/Controllers/LivroController.php:80
* @route '/livros/{livro}'
*/
export const update = (args: { livro: number | { codl: number } } | [livro: number | { codl: number } ] | number | { codl: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/livros/{livro}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\LivroController::update
* @see app/Http/Controllers/LivroController.php:80
* @route '/livros/{livro}'
*/
update.url = (args: { livro: number | { codl: number } } | [livro: number | { codl: number } ] | number | { codl: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { livro: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'codl' in args) {
        args = { livro: args.codl }
    }

    if (Array.isArray(args)) {
        args = {
            livro: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        livro: typeof args.livro === 'object'
        ? args.livro.codl
        : args.livro,
    }

    return update.definition.url
            .replace('{livro}', parsedArgs.livro.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\LivroController::update
* @see app/Http/Controllers/LivroController.php:80
* @route '/livros/{livro}'
*/
update.put = (args: { livro: number | { codl: number } } | [livro: number | { codl: number } ] | number | { codl: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\LivroController::update
* @see app/Http/Controllers/LivroController.php:80
* @route '/livros/{livro}'
*/
update.patch = (args: { livro: number | { codl: number } } | [livro: number | { codl: number } ] | number | { codl: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\LivroController::update
* @see app/Http/Controllers/LivroController.php:80
* @route '/livros/{livro}'
*/
const updateForm = (args: { livro: number | { codl: number } } | [livro: number | { codl: number } ] | number | { codl: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\LivroController::update
* @see app/Http/Controllers/LivroController.php:80
* @route '/livros/{livro}'
*/
updateForm.put = (args: { livro: number | { codl: number } } | [livro: number | { codl: number } ] | number | { codl: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\LivroController::update
* @see app/Http/Controllers/LivroController.php:80
* @route '/livros/{livro}'
*/
updateForm.patch = (args: { livro: number | { codl: number } } | [livro: number | { codl: number } ] | number | { codl: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\LivroController::destroy
* @see app/Http/Controllers/LivroController.php:101
* @route '/livros/{livro}'
*/
export const destroy = (args: { livro: number | { codl: number } } | [livro: number | { codl: number } ] | number | { codl: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/livros/{livro}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\LivroController::destroy
* @see app/Http/Controllers/LivroController.php:101
* @route '/livros/{livro}'
*/
destroy.url = (args: { livro: number | { codl: number } } | [livro: number | { codl: number } ] | number | { codl: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { livro: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'codl' in args) {
        args = { livro: args.codl }
    }

    if (Array.isArray(args)) {
        args = {
            livro: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        livro: typeof args.livro === 'object'
        ? args.livro.codl
        : args.livro,
    }

    return destroy.definition.url
            .replace('{livro}', parsedArgs.livro.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\LivroController::destroy
* @see app/Http/Controllers/LivroController.php:101
* @route '/livros/{livro}'
*/
destroy.delete = (args: { livro: number | { codl: number } } | [livro: number | { codl: number } ] | number | { codl: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\LivroController::destroy
* @see app/Http/Controllers/LivroController.php:101
* @route '/livros/{livro}'
*/
const destroyForm = (args: { livro: number | { codl: number } } | [livro: number | { codl: number } ] | number | { codl: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\LivroController::destroy
* @see app/Http/Controllers/LivroController.php:101
* @route '/livros/{livro}'
*/
destroyForm.delete = (args: { livro: number | { codl: number } } | [livro: number | { codl: number } ] | number | { codl: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const LivroController = { index, create, store, show, edit, update, destroy }

export default LivroController