import React from "react"
import {
    TextField,
    Radio,
    RadioGroup,
    FormControl,
    FormControlLabel,
    FormLabel,
    Grid,
    Button,
    Tab,
    Tabs,
} from "@mui/material"
import FreeBSDSelect from "./FreeBSDSelect"
import WindowsSelect from "./WindowsSelect"
import MacOSSelect from "./MacOSSelect"
import DockerSelect from "./DockerSelect"
import {
    Script,
    CICache,
    Machine,
    Artifact,
    machineType,
    EnvironmentVariable,
} from "./classes"
import ScriptConfig from "./ScriptConfig"
import CacheConfig from "./CacheConfig"
import ArtifactConfig from "./ArtifactConfig"
import Centered from "./Centered"
import Backup from "@mui/icons-material/Backup"
import Create from "@mui/icons-material/Create"
import Cached from "@mui/icons-material/Cached"
import Code from "@mui/icons-material/Code"
import EnvironmentVariables from "./EnvironmentVariables"
import Editor from "./Editor"

type Instruction = Script | CICache | Artifact
const instructions: Instruction[] = []
const mtype = new Machine()

const TaskFactory = () => {
    const [tab, setTab] = React.useState<number>(0)
    const [name, setName] = React.useState<string>("") // current task name
    const [freeBsdVersion, setFreeBsdVersion] = React.useState<string>("")
    const [macOsVersion, setMacOsVersion] = React.useState<string>("")
    const [dockerImage, setDockerImage] =
        React.useState<string>("debian:latest")
    const [onlyIf, setOnlyIf] = React.useState<string>("true")
    // a state that allows us to make react think the dom needs
    // to be re-rendered when we change it.
    const [, setForce] = React.useState<number>(0)
    const [envVars, setEnvVars] = React.useState<EnvironmentVariable[]>(
        [] as EnvironmentVariable[]
    )

    let osOptionsComponent: JSX.Element
    switch (mtype.getType()) {
        case "docker":
            osOptionsComponent = (
                <DockerSelect value={dockerImage} setValue={setDockerImage} />
            )
            break
        case "win":
            osOptionsComponent = <WindowsSelect />
            break
        case "mac":
            osOptionsComponent = (
                <MacOSSelect value={macOsVersion} setValue={setMacOsVersion} />
            )
            break
        default:
            osOptionsComponent = (
                <FreeBSDSelect
                    value={freeBsdVersion}
                    setValue={setFreeBsdVersion}
                />
            )
            break
    }

    /**
     * Rerenders the page.
     */
    function rerender() {
        setForce(Math.random() * Math.random())
    }

    const drawers: Array<JSX.Element> = []
    instructions.forEach((futureInstruction) => {
        if (futureInstruction instanceof CICache) {
            drawers.push(
                <CacheConfig
                    cache={futureInstruction}
                    key={futureInstruction.getId()}
                />
            )
        } else if (futureInstruction instanceof Script) {
            drawers.push(
                <ScriptConfig
                    script={futureInstruction}
                    key={futureInstruction.getId()}
                />
            )
        } else {
            drawers.push(
                <ArtifactConfig
                    artifact={futureInstruction}
                    key={futureInstruction.getId()}
                />
            )
        }
    })

    const exportYaml = () => {
        const collectedInstructions = instructions
            .map((i) => i.toString() as string)
            .join("\n    ")
        const value = `\
task:
    # Basic metadata:
    name: ${name}
    only_if: ${onlyIf}

    # The build machine:
    ${mtype.toString(macOsVersion, freeBsdVersion, dockerImage)}

    ${EnvironmentVariable.createEnvBlock(envVars)}

    # Instructions:
    ${collectedInstructions}
`

        return <Editor value={value} />
    }

    const general = (
        <form noValidate>
            <Grid container spacing={10}>
                <Grid item xs>
                    <TextField
                        label="Task Name"
                        variant="outlined"
                        value={name}
                        required={true}
                        onChange={(event) => setName(event.target.value)}
                    />
                    <TextField
                        className={"margin-top"}
                        label="Only run if"
                        variant="outlined"
                        value={onlyIf === "true" ? "Always run" : onlyIf}
                        required={onlyIf !== "true"}
                        onChange={(event) => setOnlyIf(event.target.value)}
                    />
                </Grid>
                <Grid item xs>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Machine Type</FormLabel>
                        <RadioGroup
                            aria-label="machine-type"
                            name="machineType"
                            value={mtype.getType()}
                            onChange={(event) => {
                                mtype.setType(event.target.value as machineType)
                                rerender()
                            }}
                        >
                            <FormControlLabel
                                value="docker"
                                control={<Radio disableRipple />}
                                label="Docker Image"
                            />
                            <FormControlLabel
                                value="mac"
                                control={<Radio disableRipple />}
                                label="macOS"
                            />
                            <FormControlLabel
                                value="win"
                                control={<Radio disableRipple />}
                                label="Windows"
                            />
                            <FormControlLabel
                                value="fbsd"
                                control={<Radio disableRipple />}
                                label="FreeBSD"
                            />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs>
                    {osOptionsComponent}
                </Grid>
                <Grid item xs>
                    <Button
                        variant="contained"
                        color="primary"
                        startIcon={<Create />}
                        endIcon={<Code />}
                        onClick={() => {
                            instructions.push(new Script())
                            rerender()
                        }}
                    >
                        Add Script
                    </Button>
                    <br />
                    <br />
                    <Button
                        variant="contained"
                        color="primary"
                        startIcon={<Create />}
                        endIcon={<Cached />}
                        onClick={() => {
                            instructions.push(new CICache())
                            rerender()
                        }}
                    >
                        Add Cache
                    </Button>
                    <br />
                    <br />
                    <Button
                        variant="contained"
                        color="primary"
                        startIcon={<Create />}
                        endIcon={<Backup />}
                        onClick={() => {
                            instructions.push(new Artifact())
                            rerender()
                        }}
                    >
                        Add Artifact
                    </Button>
                </Grid>
            </Grid>
            <br />
            <br />
            {drawers}
        </form>
    )

    const exportTab = (
        <>
            <Centered>
                <p>
                    Here is the generated YAML. You will want to put this in a{" "}
                    <code>.cirrus.yml</code> file.
                </p>
            </Centered>
            <Centered>{React.useMemo(() => exportYaml(), [tab])}</Centered>
        </>
    )

    const env = <EnvironmentVariables value={envVars} setValue={setEnvVars} />

    return (
        <>
            <Tabs
                style={{ marginBottom: 40 }}
                value={tab}
                onChange={(_e, val) => setTab(val)}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                <Tab label="General Options" />
                <Tab label="Environment Variables" />
                <Tab label="Export" />
            </Tabs>
            {tab === 0 ? general : null}
            {tab === 1 ? env : null}
            {tab === 2 ? exportTab : null}
        </>
    )
}

export default TaskFactory
