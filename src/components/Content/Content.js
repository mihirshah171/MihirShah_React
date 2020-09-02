import React from 'react';
import { Box, Slide, Container, CssBaseline } from "@material-ui/core";
const Content = (props) => {
    return (
        <div>
            <React.Fragment>
                <CssBaseline />
                <Container>
                    <Slide direction="up" in={true} mountOnEnter unmountOnExit {...(true ? { timeout: 2000 } : {})}>
                        <Box my={8}>
                            {[...new Array(10)]
                                .map(
                                    () => `Cras mattis consectetur purus sit amet fermentum.
                                        Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                                        Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
                                )
                                .join("\n")}
                        </Box>
                    </Slide>
                </Container>
            </React.Fragment>
        </div>
    );
};

export default Content;
