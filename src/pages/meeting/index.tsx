import { ThemeProvider } from 'styled-components';
import {
    MeetingProvider,
    lightTheme,
} from 'amazon-chime-sdk-component-library-react';
function Meeting() {
    return (
        <ThemeProvider theme={lightTheme}>
            <MeetingProvider>
                <div></div>
            </MeetingProvider>
        </ThemeProvider>

    );
}

export { Meeting };
