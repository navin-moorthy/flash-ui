import { useTheme } from "../ThemeProvider";

export function useVariantColorWarning(label, variantColor) {
  const theme = useTheme();
  if (process.env.NODE_ENV !== "production") {
    const variantColorIsDefined = variantColor != null;
    if (variantColorIsDefined) {
      const variantColorExists = variantColor in theme.colors;
      // If variant color exists in theme object
      if (!variantColorExists) {
        console.warn(
          `You passed an invalid variantColor to the ${label} Component. Variant color values must be a color key in the theme object that has '100' - '900' color values. Check http://chakra-ui.com/theme#colors to see possible values`,
        );
      }

      // if variant color exists and is an object
      // TODO: Check for the 100 - 900 keys
      if (variantColorExists) {
        const colorObj = theme.colors[variantColor];
        const variantColorIsObject =
          typeof colorObj === "object" && Object.keys(colorObj).length > 0;

        if (!variantColorIsObject) {
          console.warn(
            `${label}: The variantColor passed exists in the theme object but is not valid. For a color to be a valid variantColor, it must be an object that has '100' - '900' color values. Use a tool like:
        https://smart-swatch.netlify.com/ to generate color values quickly`,
          );
        }
      }
    }
  }
}
