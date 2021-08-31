import Swal, { SweetAlertIcon } from 'sweetalert2';

export const sweetAlert = (title:string, text: string, icon:SweetAlertIcon) => {
    Swal.fire({
        title,
        text,
        icon,
        confirmButtonText: 'Ok'
      })
}
