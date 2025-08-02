import { useTheme } from "@emotion/react"
import Motion from "../core/Motion"
import type { SizeProps, PositionProps, DisplayProps } from "../../../schemas/styles"

interface SkeletonProps extends SizeProps, PositionProps, DisplayProps {}

const Skeleton = (props: SkeletonProps) => {
    const theme = useTheme()

    return (
        <Motion
            r={10}
            bgColor={theme.colors.bgStrong}
            initial={{ opacity: 0.4 }}
            animate={{
                opacity: [0.4, 1, 0.4],
            }}
            transition={{
                duration: 1.4,
                repeat: Infinity,
            }}
            {...props}
        />
    )
}

export default Skeleton
