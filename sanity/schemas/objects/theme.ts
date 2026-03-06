import { defineType } from 'sanity';

const colorField = (name: string, title: string, defaultValue?: string) => ({
  name,
  title,
  type: 'color' as const,
  options: { disableAlpha: true },
  description: defaultValue ? `Par defaut : ${defaultValue}` : undefined,
});

const oklchField = (name: string, title: string, description?: string) => ({
  name,
  title,
  type: 'string' as const,
  description: description ?? 'Valeur oklch, ex: oklch(0.58 0.2 250)',
  validation: (rule: any) => rule.regex(/^oklch\(/).warning('Format attendu : oklch(L C H)'),
});

export const theme = defineType({
  name: 'theme',
  title: 'Theme / Design System',
  type: 'object',
  groups: [
    { name: 'colors', title: 'Couleurs' },
    { name: 'typography', title: 'Typographie' },
    { name: 'layout', title: 'Layout & Forme' },
  ],
  fields: [
    // --- Colors ---
    oklchField('primaryColor', 'Primary', 'Couleur principale. Ex: oklch(0.205 0 0)'),
    oklchField('primaryForeground', 'Primary Foreground', 'Texte sur primary. Ex: oklch(0.985 0 0)'),
    oklchField('secondaryColor', 'Secondary', 'Couleur secondaire.'),
    oklchField('secondaryForeground', 'Secondary Foreground', 'Texte sur secondary.'),
    oklchField('accentColor', 'Accent', 'Couleur d\'accent.'),
    oklchField('accentForeground', 'Accent Foreground', 'Texte sur accent.'),
    oklchField('backgroundColor', 'Background', 'Fond de page. Ex: oklch(1 0 0)'),
    oklchField('foregroundColor', 'Foreground', 'Texte principal. Ex: oklch(0.145 0 0)'),
    oklchField('mutedColor', 'Muted', 'Fond attenue.'),
    oklchField('mutedForeground', 'Muted Foreground', 'Texte attenue.'),
    oklchField('destructiveColor', 'Destructive', 'Couleur d\'erreur/danger.'),
    oklchField('borderColor', 'Border', 'Couleur des bordures.'),
    oklchField('ringColor', 'Ring', 'Couleur du ring focus.'),

    // Dark mode overrides
    oklchField('darkBackground', 'Dark: Background', 'Fond en mode sombre.'),
    oklchField('darkForeground', 'Dark: Foreground', 'Texte en mode sombre.'),
    oklchField('darkPrimary', 'Dark: Primary', 'Primary en mode sombre.'),
    oklchField('darkPrimaryForeground', 'Dark: Primary Foreground', 'Texte sur primary en dark.'),
    oklchField('darkSecondary', 'Dark: Secondary', 'Secondary en mode sombre.'),
    oklchField('darkAccent', 'Dark: Accent', 'Accent en mode sombre.'),
    oklchField('darkMuted', 'Dark: Muted', 'Muted en mode sombre.'),
    oklchField('darkMutedForeground', 'Dark: Muted Foreground', 'Texte attenue en dark.'),
    oklchField('darkDestructive', 'Dark: Destructive', 'Destructive en mode sombre.'),
    oklchField('darkBorder', 'Dark: Border', 'Bordures en mode sombre.'),

    // --- Typography ---
    {
      name: 'fontFamily',
      title: 'Police principale',
      type: 'string',
      description: 'Nom Google Fonts. Ex: Inter, Poppins, Outfit',
      group: 'typography',
    },
    {
      name: 'fontFamilyHeading',
      title: 'Police des titres',
      type: 'string',
      description: 'Optionnel. Si vide, utilise la police principale.',
      group: 'typography',
    },
    {
      name: 'fontWeights',
      title: 'Graisses a charger',
      type: 'string',
      description: 'Ex: 400;500;600;700',
      group: 'typography',
    },

    // --- Layout ---
    {
      name: 'borderRadius',
      title: 'Border Radius (rem)',
      type: 'number',
      description: 'Rayon de base en rem. Ex: 0.625 (par defaut)',
      group: 'layout',
      validation: (rule) => rule.min(0).max(2),
    },
    {
      name: 'hueShift',
      title: 'Hue primaire (palette generee)',
      type: 'number',
      description: 'Teinte oklch 0-360 pour generer la palette primary-50..950. Ex: 250',
      group: 'layout',
      validation: (rule) => rule.min(0).max(360),
    },
  ],
  // Group color fields
  fieldsets: [],
});

// Apply groups to color fields after creation
theme.fields.forEach((f: any) => {
  if (!f.group) {
    if (f.name.startsWith('dark')) {
      f.group = 'colors';
      f.fieldset = undefined;
    } else if (['primaryColor', 'primaryForeground', 'secondaryColor', 'secondaryForeground',
      'accentColor', 'accentForeground', 'backgroundColor', 'foregroundColor',
      'mutedColor', 'mutedForeground', 'destructiveColor', 'borderColor', 'ringColor'
    ].includes(f.name)) {
      f.group = 'colors';
    }
  }
});
