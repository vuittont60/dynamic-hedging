import hre, { ethers } from "hardhat"

const executorAddress = "0x5c47ca059ab8f3838bd7136830de24e06cf9359a"
const optionRegistryAddress = "0x8Bc23878981a207860bA4B185fD065f4fd3c7725"

const main = async () => {
	const [deployer] = await ethers.getSigners()
	console.log("Deploying contracts with the account:", deployer.address)

	const multicallFactory = await ethers.getContractFactory("VaultCollateralMulticall")
	const multicall = await multicallFactory.deploy(executorAddress, optionRegistryAddress)

	try {
		await hre.run("verify:verify", {
			address: multicall.address,
			constructorArguments: [executorAddress, optionRegistryAddress]
		})
		console.log("multicall verified")
	} catch (err: any) {
		if (err.message.includes("Reason: Already Verified")) {
			console.log("multicall contract already verified")
		}
	}
}

main()
	.then(() => process.exit(0))
	.catch(error => {
		console.error(error)
		process.exit(1)
	})
