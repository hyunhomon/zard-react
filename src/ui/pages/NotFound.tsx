import { useTheme } from "@emotion/react";

import HStack from "../components/core/HStack"
import VStack from "../components/core/VStack"
import Text from "../components/core/Text"

const NotFound = () => {
    const theme = useTheme()

    return (
        <VStack w="100%" h="100%" align="c" bgColor={theme.colors.bgWeak}>
            <Text value="404" font={theme.fonts.ls} color={theme.colors.ctStrong}/>
        </VStack>
    )
}

export default NotFound
