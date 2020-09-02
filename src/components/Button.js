import React from "react";
import { useSnackbar } from "notistack";
import Button from '@material-ui/core/Button';

export default () => {
    const { enqueueSnackbar } = useSnackbar();

    const handleClick = () => {
        enqueueSnackbar('I love snacks.');
    };

    const handleClickVariant = (variant) => () => {
        // variant could be success, error, warning, info, or default
        enqueueSnackbar('This is a success message!', { variant });
    };

    return (
        <>
            <Button onClick={handleClick}>Show snackbar</Button>
            <Button onClick={handleClickVariant('success')}>Show success snackbar</Button>
        </>
    );
};