/* React Dependencies */
import React from "react";
import { Link } from "react-router-dom";

/* 3rd Party Components */
import { Card, CardContent, Typography, Avatar } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { deepOrange } from '@mui/material/colors';

/* Local Components */
import { useUsersList } from "./useUsersList";
import Loader from "../../componets/Loader";

const UsersListPage = () => {
    const { usersList, loading, error } = useUsersList()

    if (loading) {
        return <Loader />
    }

    return (
        <div>
            <h2>User's List</h2>
            <Box sx={{ flexGrow: 1 }}>
                <Grid
                    container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                >
                    {usersList?.map((user) => (
                        <Grid key={user.id} item xs={2} sm={4} md={4}>
                            <Link to={`/user/${user.id}`} style={{ textDecoration: 'none' }}>
                                <Card key={user.id}>
                                    <CardContent>
                                        <Avatar sx={{ bgcolor: deepOrange[500] }}>{user.name[0]}</Avatar>
                                        <Typography variant="h5" component="div">
                                            {user.name}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Link>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </div>
    );
};

export default UsersListPage;
