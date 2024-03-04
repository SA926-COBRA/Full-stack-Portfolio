const fs = require('fs');

function generateThemeCss(theme, radius) {
    const themeValues = {
        white: {
            background: '0 0% 100%',
            foreground: '222.2 84% 4.9%',
            card: '0 0% 100%',
            card_foreground: '222.2 84% 4.9%',
            popover: '0 0% 100%',
            popover_foreground: '222.2 84% 4.9%',
            primary: '222.2 47.4% 11.2%',
            primary_foreground: '210 40% 98%',
            secondary: '210 40% 96.1%',
            secondary_foreground: '222.2 47.4% 11.2%',
            muted: '210 40% 96.1%',
            muted_foreground: '215.4 16.3% 46.9%',
            accent: '210 40% 96.1%',
            accent_foreground: '222.2 47.4% 11.2%',
            destructive: '0 84.2% 60.2%',
            destructive_foreground: '210 40% 98%',
            border: '214.3 31.8% 91.4%',
            input: '214.3 31.8% 91.4%',
            ring: '222.2 84% 4.9%',

            background_dark: '222.2 84% 4.9%',
            foreground_dark: '210 40% 98%',
            card_dark: '222.2 84% 4.9%',
            card_foreground_dark: '210 40% 98%',
            popover_dark: '222.2 84% 4.9%',
            popover_foreground_dark: '210 40% 98%',
            primary_dark: '210 40% 98%',
            primary_foreground_dark: '222.2 47.4% 11.2%',
            secondary_dark: '217.2 32.6% 17.5%',
            secondary_foreground_dark: '210 40% 98%',
            muted_dark: '217.2 32.6% 17.5%',
            muted_foreground_dark: '215 20.2% 65.1%',
            accent_dark: '217.2 32.6% 17.5%',
            accent_foreground_dark: '210 40% 98%',
            destructive_dark: '0 62.8% 30.6%',
            destructive_foreground_dark: '210 40% 98%',
            border_dark: '217.2 32.6% 17.5%',
            input_dark: '217.2 32.6% 17.5%',
            ring_dark: '212.7 26.8% 83.9'
        },
        blue: {
            background: '0 0% 100%',
            foreground: '222.2 84% 4.9%',
            card: '0 0% 100%',
            card_foreground: '222.2 84% 4.9%',
            popover: '0 0% 100%',
            popover_foreground: '222.2 84% 4.9%',
            primary: '221.2 83.2% 53.3%',
            primary_foreground: '210 40% 98%',
            secondary: '210 40% 96.1%',
            secondary_foreground: '222.2 47.4% 11.2%',
            muted: '210 40% 96.1%',
            muted_foreground: '215.4 16.3% 46.9%',
            accent: '210 40% 96.1%',
            accent_foreground: '222.2 47.4% 11.2%',
            destructive: '0 84.2% 60.2%',
            destructive_foreground: '210 40% 98%',
            border: '214.3 31.8% 91.4%',
            input: '214.3 31.8% 91.4%',
            ring: '221.2 83.2% 53.3%',

            background_dark: '222.2 84% 4.9%',
            foreground_dark: '210 40% 98%',
            card_dark: '222.2 84% 4.9%',
            card_foreground_dark: '210 40% 98%',
            popover_dark: '222.2 84% 4.9%',
            popover_foreground_dark: '210 40% 98%',
            primary_dark: '217.2 91.2% 59.8%',
            primary_foreground_dark: '222.2 47.4% 11.2%',
            secondary_dark: '217.2 32.6% 17.5%',
            secondary_foreground_dark: '210 40% 98%',
            muted_dark: '217.2 32.6% 17.5%',
            muted_foreground_dark: '215 20.2% 65.1%',
            accent_dark: '217.2 32.6% 17.5%',
            accent_foreground_dark: '210 40% 98%',
            destructive_dark: '0 62.8% 30.6%',
            destructive_foreground_dark: '210 40% 98%',
            border_dark: '217.2 32.6% 17.5%',
            input_dark: '217.2 32.6% 17.5%',
            ring_dark: '224.3 76.3% 48%'
        },
        red: {
            background: '0 0% 100%',
            foreground: '0 0% 3.9%',
            card: '0 0% 100%',
            card_foreground: '0 0% 3.9%',
            popover: '0 0% 100%',
            popover_foreground: '0 0% 3.9%',
            primary: '0 72.2% 50.6%',
            primary_foreground: '0 85.7% 97.3%',
            secondary: '0 0% 96.1%',
            secondary_foreground: '0 0% 9%',
            muted: '0 0% 96.1%',
            muted_foreground: '0 0% 45.1%',
            accent: '0 0% 96.1%',
            accent_foreground: '0 0% 9%',
            destructive: '0 84.2% 60.2%',
            destructive_foreground: '0 0% 98%',
            border: '0 0% 89.8%',
            input: '0 0% 89.8%',
            ring: '0 72.2% 50.6%',

            background_dark: '0 0% 3.9%',
            foreground_dark: '0 0% 98%',
            card_dark: '0 0% 3.9%',
            card_foreground_dark: '0 0% 98%',
            popover_dark: '0 0% 3.9%',
            popover_foreground_dark: '0 0% 98%',
            primary_dark: '0 72.2% 50.6%',
            primary_foreground_dark: '0 85.7% 97.3%',
            secondary_dark: '0 0% 14.9%',
            secondary_foreground_dark: '0 0% 98%',
            muted_dark: '0 0% 14.9%',
            muted_foreground_dark: '0 0% 63.9%',
            accent_dark: '0 0% 14.9%',
            accent_foreground_dark: '0 0% 98%',
            destructive_dark: '0 62.8% 30.6%',
            destructive_foreground_dark: '0 0% 98%',
            border_dark: '0 0% 14.9%',
            input_dark: '0 0% 14.9%',
            ring_dark: '0 72.2% 50.6%'
        },
        rose: {
            background: '0 0% 100%',
            foreground: '240 10% 3.9%',
            card: '0 0% 100%',
            card_foreground: '240 10% 3.9%',
            popover: '0 0% 100%',
            popover_foreground: '240 10% 3.9%',
            primary: '346.8 77.2% 49.8%',
            primary_foreground: '355.7 100% 97.3%',
            secondary: '240 4.8% 95.9%',
            secondary_foreground: '240 5.9% 10%',
            muted: '240 4.8% 95.9%',
            muted_foreground: '240 3.8% 46.1%',
            accent: '240 4.8% 95.9%',
            accent_foreground: '240 5.9% 10%',
            destructive: '0 84.2% 60.2%',
            destructive_foreground: '0 0% 98%',
            border: '240 5.9% 90%',
            input: '240 5.9% 90%',
            ring: '346.8 77.2% 49.8%',

            background_dark: '20 14.3% 4.1%',
            foreground_dark: '0 0% 95%',
            card_dark: '24 9.8% 10%',
            card_foreground_dark: '0 0% 95%',
            popover_dark: '0 0% 9%',
            popover_foreground_dark: '0 0% 95%',
            primary_dark: '346.8 77.2% 49.8%',
            primary_foreground_dark: '355.7 100% 97.3%',
            secondary_dark: '240 3.7% 15.9%',
            secondary_foreground_dark: '0 0% 98%',
            muted_dark: '0 0% 15%',
            muted_foreground_dark: '240 5% 64.9%',
            accent_dark: '12 6.5% 15.1%',
            accent_foreground_dark: '0 0% 98%',
            destructive_dark: '0 62.8% 30.6%',
            destructive_foreground_dark: '0 85.7% 97.3%',
            border_dark: '240 3.7% 15.9%',
            input_dark: '240 3.7% 15.9%',
            ring_dark: '346.8 77.2% 49.8%'
        },
        green: {
            background: '0 0% 100%',
            foreground: '240 10% 3.9%',
            card: '0 0% 100%',
            card_foreground: '240 10% 3.9%',
            popover: '0 0% 100%',
            popover_foreground: '240 10% 3.9%',
            primary: '142.1 76.2% 36.3%',
            primary_foreground: '355.7 100% 97.3%',
            secondary: '240 4.8% 95.9%',
            secondary_foreground: '240 5.9% 10%',
            muted: '240 4.8% 95.9%',
            muted_foreground: '240 3.8% 46.1%',
            accent: '240 4.8% 95.9%',
            accent_foreground: '240 5.9% 10%',
            destructive: '0 84.2% 60.2%',
            destructive_foreground: '0 0% 98%',
            border: '240 5.9% 90%',
            input: '240 5.9% 90%',
            ring: '142.1 76.2% 36.3%',

            background_dark: '20 14.3% 4.1%',
            foreground_dark: '0 0% 95%',
            card_dark: '24 9.8% 10%',
            card_foreground_dark: '0 0% 95%',
            popover_dark: '0 0% 9%',
            popover_foreground_dark: '0 0% 95%',
            primary_dark: '142.1 70.6% 45.3%',
            primary_foreground_dark: '144.9 80.4% 10%',
            secondary_dark: '240 3.7% 15.9%',
            secondary_foreground_dark: '0 0% 98%',
            muted_dark: '0 0% 15%',
            muted_foreground_dark: '240 5% 64.9%',
            accent_dark: '12 6.5% 15.1%',
            accent_foreground_dark: '0 0% 98%',
            destructive_dark: '0 62.8% 30.6%',
            destructive_foreground_dark: '0 85.7% 97.3%',
            border_dark: '240 3.7% 15.9%',
            input_dark: '240 3.7% 15.9%',
            ring_dark: '142.4 71.8% 29.2%'
        },
        orange: {
            background: '0 0% 100%',
            foreground: '20 14.3% 4.1%',
            card: '0 0% 100%',
            card_foreground: '20 14.3% 4.1%',
            popover: '0 0% 100%',
            popover_foreground: '20 14.3% 4.1%',
            primary: '24.6 95% 53.1%',
            primary_foreground: '60 9.1% 97.8%',
            secondary: '60 4.8% 95.9%',
            secondary_foreground: '24 9.8% 10%',
            muted: '60 4.8% 95.9%',
            muted_foreground: '25 5.3% 44.7%',
            accent: '60 4.8% 95.9%',
            accent_foreground: '24 9.8% 10%',
            destructive: '0 84.2% 60.2%',
            destructive_foreground: '60 9.1% 97.8%',
            border: '20 5.9% 90%',
            input: '20 5.9% 90%',
            ring: '24.6 95% 53.1%',

            background_dark: '20 14.3% 4.1%',
            foreground_dark: '60 9.1% 97.8%',
            card_dark: '20 14.3% 4.1%',
            card_foreground_dark: '60 9.1% 97.8%',
            popover_dark: '20 14.3% 4.1%',
            popover_foreground_dark: '60 9.1% 97.8%',
            primary_dark: '20.5 90.2% 48.2%',
            primary_foreground_dark: '60 9.1% 97.8%',
            secondary_dark: '12 6.5% 15.1%',
            secondary_foreground_dark: '60 9.1% 97.8%',
            muted_dark: '12 6.5% 15.1%',
            muted_foreground_dark: '24 5.4% 63.9%',
            accent_dark: '12 6.5% 15.1%',
            accent_foreground_dark: '60 9.1% 97.8%',
            destructive_dark: '0 72.2% 50.6%',
            destructive_foreground_dark: '60 9.1% 97.8%',
            border_dark: '12 6.5% 15.1%',
            input_dark: '12 6.5% 15.1%',
            ring_dark: '20.5 90.2% 48.2%'
        },
        yellow: {
            background: '0 0% 100%',
            foreground: '20 14.3% 4.1%',
            card: '0 0% 100%',
            card_foreground: '20 14.3% 4.1%',
            popover: '0 0% 100%',
            popover_foreground: '20 14.3% 4.1%',
            primary: '47.9 95.8% 53.1%',
            primary_foreground: '26 83.3% 14.1%',
            secondary: '60 4.8% 95.9%',
            secondary_foreground: '24 9.8% 10%',
            muted: '60 4.8% 95.9%',
            muted_foreground: '25 5.3% 44.7%',
            accent: '60 4.8% 95.9%',
            accent_foreground: '24 9.8% 10%',
            destructive: '0 84.2% 60.2%',
            destructive_foreground: '60 9.1% 97.8%',
            border: '20 5.9% 90%',
            input: '20 5.9% 90%',
            ring: '20 14.3% 4.1%',

            background_dark: '20 14.3% 4.1%',
            foreground_dark: '60 9.1% 97.8%',
            card_dark: '20 14.3% 4.1%',
            card_foreground_dark: '60 9.1% 97.8%',
            popover_dark: '20 14.3% 4.1%',
            popover_foreground_dark: '60 9.1% 97.8%',
            primary_dark: '47.9 95.8% 53.1%',
            primary_foreground_dark: '26 83.3% 14.1%',
            secondary_dark: '12 6.5% 15.1%',
            secondary_foreground_dark: '60 9.1% 97.8%',
            muted_dark: '12 6.5% 15.1%',
            muted_foreground_dark: '24 5.4% 63.9%',
            accent_dark: '12 6.5% 15.1%',
            accent_foreground_dark: '60 9.1% 97.8%',
            destructive_dark: '0 62.8% 30.6%',
            destructive_foreground_dark: '60 9.1% 97.8%',
            border_dark: '12 6.5% 15.1%',
            input_dark: '12 6.5% 15.1%',
            ring_dark: '35.5 91.7% 32.9%'
        },
        purple: {
            background: '0 0% 100%',
            foreground: '224 71.4% 4.1%',
            card: '0 0% 100%',
            card_foreground: '224 71.4% 4.1%',
            popover: '0 0% 100%',
            popover_foreground: '224 71.4% 4.1%',
            primary: '262.1 83.3% 57.8%',
            primary_foreground: '210 20% 98%',
            secondary: '220 14.3% 95.9%',
            secondary_foreground: '220.9 39.3% 11%',
            muted: '220 14.3% 95.9%',
            muted_foreground: '220 8.9% 46.1%',
            accent: '220 14.3% 95.9%',
            accent_foreground: '220.9 39.3% 11%',
            destructive: '0 84.2% 60.2%',
            destructive_foreground: '210 20% 98%',
            border: '220 13% 91%',
            input: '220 13% 91%',
            ring: '262.1 83.3% 57.8%',

            background_dark: '224 71.4% 4.1%',
            foreground_dark: '210 20% 98%',
            card_dark: '224 71.4% 4.1%',
            card_foreground_dark: '210 20% 98%',
            popover_dark: '224 71.4% 4.1%',
            popover_foreground_dark: '210 20% 98%',
            primary_dark: '263.4 70% 50.4%',
            primary_foreground_dark: '210 20% 98%',
            secondary_dark: '215 27.9% 16.9%',
            secondary_foreground_dark: '210 20% 98%',
            muted_dark: '215 27.9% 16.9%',
            muted_foreground_dark: '217.9 10.6% 64.9%',
            accent_dark: '215 27.9% 16.9%',
            accent_foreground_dark: '210 20% 98%',
            destructive_dark: '0 62.8% 30.6%',
            destructive_foreground_dark: '210 20% 98%',
            border_dark: '215 27.9% 16.9%',
            input_dark: '215 27.9% 16.9%',
            ring_dark: '263.4 70% 50.4%'
        }

    };

    return `
    :root {
        --background-custom: ${themeValues[theme].background};
        --foreground-custom: ${themeValues[theme].foreground};
        --card-custom: ${themeValues[theme].card};
        --card-foreground-custom: ${themeValues[theme].card_foreground};
        --popover-custom: ${themeValues[theme].popover};
        --popover-foreground-custom: ${themeValues[theme].popover_foreground};
        --primary-custom: ${themeValues[theme].primary};
        --primary-foreground-custom: ${themeValues[theme].primary_foreground};
        --secondary-custom: ${themeValues[theme].secondary};
        --secondary-foreground-custom: ${themeValues[theme].secondary_foreground};
        --muted-custom: ${themeValues[theme].muted};
        --muted-foreground-custom: ${themeValues[theme].muted_foreground};
        --accent-custom: ${themeValues[theme].accent};
        --accent-foreground-custom: ${themeValues[theme].accent_foreground};
        --destructive-custom: ${themeValues[theme].destructive};
        --destructive-foreground-custom: ${themeValues[theme].destructive_foreground};
        --border-custom: ${themeValues[theme].border};
        --input-custom: ${themeValues[theme].input};
        --ring-custom: ${themeValues[theme].ring};
        --radius-custom: ${radius};
    }
    .dark {
        --background-custom-dark: ${themeValues[theme].background_dark};
        --foreground-custom-dark: ${themeValues[theme].foreground_dark};
        --card-custom-dark: ${themeValues[theme].card_dark};
        --card-foreground-custom-dark: ${themeValues[theme].card_foreground_dark};
        --popover-custom-dark: ${themeValues[theme].popover_dark};
        --popover-foreground-custom-dark: ${themeValues[theme].popover_foreground_dark};
        --primary-custom-dark: ${themeValues[theme].primary_dark};
        --primary-foreground-custom-dark: ${themeValues[theme].primary_foreground_dark};
        --secondary-custom-dark: ${themeValues[theme].secondary_dark};
        --secondary-foreground-custom-dark: ${themeValues[theme].secondary_foreground_dark};
        --muted-custom-dark: ${themeValues[theme].muted_dark};
        --muted-foreground-custom-dark: ${themeValues[theme].muted_foreground_dark};
        --accent-custom-dark: ${themeValues[theme].accent_dark};
        --accent-foreground-custom-dark: ${themeValues[theme].accent_foreground_dark};
        --destructive-custom-dark: ${themeValues[theme].destructive_dark};
        --destructive-foreground-custom-dark: ${themeValues[theme].destructive_foreground_dark};
        --border-custom-dark: ${themeValues[theme].border_dark};
        --input-custom-dark: ${themeValues[theme].input_dark};
        --ring-custom-dark: ${themeValues[theme].ring_dark};
    }
    `;

}

const themeData = JSON.parse(fs.readFileSync("./change_data/theme.json", 'utf8'));
const theme = themeData.theme || 'default';
const radius = themeData.radius || 'default';

const css = generateThemeCss(theme, radius);

fs.writeFileSync('./app/generatedTheme.css', css);
