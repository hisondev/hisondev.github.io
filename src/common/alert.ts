import { hison } from "hisonvue"

export const openAlert = (alertText: string) => {
    const alertComment = hison.component.getLabel('alertComment')
    const alertModal = hison.component.getModal('alertModal')
    if(!alertComment || !alertModal) {
        alert(alertText)
    }
    else {
        alertComment.setText(alertText)
        alertModal.setVisible(true)
    }
}