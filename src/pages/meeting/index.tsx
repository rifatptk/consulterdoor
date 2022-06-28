import {
    lightTheme,
    MeetingProvider,
} from 'amazon-chime-sdk-component-library-react';
import { ThemeProvider } from 'styled-components';
function Meeting() {
    return (
        <ThemeProvider theme={lightTheme}>
            <MeetingProvider>
                <div/>
            </MeetingProvider>
        </ThemeProvider>

    );
}

export { Meeting };
