import Swal from 'sweetalert2';

type OpcoesConfirmacao = {
    titulo: string;
    texto?: string;
    confirmar?: string;
    cancelar?: string;
    perigo?: boolean;
};

export async function confirmar({
    titulo,
    texto,
    confirmar = 'Confirmar',
    cancelar = 'Cancelar',
    perigo = false,
}: OpcoesConfirmacao): Promise<boolean> {
    const escuro = document.documentElement.classList.contains('dark');

    const resultado = await Swal.fire({
        title: titulo,
        text: texto,
        icon: perigo ? 'warning' : 'question',
        showCancelButton: true,
        confirmButtonText: confirmar,
        cancelButtonText: cancelar,
        confirmButtonColor: perigo ? '#dc2626' : '#171717',
        cancelButtonColor: '#6b7280',
        reverseButtons: true,
        focusCancel: perigo,
        ...(escuro ? { background: '#0a0a0a', color: '#fafafa' } : {}),
    });

    return resultado.isConfirmed;
}
