# Copilot Instructions for flatList

## Project Overview
**flatList** is an Expo/React Native app showcasing film categories with horizontal scrolling lists. It uses Expo Router for file-based navigation and React Native for cross-platform (iOS, Android, Web) UI rendering.

## Technology Stack
- **Framework**: Expo (~54.0.33) + React Native (0.81.5)
- **Navigation**: Expo Router (v6) with file-based routing
- **Styling**: React Native StyleSheet
- **Language**: TypeScript 5.9.2
- **Build Tool**: Expo CLI
- **Linting**: ESLint with expo config

## Architecture Patterns

### File-Based Routing (Expo Router)
- **Route Structure**: `app/(tabs)/` contains tab screens, `app/_layout.tsx` is the root layout
- **Tab Navigation**: Defined in `app/(tabs)/_layout.tsx` using `<Tabs>` component with 5 screens (Início, Filme, Flexbox, View, Imagem)
- **Convention**: Screen file names correspond to route paths (e.g., `index.tsx` → "/" route)
- **Key Files**:
  - `app/_layout.tsx` - Root layout with StatusBar configuration
  - `app/(tabs)/_layout.tsx` - Tab layout with header/tab styling and screen definitions

### Data Structure & Rendering
- **Data Format**: Nested categories structure (categories > filmes) with `id`, `titulo`, `cor`, and `imagem` fields
- **Rendering Pattern**: Vertical FlatList (categories) containing horizontal FlatList (films within each category)
  - Vertical: `app/(tabs)/index.tsx` uses `renderCategoria()` callback
  - Horizontal: Each category renders films with `horizontal={true}` prop
- **Key Component**: `renderCategoria()` function is a custom render callback, not a React component

### Styling Approach
- **Colors**: Dark theme with accent colors (gold #eff157ff tab bar, red #6e0505ff header)
- **Platform-Specific**: Tab bar height/padding differs for iOS (88px height, 30px padding) vs Android (64px, 80px)
- **Pattern**: All styles in `StyleSheet.create()` objects; platform checks use `Platform.OS`

## Development Workflow

### Running the App
```bash
npm start              # Start Expo dev server
npm run android        # Run on Android emulator
npm run ios           # Run on iOS simulator
npm run web           # Run on web
npm run start:tunnel  # Connect via tunnel (useful for physical devices)
```

### Linting
```bash
npm run lint          # Run ESLint
```

### Project Reset
```bash
npm run reset-project # Move starter to app-example/, create blank app/
```

### TypeScript Configuration
- **Paths**: `@/*` alias maps to workspace root (e.g., `@/app`, `@/components`)
- **Strict Mode**: Enabled (`"strict": true`)
- **Base Config**: Extends `expo/tsconfig.base`

## Critical Developer Conventions

1. **Component Structure**: Use functional components with `export default`; avoid class components
2. **TypeScript**: All `.tsx` files use strict type checking; use `any` sparingly (currently in `renderCategoria`)
3. **Styling**: Always use `StyleSheet.create()` and `style` props (not inline objects)
4. **FlatList Optimization**: 
   - Always provide `keyExtractor` prop
   - For nested lists: parent FlatList renders custom components, child FlatLists render items
5. **Navigation**: Route changes happen automatically via file-based routing; no manual `useNavigation` needed unless implementing programmatic navigation
6. **Images**: Use `expo-image` (already installed) for optimized image loading instead of `Image` from React Native

## Common Patterns to Follow

### Adding New Tab Screens
1. Create new file in `app/(tabs)/newscreen.tsx`
2. Add `<Tabs.Screen>` entry in `app/(tabs)/_layout.tsx` with icon from `@expo/vector-icons`
3. Use Ionicons: `name={focused ? "filled-name" : "outlined-name"}`

### Data-Driven Lists
- Structure data as array of objects with unique `id` fields
- Pass to FlatList with `data` prop, use `keyExtractor` for stable keys
- Render via `renderItem` callback, not .map()

### Color Theming
- Define colors as constants in data or separate config
- Current scheme: Dark backgrounds (#000000, #1a1a2e), accent colors in hex for films
- Header: Dark red (#6e0505ff), Tab bar: Gold (#eff157ff)

## Key Dependencies & Their Roles
- `expo-router`: File-based routing
- `@react-navigation/*`: Core navigation (Bottom Tabs, elements)
- `@expo/vector-icons`: Icon library (Ionicons used in tab bar)
- `react-native-reanimated`, `react-native-gesture-handler`: Animation/gesture support
- `react-native-web`: Cross-platform web support

## Notes for Improvement
- `renderCategoria()` uses `any` type; should be typed as `FlatListProps<Category>['renderItem']`
- Consider extracting category data to separate file (e.g., `data/categories.ts`)
- Image URI in data (`item.imagem`) is referenced but not populated in current data
