import Swal from "sweetalert2";

type CustomSwalProps = {
  title: string;
  text: string;
  icon: "error" | "success" | "question";
  showCancelButton?: boolean;
  cancelButtonText?: string;
  confirmButtonText: string;
};

async function customSwal({
  title,
  text,
  icon,
  showCancelButton,
  cancelButtonText,
  confirmButtonText,
}: CustomSwalProps) {
  return await Swal.fire({
    title,
    text,
    icon,
    showCancelButton: showCancelButton ?? false,
    confirmButtonText,
    cancelButtonText,
    customClass: {
      confirmButton: "swal-confirm",
      cancelButton: "swal-cancel",
    },
  });
}

export { customSwal };