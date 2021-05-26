
export const ValidatorCodes = {
    success: 1,
    empty: 2,
    invalid: 0,
    alreadyTaken: 3,
}

const isEmpty = (word) => word.length === 0

const invalidWorkspaceNames = ['app'] 

const hasSpecialCharacter = (word) => {
    var format = /^[A-Z a-z0-9]+$/;
    return !format.test(word)
}

export const isValidWorkspaceName = workspace => {
    let response = ValidatorCodes.success

    if (isEmpty(workspace)) {
        return ValidatorCodes.empty
    }

    if (hasSpecialCharacter(workspace)) {
        return ValidatorCodes.invalid
    }
    
    invalidWorkspaceNames.map((value) => {

        if (workspace.toLowerCase() === value.toLowerCase()) {
            response = ValidatorCodes.alreadyTaken
        }
    })

    return response
}