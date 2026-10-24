import DashboardController from './DashboardController'
import LivroController from './LivroController'
import AutorController from './AutorController'
import AssuntoController from './AssuntoController'
import Settings from './Settings'

const Controllers = {
    DashboardController: Object.assign(DashboardController, DashboardController),
    LivroController: Object.assign(LivroController, LivroController),
    AutorController: Object.assign(AutorController, AutorController),
    AssuntoController: Object.assign(AssuntoController, AssuntoController),
    Settings: Object.assign(Settings, Settings),
}

export default Controllers