import { css } from 'styled-components';

const mixins = {

    centerStyles: css`
    display: flex;
    align-items: center;
    justify-content: center;`,

    leftStyles: css`
    display:flex;
    align-items:left;
    justify-content:left;`,

    rightStyles: css`
    display:flex;
    align-items:right;
    justify-content:right; `
}

export default mixins;