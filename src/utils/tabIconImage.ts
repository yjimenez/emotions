export default (
  route: { name: string },
  defaultColor: string,
  focused: boolean
) => {
  let name: any = "scan";
  let color = defaultColor;

  if (route.name === "Selection") {
    name = focused ? "albums" : "albums-outline";
  } else if (route.name === "Document") {
    name = focused ? "document" : "document-text-outline";
  } else if (route.name === "Contact") {
    name = focused ? "chatbubbles" : "chatbubbles-outline";
  }
  return { name, color };
};
