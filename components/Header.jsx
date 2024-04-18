import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';


const Header = () => {
    return (
        <div role="presentation">
            <Breadcrumbs aria-label="breadcrumb">
                <Link
                    underline="hover"
                    sx={{display: 'flex', alignItems: 'center'}}
                    color="inherit"
                    href="/"
                >
                    <HomeIcon sx={{mr: 0.5}} fontSize="inherit"/>
                    Home
                </Link>
                <Link
                    underline="hover"
                    sx={{display: 'flex', alignItems: 'center'}}
                    color="inherit"
                    href="/material-ui/getting-started/installation/"
                >
                    🥊
                    Battle
                </Link>
            </Breadcrumbs>
        </div>
    );
};

export default Header;