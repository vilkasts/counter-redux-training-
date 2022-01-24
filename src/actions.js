export const inc = () => ({ type: 'INC' });

export const dec = () => ({ type: 'DEC' });

export const rdm = () => {
  return {
    type: 'RDM',
    payload: Math.floor(Math.random()*10)
  };
};