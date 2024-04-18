import React, {useEffect, useState} from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import AnimationLanguage from "./AnimationLanguage.jsx";


const Languages = () => {
    const [languages, setLanguages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [scrollValue, setScrollValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setScrollValue(newValue);
    };

    useEffect(() => {
        (async function fetchData() {
            const res = await fetch('https://api.github.com/repos/microsoft/vscode/languages');
            const json = await res.json();
            setLanguages(json)
            languages.length > 0 && setLoading(true);
        })()
    }, []);
    return (
        <div>
            {languages.length > 0 ? (
                languages.map((language, index) => (

                    <Box key={index} sx={{maxWidth: {xs: 320, sm: 480}, bgcolor: 'background.paper'}}>
                        <Tabs
                            value={scrollValue}
                            onChange={handleChange}
                            variant="scrollable"
                            scrollButtons="auto"
                            aria-label="scrollable auto tabs example"
                        >
                            <Tab label={language}/>
                        </Tabs>
                    </Box>
                ))
            ) : (
                <>
                    <AnimationLanguage loading={loading} languages={languages}/>
                </>
            )
            }
        </div>
    )
        ;
};

export default Languages;