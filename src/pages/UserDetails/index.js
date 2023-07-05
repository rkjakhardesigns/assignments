/* React Dependencies */
import React from "react";

/* 3rd Party Components */
import { Card, Box, Grid, Button, CardContent, Typography } from "@mui/material";
import { blue, green } from '@mui/material/colors';

/* Local Components */
import { useUserDetails } from "./useUserDetails";
import Loader from "../../componets/Loader";

const UserDetailsPage = () => {
    const { userDetails, loading, error } = useUserDetails()

    if (loading) {
        return <Loader />
    }

    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid
                    container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                    justifyContent="center"
                >
                    <Grid item xs={2} sm={4} md={4} mt={2}>
                        <Card>
                            <CardContent>
                                <Grid container spacing={2}>
                                    <Grid item xs={2} sm={4} md={8}>
                                        <Typography variant="body1" sx={{ mb: 3 }} color="black">
                                            {userDetails.name}
                                        </Typography>
                                        <Typography variant="body2" color={blue[500]}sx={{ fontWeight: 500 }}>
                                            {userDetails.email}
                                        </Typography>
                                        <Typography variant="body2" color="text.primary">
                                            {userDetails.phone}
                                        </Typography>
                                        <Typography variant="body2"  color={green[500]}sx={{ fontWeight: 500 }}>
                                            {userDetails.website}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={10} sm={8} md={4}>
                                        <Typography variant="body1" color="text.primary">
                                            Address: {userDetails.address.street}, {userDetails.address.suite},
                                            {userDetails.address.city}, {userDetails.address.zipcode}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default UserDetailsPage;
