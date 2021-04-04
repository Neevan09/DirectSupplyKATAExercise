 
export const setPetData = state => ({
    type: 'PET_DETAILS_PERSISTED',
    payload: state
})

export const resetPets = () => ({
    type: 'RESET_PETS_DEFAULT'
  })